console.log("test");

function loadSite() {
    var userName = logName.value
    var userAge = new Date(userLogAge)
    mainContainer.innerHTML = `
    <h1 class="site-header display-1">Welcome back ${userName}</h1>
    <div id="userInput">
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Please insert a Task:</span>
            <input id="userTaskInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3">
            <label class="input-group-text" id="inputGroup-sizing-sm">Insert DeadLine:</label>
            <input id="userDateInput" type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Importance:</label>
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="Hight">Hight</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
        </div>

        <div class="buttons">
            <button class="button-53" onclick="addTask()">Save this Task</button>
            <button class="button-35" onclick="printUserTasks()" >Print Tasks</button>
        </div>
    </div>
    `
}
var userTasks = [];

function addTask() {
  var validInput = true;
  if (inputGroupSelect01.value == "") {
    validInput = false;
  }
  if (validInput == true) {
    console.log("Test");
    var userTask = userTaskInput.value;
    var userDate = userDateInput.value;
    var userImportance = inputGroupSelect01.value;

    userTasks.push({
      task: userTask,
      date: userDate,
      importance: userImportance,
    });

    userTaskInput.value = ``;
    userDateInput.value = ``;
    inputGroupSelect01.value = ``;
  }
}

var tableExist = false;

function printUserTasks() {
  if (!tableExist) {
    mainContainer.innerHTML += `
            <table class="table">
                <thead class="thead-dark">
                    <th scope="col">Task</th>
                    <th scope="col">Day</th>
                    <th scope="col">Importance</th>
                </thead>
                <tbody id="userTasksOutput">
                </tbody>
            </table>
        `;

    tableExist = true;
  } else {
    userTasksOutput.innerHTML = ``;
  }

  for (let i = 0; i < userTasks.length; i++) {
    console.log("Test");
    userTasksOutput.innerHTML += `
            <tr>
                <td scope="row">${userTasks[i].task}</td>
                <td scope="row">${userTasks[i].date}</td>
                <td scope="row">${userTasks[i].importance}</td>
            </tr>
        `;
  }
}
