"use strict";

const timer = document.getElementById("timer");
let deadline = prompt("Сколько часов осталость до конца конкурса?");

while (deadline === null || isNaN(deadline) !== false || deadline === "") {
    deadline = prompt("Сколько часов осталость до конца конкурса?");
}

let time = +deadline * 3600;

setInterval(updateTimer, 1000);

function updateTimer() {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60);
    let hours = Math.trunc(minutes / 60);   

    hours = hours < 10 ? `0${hours}` : hours;    
    minutes = minutes > 59 ? `${minutes % 60}` : minutes;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;    

    timer.textContent = `${hours}:${minutes}:${seconds}`;

    time--;
}   
