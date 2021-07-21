"use strict";

const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
const clickerStatus = document.getElementById("clicker__status");


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




