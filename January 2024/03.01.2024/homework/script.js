// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("task-input");
    var dueTime = document.getElementById("due-time");
    var taskList = document.getElementById("task-list");

    if (taskInput.value.trim() !== "") {
        // Create task item
        var taskItem = document.createElement("li");
        taskItem.className = "task-item";

        // Create task text
        var taskText = document.createElement("span");
        taskText.textContent = taskInput.value;

        // Create due time text
        var dueTimeText = document.createElement("span");
        dueTimeText.textContent = dueTime.value || "No due time";

        // Create delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            taskList.removeChild(taskItem);
            saveTasks();
        };

        // Append elements to task item
        taskItem.appendChild(taskText);
        taskItem.appendChild(dueTimeText);
        taskItem.appendChild(deleteBtn);

        // Append task item to task list
        taskList.appendChild(taskItem);

        // Clear input
        taskInput.value = "";
        dueTime.value = "";

        // Save tasks to local storage
        saveTasks();
    }
}

// Function to save tasks to local storage
function saveTasks() {
    var tasks = [];
    var taskList = document.getElementById("task-list").children;

    for (var i = 0; i < taskList.length; i++) {
        var taskItem = taskList[i];
        var taskText = taskItem.querySelector("span").textContent;
        var dueTimeText = taskItem.querySelector("span:nth-child(2)").textContent;

        tasks.push({ task: taskText, dueTime: dueTimeText });
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var taskList = document.getElementById("task-list");

    for (var i = 0; i < tasks.length; i++) {
        var taskItem = document.createElement("li");
        taskItem.className = "task-item";

        var taskText = document.createElement("span");
        taskText.textContent = tasks[i].task;

        var dueTimeText = document.createElement("span");
        dueTimeText.textContent = tasks[i].dueTime;

        var deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            taskList.removeChild(taskItem);
            saveTasks();
        };

        taskItem.appendChild(taskText);
        taskItem.appendChild(dueTimeText);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
    }
}

// Load tasks on page load
window.onload = function () {
    loadTasks();
};