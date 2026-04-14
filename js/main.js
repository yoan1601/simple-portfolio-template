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

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    // Add scrolled class after 100px
    if (currentScroll > 100) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }

    lastScroll = currentScroll;
  });

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
