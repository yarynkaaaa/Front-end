document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const sliderWrapper = slider.querySelector(".slider-wrapper");
    const prevBtn = slider.querySelector(".prev-btn");
    const nextBtn = slider.querySelector(".next-btn");
    const slides = slider.querySelectorAll(".slide-card");
    let currentSlideIndex = 0;
    let slideInterval;

    function goToSlide(index) {
        slides[currentSlideIndex].style.display = "none";
        currentSlideIndex = (index + slides.length) % slides.length;
        slides[currentSlideIndex].style.display = "block";
    }

    function startSlideShow() {
        slideInterval = setInterval(() => {
            goToSlide(currentSlideIndex + 1);
        }, 2000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    prevBtn.addEventListener("click", () => {
        stopSlideShow();
        goToSlide(currentSlideIndex - 1);
    });

    nextBtn.addEventListener("click", () => {
        stopSlideShow();
        goToSlide(currentSlideIndex + 1);
    });

    slider.addEventListener("mouseenter", stopSlideShow);
    slider.addEventListener("mouseleave", startSlideShow);

    startSlideShow();
});
