"use strict";

let time = 0;
const timer = document.getElementById("timer");
let deadline = prompt("Сколько часов осталость до конца конкурса?");

if (deadline === null) {
    deadline = prompt("Сколько часов осталость до конца конкурса?");
}


// setInterval(updateTimer, 1000);

// function updateTimer() {
//     let seconds = Math.floor(time % 60);
//     let minutes = Math.floor(time / 60);
//     let hours = Math.trunc(minutes / 60);   

//     hours = hours < 10 ? `0${hours}` : hours;    
//     minutes = minutes > 59 ? `${minutes % 60}` : minutes;
//     minutes = minutes < 10 ? `0${minutes}` : minutes;
//     seconds = seconds < 10 ? `0${seconds}` : seconds;    

//     timer.textContent = `${hours}:${minutes}:${seconds}`;

//     time--;
// }   
