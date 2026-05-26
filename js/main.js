"use strict";
import form from "./form.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize form handler
  form();

  // ═══════════════════════════════════════════════════════════
  // MOBILE NAVIGATION
  // ═══════════════════════════════════════════════════════════
  const navToggle = document.querySelector("#nav-toggle");
  const navMobile = document.querySelector("#nav-mobile");
  const navMobileLinks = document.querySelectorAll(".nav-mobile__link");

  if (navToggle && navMobile) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMobile.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close mobile nav when clicking a link
    navMobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMobile.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  // HEADER SCROLL BEHAVIOR
  // ═══════════════════════════════════════════════════════════
  const header = document.querySelector("#header");
  let lastScroll = 0;

  // ═══════════════════════════════════════════════════════════
  // SCROLL PROGRESS INDICATOR
  // ═══════════════════════════════════════════════════════════
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    document.body.style.setProperty('--scroll-progress', progress);
  };

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Add scrolled class after 100px
    if (currentScroll > 100) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }

    // Update scroll progress
    updateScrollProgress();

    lastScroll = currentScroll;
  });

  // Initialize scroll progress
  updateScrollProgress();

  // ═══════════════════════════════════════════════════════════
  // HERO WORD REVEAL ANIMATION
  // ═══════════════════════════════════════════════════════════
  const heroHeadlines = document.querySelectorAll('.anchor__headline, .anchor__headline-secondary');
  
  heroHeadlines.forEach(headline => {
    const text = headline.textContent.trim();
    const words = text.split(/\s+/).filter(w => w.length > 0);
    headline.innerHTML = '';
    headline.removeAttribute('data-animate'); // Remove default animation
    
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'word-reveal';
      span.textContent = word;
      span.style.transitionDelay = `${index * 0.08}s`;
      headline.appendChild(span);
      
      // Add space between words (except after last word)
      if (index < words.length - 1) {
        headline.appendChild(document.createTextNode(' '));
      }
    });
  });

  // Observe hero headlines for word reveal
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const words = entry.target.querySelectorAll('.word-reveal');
        words.forEach(word => word.classList.add('is-visible'));
        heroObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  heroHeadlines.forEach(headline => heroObserver.observe(headline));

  // ═══════════════════════════════════════════════════════════
  // ANIMATE ON SCROLL
  // ═══════════════════════════════════════════════════════════
  const animateElements = document.querySelectorAll("[data-animate]");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.1,
  };

  const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        animateObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateElements.forEach((el) => {
    animateObserver.observe(el);
  });

  // ═══════════════════════════════════════════════════════════
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ═══════════════════════════════════════════════════════════
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#" || href === "#!") return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // ═══════════════════════════════════════════════════════════
  // ACTIVE NAV LINK ON SCROLL
  // ═══════════════════════════════════════════════════════════
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".header__link");

  const highlightNav = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 150;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("header__link--active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("header__link--active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", highlightNav);
});
