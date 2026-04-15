const form = () => {
  const contactForm = document.querySelector("#contact-form"),
    responseMessage = document.querySelector(".response"),
    submitButton = document.querySelector(".gate__submit");

  if (!contactForm || !responseMessage || !submitButton) return;

  const originalButtonText = submitButton.textContent;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formElement = e.target;
    
    // Get form values
    const name = formElement.querySelector('[name="name"]').value.trim();
    const email = formElement.querySelector('[name="email"]').value.trim();
    const message = formElement.querySelector('[name="message"]').value.trim();
    const botcheck = formElement.querySelector('[name="botcheck"]')?.checked || false;
    
    // Disable button to prevent double submission
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    
    responseMessage.classList.add("open");
    responseMessage.textContent = "Sending...";

    async function sendData() {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: "53fa0968-2c7f-4fd5-bc71-464a7afd5e44",
            name: name,
            email: email,
            message: message,
            botcheck: botcheck,
            subject: "New AI Integration Inquiry"
          })
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.success) {
          // Track successful form submission
          if (window.umami) {
            umami.track('form_submit');
          }
          
          responseMessage.classList.add("response--success");
          responseMessage.textContent = "Message sent. I'll get back to you shortly.";
          formElement.reset();
        } else {
          responseMessage.classList.add("response--error");
          responseMessage.textContent = "Something went wrong. Please try again or reach out directly.";
        }
      } catch (error) {
        responseMessage.classList.add("response--error");
        responseMessage.textContent = "Something went wrong. Please try again or reach out directly.";
        console.error("Form submission error:", error);
      } finally {
        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }

    await sendData();
    
    setTimeout(() => {
      responseMessage.classList.remove("open", "response--success", "response--error");
    }, 5000);
  });
};

export default form;
