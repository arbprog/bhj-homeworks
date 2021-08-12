"use strict";

const   prev = document.querySelector(".slider__arrow_prev"),
        next = document.querySelector(".slider__arrow_next"),
        slides = document.querySelectorAll(".slider__item"),
        dots = document.querySelectorAll(".slider__dot");

let index = 0;

function activeSlide(element) {
    for (let slide of slides) {
        slide.classList.remove("slider__item_active");
    }

    slides[element].classList.add("slider__item_active");
}

function activeDot(element) {
    for (let dot of dots) {
        dot.classList.remove("slider__dot_active");
    }

    dots[element].classList.add("slider__dot_active");
}

function prepareCurrentSlide(ind) {
    activeSlide(ind);
    activeDot(ind);
}

function nextSlide() {
    if (index === slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

function prewSlide() {
    if (index === 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach(function(item, indexDot) {
    item.addEventListener("click", function() {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prewSlide);