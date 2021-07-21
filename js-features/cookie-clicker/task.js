"use strict";

const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

image.onclick = function (event) {
    console.log(event);
}; 