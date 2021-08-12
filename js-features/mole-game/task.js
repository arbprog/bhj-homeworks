"use strict";

const elements = document.getElementsByClassName("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function reload() {
    dead.textContent = 0;
    lost.textContent = 0;
}

function game() {
    for (let i = 1; i <= elements.length; i++) {
        let hole = document.getElementById(`hole${i}`);

        hole.onclick = function() {

            if (hole.classList.contains("hole_has-mole")) {
                dead.textContent = +dead.textContent + 1;
            } else {
                lost.textContent = +lost.textContent + 1;
            }
        
            if (dead.textContent === "10") {
                alert(`Ура! Победа!`);
                reload();
            }

            if (lost.textContent === "5") {
                alert(`Вы проиграли! Попробуйте снова.`);
                reload();
            }
        };
    }
}

game();