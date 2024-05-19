import './ajax-utils'
// ------------------------------ 19 pr---------------------------------------
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
                showSlides(currentSlideIndex);
            },
            false
        );
    }, 1800);
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
window.contentAjax = contentAjax;

// -------------- мак дональдз бургер---------------
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("hamburger_menu");
    const nav = document.querySelector(".navbar_content");

    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var burger = document.querySelector(".header__burger");
    var main = document.querySelector(".main");
    var navbarContent = document.querySelector(".navbar_content ul");
    var isBurgerActive = false;

    burger.addEventListener("click", function () {
        main.classList.toggle("main-push");
        isBurgerActive = !isBurgerActive; // Змінюємо стан бургера при кожному кліку

        if (isBurgerActive) {
            var homeIcon = document.createElement("li");
            homeIcon.innerHTML =
                '<img class="header__icons" src="img/icons/home-heart-solid-24.png" alt="" /><a class="link-catalog" href="./index.html">Home</a>';
            navbarContent.insertBefore(homeIcon, navbarContent.firstChild);
        } else {
            // Видаляємо іконку "Home", якщо бургер неактивний
            var homeIcon = document.querySelector(".navbar_content ul li:first-child");
            if (homeIcon) {
                navbarContent.removeChild(homeIcon);
            }
        }
    });
});

// --------------------- karusel------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const sliderWrapper = slider.querySelector(".slider_wrapper");
    const poperedBtn = slider.querySelector(".popered_btn");
    const nextBtn = slider.querySelector(".next_btn");
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

    startSlideShow();
});



