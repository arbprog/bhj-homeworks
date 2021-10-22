"use strict";

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.responseType = "json";
xhr.setRequestHeader("Content-Type","application/json");
xhr.send();

let pollTitle = document.querySelector(".poll__title");
let pollAnswers = document.querySelector(".poll__answers");

xhr.addEventListener("readystatechange", function(){
  if(this.readyState == 4){
    let text = xhr.response.data.title;
    pollTitle.textContent = text;

    let arr = xhr.response.data.answers;
    arr.forEach(item => {
      pollAnswers.insertAdjacentHTML("beforeend", `<button class="poll__answer">${item}</button>`);
    });
    
    let button = document.querySelectorAll(".poll__answer");
    button.forEach(item => {
      item.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
    });
  }
});