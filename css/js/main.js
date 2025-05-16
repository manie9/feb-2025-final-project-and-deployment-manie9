// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize all components
    initMobileMenu()
    initThemeToggle()
    initGallerySlider()
    initNewsletterForm()
    initFaqAccordion()
  })
  
  // Mobile Menu Toggle
  function initMobileMenu() {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const navLinks = document.querySelector(".nav-links")
  
    if (mobileMenuToggle && navLinks) {
      mobileMenuToggle.addEventListener("click", function () {
        this.classList.toggle("active")
        navLinks.classList.toggle("active")
  
        // Prevent scrolling when menu is open
        document.body.classList.toggle("menu-open")
      })
  
      // Close menu when clicking on a link
      const navItems = document.querySelectorAll(".nav-links a")
      navItems.forEach((item) => {
        item.addEventListener("click", () => {
          mobileMenuToggle.classList.remove("active")
          navLinks.classList.remove("active")
          document.body.classList.remove("menu-open")
        })
      })
  
      // Close menu when clicking outside
      document.addEventListener("click", (event) => {
        if (
          !event.target.closest(".main-nav") &&
          !event.target.closest(".mobile-menu-toggle") &&
          navLinks.classList.contains("active")
        ) {
          mobileMenuToggle.classList.remove("active")
          navLinks.classList.remove("active")
          document.body.classList.remove("menu-open")
        }
      })
    }
  }
  
  // Theme Toggle
  function initThemeToggle() {
    const themeToggleBtn = document.getElementById("theme-toggle-btn")
    const themeIcon = themeToggleBtn.querySelector("i")
  
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.body.classList.add("dark-theme")
      themeIcon.classList.remove("fa-moon")
      themeIcon.classList.add("fa-sun")
    }
  
    // Toggle theme on button click
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme")
  
      if (document.body.classList.contains("dark-theme")) {
        themeIcon.classList.remove("fa-moon")
        themeIcon.classList.add("fa-sun")
        localStorage.setItem("theme", "dark")
      } else {
        themeIcon.classList.remove("fa-sun")
        themeIcon.classList.add("fa-moon")
        localStorage.setItem("theme", "light")
      }
    })
  }
  
  // Gallery Slider
  function initGallerySlider() {
    const gallerySlider = document.getElementById("gallery-slider")
  
    if (gallerySlider) {
      const slides = gallerySlider.querySelectorAll(".gallery-slide")
      const dots = document.querySelectorAll(".gallery-dot")
      const prevBtn = document.querySelector(".gallery-arrow.prev")
      const nextBtn = document.querySelector(".gallery-arrow.next")
  
      let currentSlide = 0
      let slideInterval
  
      // Function to show a specific slide
      function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach((slide) => slide.classList.remove("active"))
        dots.forEach((dot) => dot.classList.remove("active"))
  
        // Add active class to current slide and dot
        slides[index].classList.add("active")
        dots[index].classList.add("active")
  
        currentSlide = index
      }
  
      // Function to show next slide
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length
        showSlide(currentSlide)
      }
  
      // Function to show previous slide
      function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length
        showSlide(currentSlide)
      }
  
      // Set up automatic slide rotation
      function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 5000)
      }
  
      // Clear interval when user interacts with slider
      function resetSlideInterval() {
        clearInterval(slideInterval)
        startSlideInterval()
      }
  
      // Event listeners for dots
      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          showSlide(index)
          resetSlideInterval()
        })
      })
  
      // Event listeners for arrows
      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          prevSlide()
          resetSlideInterval()
        })
      }
  
      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          nextSlide()
          resetSlideInterval()
        })
      }
  
      // Start automatic rotation
      startSlideInterval()
    }
  }
  

  
  // Newsletter Form
  function initNewsletterForm() {
    const newsletterForm = document.getElementById("newsletter-form")
  
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault()
  
        const emailInput = document.getElementById("newsletter-email")
        const messageElement = document.getElementById("newsletter-message")
  
        // Simple email validation
        const email = emailInput.value.trim()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
        if (!email) {
          showFormMessage(messageElement, "Please enter your email address.", "error")
          return
        }
  
        if (!emailRegex.test(email)) {
          showFormMessage(messageElement, "Please enter a valid email address.", "error")
          return
        }
  
        // Simulate form submission (would be replaced with actual API call)
        showFormMessage(messageElement, "Subscribing...", "info")
  
        setTimeout(() => {
          // Simulate successful subscription
          showFormMessage(messageElement, "Thank you for subscribing to our newsletter!", "success")
          newsletterForm.reset()
  
          // Clear success message after a few seconds
          setTimeout(() => {
            messageElement.textContent = ""
            messageElement.className = "form-message"
          }, 5000)
        }, 1500)
      })
    }
  }
  
  // FAQ Accordion
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item")
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
  
      question.addEventListener("click", () => {
        // Toggle active class on clicked item
        item.classList.toggle("active")
  
        // Close other items (optional)
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active")
          }
        })
      })
    })
  }
  
  // Helper function to show form messages
  function showFormMessage(element, message, type) {
    if (element) {
      element.textContent = message
      element.className = `form-message ${type}`
    }
  }
  
