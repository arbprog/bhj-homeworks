"use strict";

const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
const clickerSpeed = document.getElementById("clicker__speed__counter");
const btn = document.getElementById("btn");
let clickTime = 0;

//Функция, которая считает клики
function clickCounter() {
    clickerCounter.textContent = +clickerCounter.textContent + 1;
}

//Функция, которая считает скорость кликов
function clickSpeedCounter() {   
    let newClickTime = clickTime;
    clickTime = new Date();
    let result = 1000 / (clickTime - newClickTime);
    
    clickerSpeed.textContent = result.toFixed(2);
}

//Функция, которая изменяет размер картинки при клике
function changeSize(element) {
    if (element.target.width && element.target.width === 200) {
        element.target.width += 20;
    } else {
        element.target.width -= 20;
    }

    clickCounter();
    clickSpeedCounter();
}

//Функция, которая очищает данные и картинку возвращает к первональному размеру
function clear() {
    clickerCounter.textContent = 0;
    clickerSpeed.textContent = 0;
    image.width = 200;
}

image.onclick = changeSize;
btn.onclick = clear;
