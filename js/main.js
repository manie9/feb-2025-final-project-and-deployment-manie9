document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".gallery-slide");
    const dots = document.querySelectorAll(".gallery-dot");
    const prevButton = document.querySelector(".gallery-arrow.prev");
    const nextButton = document.querySelector(".gallery-arrow.next");
    let currentIndex = 0;

    function updateGallery(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateGallery(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateGallery(currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateGallery(currentIndex);
        });
    });

    // Initialize the gallery
    updateGallery(currentIndex);

    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.toggle("dark-mode", savedTheme === "dark");
    }

    themeToggleBtn.addEventListener("click", () => {
        const isDarkMode = body.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });
});