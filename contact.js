document.addEventListener("DOMContentLoaded", () => {
    initContactForm()
  })
  
  // Contact Form Validation and Submission
  function initContactForm() {
    const contactForm = document.getElementById("contact-form")
  
    if (contactForm) {
      const nameInput = document.getElementById("name")
      const emailInput = document.getElementById("email")
      const subjectInput = document.getElementById("subject")
      const messageInput = document.getElementById("message")
      const consentCheckbox = document.getElementById("consent")
  
      const nameError = document.getElementById("name-error")
      const emailError = document.getElementById("email-error")
      const subjectError = document.getElementById("subject-error")
      const messageError = document.getElementById("message-error")
      const consentError = document.getElementById("consent-error")
  
      const formStatus = document.getElementById("form-status")
  
      // Real-time validation for name
      nameInput.addEventListener("input", function () {
        if (this.value.trim() === "") {
          nameError.textContent = "Please enter your name"
        } else if (this.value.trim().length < 2) {
          nameError.textContent = "Name must be at least 2 characters"
        } else {
          nameError.textContent = ""
        }
      })
  
      // Real-time validation for email
      emailInput.addEventListener("input", function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
        if (this.value.trim() === "") {
          emailError.textContent = "Please enter your email address"
        } else if (!emailRegex.test(this.value.trim())) {
          emailError.textContent = "Please enter a valid email address"
        } else {
          emailError.textContent = ""
        }
      })
  
      // Real-time validation for subject
      subjectInput.addEventListener("input", function () {
        if (this.value.trim() === "") {
          subjectError.textContent = "Please enter a subject"
        } else if (this.value.trim().length < 3) {
          subjectError.textContent = "Subject must be at least 3 characters"
        } else {
          subjectError.textContent = ""
        }
      })
  
      // Real-time validation for message
      messageInput.addEventListener("input", function () {
        if (this.value.trim() === "") {
          messageError.textContent = "Please enter your message"
        } else if (this.value.trim().length < 10) {
          messageError.textContent = "Message must be at least 10 characters"
        } else {
          messageError.textContent = ""
        }
      })
  
      // Consent checkbox validation
      consentCheckbox.addEventListener("change", function () {
        if (!this.checked) {
          consentError.textContent = "You must consent to data processing"
        } else {
          consentError.textContent = ""
        }
      })
  
      // Form submission
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault()
  
        // Perform final validation
        let isValid = true
  
        // Validate name
        if (nameInput.value.trim() === "") {
          nameError.textContent = "Please enter your name"
          isValid = false
        } else if (nameInput.value.trim().length < 2) {
          nameError.textContent = "Name must be at least 2 characters"
          isValid = false
        }
  
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (emailInput.value.trim() === "") {
          emailError.textContent = "Please enter your email address"
          isValid = false
        } else if (!emailRegex.test(emailInput.value.trim())) {
          emailError.textContent = "Please enter a valid email address"
          isValid = false
        }
  
        // Validate subject
        if (subjectInput.value.trim() === "") {
          subjectError.textContent = "Please enter a subject"
          isValid = false
        } else if (subjectInput.value.trim().length < 3) {
          subjectError.textContent = "Subject must be at least 3 characters"
          isValid = false
        }
  
        // Validate message
        if (messageInput.value.trim() === "") {
          messageError.textContent = "Please enter your message"
          isValid = false
        } else if (messageInput.value.trim().length < 10) {
          messageError.textContent = "Message must be at least 10 characters"
          isValid = false
        }
  
        // Validate consent
        if (!consentCheckbox.checked) {
          consentError.textContent = "You must consent to data processing"
          isValid = false
        }
  
        // If form is valid, submit it
        if (isValid) {
          // Show loading state
          formStatus.textContent = "Sending your message..."
          formStatus.className = "form-status info"
          formStatus.style.display = "block"
  
          // Simulate form submission (would be replaced with actual API call)
          setTimeout(() => {
            // Show success message
            formStatus.textContent = "Thank you! Your message has been sent successfully."
            formStatus.className = "form-status success"
  
            // Reset form
            contactForm.reset()
  
            // Clear error messages
            nameError.textContent = ""
            emailError.textContent = ""
            subjectError.textContent = ""
            messageError.textContent = ""
            consentError.textContent = ""
  
            // Hide success message after a few seconds
            setTimeout(() => {
              formStatus.style.display = "none"
            }, 5000)
          }, 1500)
        }
      })
    }
  }
  