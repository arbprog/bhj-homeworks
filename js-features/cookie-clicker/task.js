"use strict";

const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

function clicking() {
    if(image.width === 200) {
        image.width = 250;
    } else {
        image.width = 200;
    }
    clickerCounter.textContent = +clickerCounter.textContent + 1;
}


image.onclick = clicking;
