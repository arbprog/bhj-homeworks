"use strict";

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");
xhr.responseType = "json";
xhr.setRequestHeader("Content-Type","application/json");
xhr.send();

const items = document.getElementById("items");

xhr.addEventListener("readystatechange", function(){
  if(this.readyState == 4){
    const valute = this.response.response.Valute;

    for (let i in valute) {
      const charCode = valute[i].CharCode;
      const value = valute[i].Value;

      items.insertAdjacentHTML("beforeend", addItem(charCode, value));
    }

    document.querySelector(".loader").classList.remove("loader_active");
  }
});

function addItem(charCode, value){
  return `<div class="item">
            <div class="item__code">${charCode}</div>
            <div class="item__value">${value}</div>
            <div class="item__currency">руб.</div>
          </div>`;
}