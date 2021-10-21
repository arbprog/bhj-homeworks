"use strict";

const tasksControl = document.querySelector(".tasks__control");
const tasksInput = document.querySelector(".tasks__input");
const tasksAdd = document.querySelector(".tasks__add");

let taskList = [];

tasksAdd.addEventListener("click", (e) => {
  e.preventDefault();
});

tasksInput.addEventListener("change", addTask);

function addTask(){
  tasksControl.insertAdjacentHTML("afterend", elementTask());

  taskList.push( document.querySelector(".task__remove") );
  taskList.forEach(elem => {
    elem.addEventListener("click", removeTask);
  });

  this.value = "";
}

function removeTask(){
  return this.closest(".task").remove();
}

function elementTask(){
  return`
    <div class="task">
      <div class="task__title">
        ${tasksInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
  `;
}