"use strict";

window.addEventListener("scroll", getBlock);

function getBlock() {
  for (let block of document.querySelectorAll(".reveal")) {
    showBlock(block);
  }
}

function showBlock(elem) {
  let position = elem.getBoundingClientRect();

  const windowHeight = document.documentElement.clientHeight;

  if( position.top < windowHeight && position.bottom < windowHeight ){
    elem.classList.add("reveal_active");
  }
}