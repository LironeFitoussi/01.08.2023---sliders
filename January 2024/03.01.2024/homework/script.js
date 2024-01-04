"use strict;";
console.log("log test");
const taskInput = document.querySelector("#task-input");
const dueTimeInput = document.querySelector("#due-time");
const taskList = document.querySelector("#task-list");

let tasks;

let lastID;

const findAvailableID = () => {
  for (let i = 1; i < tasks.length + 2; i++) {
    if (!tasks.some((task) => task.id === i)) {
      lastID = i;
      break;
    }
  }
  return lastID;
};

function addTask() {
  taskTime = dueTimeInput.value;
  console.log(taskTime);
  if (taskInput.value !== "") {
    const newTask = {
      id: findAvailableID(),
      task: taskInput.value,
      dueTime: dueTimeInput.value || "No due time",
      isDone: false,
      isPassed: checkIfPassed(taskTime),
    };
    tasks.push(newTask);
    saveTasks();
  }
}

function checkIfPassed(task) {
  const today = new Date();
  const userDate = new Date(task);
  console.log(today);
  console.log(userDate);
  if (today > userDate) {
    return "true";
  } else {
    false;
  }
  console.log(task);
}

function deleteTask(task) {
  let itemIndex = tasks.findIndex((item) => {
    return item.id == task;
  });
  tasks.splice(itemIndex, 1);
  saveTasks();
}

function saveTasks() {
  // tasks.sort((a, b) => a.id - b.id);
  localStorage.setItem("userLocalTasks", JSON.stringify(tasks));
  taskList.innerHTML = "";
  loadTasks();
}

function setIsDone(taskId) {
  let itemIndex = tasks.findIndex((item) => {
    return item.id == taskId;
  });
  tasks[itemIndex].isDone = true;
  saveTasks();
}

function unDone(taskId) {
  let itemIndex = tasks.findIndex((item) => {
    return item.id == taskId;
  });
  tasks[itemIndex].isDone = false;
  saveTasks();
}

function loadTasks() {
  tasks = JSON.parse(localStorage.getItem("userLocalTasks")) || [];
  tasks.forEach((task) => {
    taskList.innerHTML += `
      <li class="task-item" style="background-color: ${
        task.isPassed ? "red" : null
      };">
        ${
          !task.isDone
            ? `<input type="checkbox" onchange="setIsDone(${task.id})"></input>`
            : "Done!"
        }
        <span style="text-decoration: ${
          task.isDone ? "line-through" : "null"
        };" onclick="unDone(${task.id})">${task.task}</span>
        <span>${task.dueTime}</span>
        <button onclick="deleteTask(${
          task.id
        })" class="remove-btn">Delete Task</button>
      </li>
    `;
  });
}

function resetTasks() {
  if (confirm("Are You sure?")) localStorage.clear();
  window.location.reload();
}

window.onload = function () {
  loadTasks();
};
