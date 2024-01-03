const taskInput = document.getElementById("task-input");
const dueTimeInput = document.getElementById("due-time");
const taskList = document.getElementById("task-list");

function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    Object.assign(element, attributes);
    return element;
}

function addTask() {
    if (taskInput.value.trim() !== "") {
        const taskItem = createElement("li", { className: "task-item" });

        const newTask = {
            task: taskInput.value,
            dueTime: dueTimeInput.value || "No due time"
        };

        taskItem.innerHTML = `
            <span>${newTask.task}</span>
            <span>${newTask.dueTime}</span>
            <button class="delete-btn" onclick="deleteTask(this.parentNode)">Delete</button>
        `;

        taskItem.dataset.task = JSON.stringify(newTask);
        taskList.appendChild(taskItem);

        taskInput.value = "";
        dueTimeInput.value = "";
        saveTasks();
    }
}

function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
    saveTasks();
}

function saveTasks() {
    const tasks = Array.from(taskList.children).map(taskItem => JSON.parse(taskItem.dataset.task));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    for (const task of tasks) {
        const taskItem = createElement("li", { className: "task-item" });
        taskItem.innerHTML = `
            <span>${task.task}</span>
            <span>${task.dueTime}</span>
            <button class="delete-btn" onclick="deleteTask(this.parentNode)">Delete</button>
        `;

        taskItem.dataset.task = JSON.stringify(task);
        taskList.appendChild(taskItem);
    }
}

window.onload = function () {
    loadTasks();
};
