const form = () => {
  const contactForm = document.querySelector("#contact-form"),
    responseMessage = document.querySelector(".response");

  if (!contactForm || !responseMessage) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    responseMessage.classList.add("open");
    responseMessage.textContent = "Sending...";

    async function getData() {
      try {
        const response = await fetch("mail.php", {
          method: "POST",
          body: formData,
        });
        
        const result = await response.text();
        
        if (response.ok) {
          responseMessage.classList.add("response--success");
          responseMessage.textContent = result || "Message sent successfully!";
        } else {
          responseMessage.classList.add("response--error");
          responseMessage.textContent = result || "Something went wrong. Please try again.";
        }
      } catch (error) {
        responseMessage.classList.add("response--error");
        responseMessage.textContent = "Connection error. Please try again.";
        console.error(error.message);
      }
    }

    await getData();
    
    setTimeout(() => {
      responseMessage.classList.remove("open", "response--success", "response--error");
    }, 4000);
    
    form.reset();
  });
};

export default form;
