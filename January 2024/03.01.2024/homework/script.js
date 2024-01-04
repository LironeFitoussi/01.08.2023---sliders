"use-strict;";
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
  if (taskInput.value !== "") {
    const newTask = {
      id: findAvailableID(),
      task: taskInput.value,
      dueTime: dueTimeInput.value || "No due time",
      isDone: false,
    };
    tasks.push(newTask);
    saveTasks();
  }
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
  window.location.reload();
}

function setIsDone(taskId) {
  let itemIndex = tasks.findIndex((item) => {
    return item.id == taskId;
  });
  tasks[itemIndex].isDone = true;
  saveTasks();
  window.location.reload();
}

function loadTasks() {
  tasks = JSON.parse(localStorage.getItem("userLocalTasks")) || [];
  tasks.forEach((task) => {
    console.log(task);

    taskList.innerHTML += `
      <li class="task-item">
        ${
          !task.isDone
            ? `<input type="checkbox" onchange="setIsDone(${task.id})"></input>`
            : "done"
        }
        <span style="text-decoration: ${
          task.isDone ? "line-through" : "none"
        };">${task.task}</span>
        <span>${task.dueTime}</span>
        <button onclick="deleteTask(${
          task.id
        })" class="remove-btn">Delete Task</button>
      </li>
    `;
    console.log(task.id);
  });
}

function resetTasks() {
  if (confirm("Are You sure?")) localStorage.clear();
  window.location.reload();
}

window.onload = function () {
  loadTasks();
};
