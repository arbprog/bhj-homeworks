"use strict";
const value = document.querySelector(".dropdown__value");
const items = document.querySelectorAll(".dropdown__item");

const itemsArr = Array.from(items);

value.addEventListener("click", showMenu);

items.forEach(item => {
    item.addEventListener("click", changeItem);
});

function showMenu() {
    value.nextElementSibling.classList.toggle("dropdown__list_active");
}

function changeItem(e) {
    e.preventDefault();
    value.textContent = this.textContent;
    showMenu();
}