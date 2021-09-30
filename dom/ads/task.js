"use strict"

const rotatorCases = document.querySelectorAll(".rotator__case");

const rotatorActive = "rotator__case_active";
const rotatorLength = rotatorCases.length - 1;
let index = 0;

setInterval(adRotator, 1000);

function adRotator() {
  toggle( index );
  (index === 0) ? index = rotatorLength : index -= 1;
  toggle( index );
}

function toggle(index) {
  rotatorCases[index].classList.toggle( rotatorActive );
}