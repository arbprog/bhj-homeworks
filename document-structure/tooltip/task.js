"use strict";

const tooltips = document.querySelectorAll(".has-tooltip");
tooltips.forEach(elem => elem.insertAdjacentHTML("afterend", `<div class="tooltip" style="left: 0; top: 0">Проверка!</div>`));

tooltips.forEach(elem => elem.addEventListener("click", showTooltip));

function showTooltip(e){
  e.preventDefault();
  this.nextElementSibling.classList.toggle("tooltip_active");
  this.nextElementSibling.textContent = this.title;

  let position = this.getBoundingClientRect();
	this.nextElementSibling.style.left = position.left + "px";
  this.nextElementSibling.style.top = position.top + 20 + "px";
}