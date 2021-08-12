"use strict";

const main = "modal_main";
const success = "modal_success";

showModal(main);
closeModal();

function showModal(index) {
    const modal = document.getElementById(index);
    modal.classList.add("modal_active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const close = document.querySelectorAll(".modal__close");

    for (let elem of close) {
        elem.addEventListener("click", function() {
            elem.closest(".modal_active").classList.remove("modal_active");
            document.body.style.overflow = "";

            if(elem.closest(".show-success")) {
                showModal(success);
            }
        });
    }
}