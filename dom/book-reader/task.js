"use strict"

const book = document.querySelector(".book");
const fontSizes = Array.from( document.querySelectorAll(".font-size") );

fontSizes.forEach(elem => elem.addEventListener("click", switchFontSize));

function switchFontSize(e){
  e.preventDefault();
  removeFontSize();

  this.classList.add("font-size_active");

  if(this.classList.contains("font-size_small")){
    book.classList.add("book_fs-small");
  } else if(this.classList.contains("font-size_big")){
    book.classList.add("book_fs-big");
  } else {
    book.classList.remove("book_fs-small" || "book_fs-big");
  }
}

function removeFontSize() {
  fontSizes.forEach(elem => {
    elem.classList.remove("font-size_active");
  });
};