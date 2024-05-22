import "./ajax-utils.js";

(function (global) {
    let contentAjax = {};
    const snippetHomeHTML = "./snippet/home_snippet.html";
    const containerAjaxSelector = ".context__container";

    function insertHTML(selector, html) {
        document.querySelector(selector).innerHTML = html;
    }

    function showLoading(selector) {
        document.querySelector(selector).innerHTML = `
        <div class="loading_box">
            <span class="loader"></span>
        </div>`;
    }

    function onDOMContentLoaded() {
        showLoading(containerAjaxSelector);
        setTimeout(function () {
            ajaxUtils.sendGetRequest(
                snippetHomeHTML,
                function (response) {
                    insertHTML(containerAjaxSelector, response);
                    showSlides(0); // Виклик функції showSlides для першого слайду
                },
                false
            );
        }, 1800);

        setupBurgerMenu();
        setupCarousel();
    }

    function setupBurgerMenu() {
        const burger = document.getElementById("hamburger_menu");
        const nav = document.querySelector(".navbar_content");

        if (burger && nav) {
            burger.addEventListener("click", function () {
                burger.classList.toggle("active");
                nav.classList.toggle("active");
            });
        }

        const headerBurger = document.querySelector(".header__burger");
        const main = document.querySelector(".main");
        const navbarContent = document.querySelector(".navbar_content ul");
        let isBurgerActive = false;

        if (headerBurger && main && navbarContent) {
            headerBurger.addEventListener("click", function () {
                main.classList.toggle("main-push");
                isBurgerActive = !isBurgerActive;

                if (isBurgerActive) {
                    const homeIcon = document.createElement("li");
                    homeIcon.innerHTML =
                        '<img class="header__icons" src="img/icons/home-heart-solid-24.png" alt="" /><a class="link-catalog" href="./index.html">Home</a>';
                    navbarContent.insertBefore(homeIcon, navbarContent.firstChild);
                } else {
                    const homeIcon = navbarContent.querySelector("li:first-child");
                    if (homeIcon) {
                        navbarContent.removeChild(homeIcon);
                    }
                }
            });
        }
    }

    function setupCarousel() {
        const slider = document.querySelector(".slider");
        if (!slider) return;

        const poperedBtn = slider.querySelector(".popered_btn");
        const nextBtn = slider.querySelector(".next_btn");
        const slides = slider.querySelectorAll(".slide-card");

        if (!slides.length) return;

        let currentSlideIndex = 0;
        let slideInterval;

        function showSlides(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? "block" : "none";
            });
        }

        function goToSlide(index) {
            currentSlideIndex = (index + slides.length) % slides.length;
            showSlides(currentSlideIndex);
        }

        function showSlides(index) {
            goToSlide(index);
        }

        function startSlideShow() {
            slideInterval = setInterval(() => {
                goToSlide(currentSlideIndex + 1);
            }, 2000);
        }

        function stopSlideShow() {
            clearInterval(slideInterval);
        }

        if (poperedBtn && nextBtn) {
            poperedBtn.addEventListener("click", () => {
                stopSlideShow();
                goToSlide(currentSlideIndex - 1);
            });

            nextBtn.addEventListener("click", () => {
                stopSlideShow();
                goToSlide(currentSlideIndex + 1);
            });

            slider.addEventListener("mouseenter", stopSlideShow);
            slider.addEventListener("mouseleave", startSlideShow);
        }

        showSlides(currentSlideIndex); // Показати перший слайд при завантаженні
        startSlideShow();
    }

    document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
    global.contentAjax = contentAjax;
})(window);
