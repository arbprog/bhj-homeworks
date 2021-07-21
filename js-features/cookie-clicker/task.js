"use strict";

const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");


function clickCounter() {
    clickerCounter.textContent = +clickerCounter.textContent + 1;
}

function changeSize() {
    if(image.width === 200) {
        image.width = 250;
    } else {
        image.width = 200;
    }

    clickCounter();
}

image.onclick = changeSize;


