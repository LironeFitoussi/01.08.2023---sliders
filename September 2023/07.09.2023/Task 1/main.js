function loadSite() {
  var season;
  var userName = document.getElementById("logName").value;
  var userBirthday = new Date(document.getElementById("userLogAge").value);
  var currentTime = new Date();

  // Age calculator
  var userAge = currentTime.getFullYear() - userBirthday.getFullYear();
  console.log(userAge);

  // Set Background by Age
  if (userAge < 18) {
    document.body.classList.add("youngUser")
  } else if (userAge > 18 && userAge < 30) {
    document.body.classList.add("adultUser")
  } else (
    document.body.classList.add("oldUser")
  )

//   Build Form
  mainContainer.innerHTML = `
    <h1 class="site-header display-1">Welcome back ${userName} <span><img src"${season}"></span></h1>
    <div id="userInput">
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Please insert the Task Name:</span>
            <input id="userTaskInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        </div>
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">Task Description</span>
            <input id="userTaskDescInput" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
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

        <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">Status:</label>
            <select class="form-select" id="inputGroupSelect02">
              <option selected>Choose...</option>
              <option value="Pending">Pending</option>
              <option value="On Progress">On Progress</option>
              <option value="Completed">Completed</option>
            </select>
        </div>

        <div class="buttons">
            <button class="button-53" onclick="addTask()">Save this Task</button>
            <button class="button-35" onclick="printUserTasks()" >Print Tasks</button>
        </div>
    </div>
    `;
}

var userTasks = [];

function addTask() {
  var invalidTaskName = userTaskInput.value == ``;
  var invalidTaskDesc = userTaskDescInput.value == ``;
  var invalidTaskName = userTaskInput.value == ``;
  var invalidTaskName = userTaskInput.value == ``;
  var invalidTaskName = userTaskInput.value == ``;

  if (invalidTaskName || invalidTaskDesc) {
    console.log("Test");
    return;
  }
  var userDate = document.getElementById("userDateInput").value;
  var userImportance = document.getElementById("inputGroupSelect01").value;

  userTasks.push({
    task: userTaskInput.value,
    taskDesk: document.getElementById("userTaskDescInput").value,
    date: userDate,
    importance: userImportance,
    status: document.getElementById("inputGroupSelect02").value,
  });

  userTaskInput.value = "";
  userTaskDescInput.value = "";
  userDateInput.value = "";
  inputGroupSelect01.value = "";
  inputGroupSelect02.value = "";
}

var tableExist = false;

function printUserTasks() {
    if (!tableExist) {
      mainContainer.innerHTML += `
              <table class="table">
                  <thead class="thead-dark">
                      <th scope="col">Task</th>
                      <th scope="col">Description</th>
                      <th scope="col">Day</th>
                      <th scope="col">Importance</th>
                      <th scope="col">Status</th>
                  </thead>
                  <tbody id="userTasksOutput">
                  </tbody>
              </table>
          `;
  
      tableExist = true;
    } else {
      userTasksOutput.innerHTML = "";
    }
  
    for (let i = 0; i < userTasks.length; i++) {
      userTasksOutput.innerHTML += `
              <tr id="row${i}">
                  <td scope="row">${userTasks[i].task}</td>
                  <td scope="row">${userTasks[i].taskDesk}</td>
                  <td scope="row">${userTasks[i].date}</td>
                  <td scope="row"><span class="${userTasks[i].importance}">${userTasks[i].importance}</span></td>
                  <td scope="row">${userTasks[i].status}</td>
              </tr>
          `;
  
      var row = document.getElementById(`row${i}`);
      row.addEventListener("click", function () {
        var confirmDelete = confirm("Are Your Sure You Want to Delete this Row?");
        if (confirmDelete) {
            userTasks.splice(i, 1);
            printUserTasks();
        }
      });
    }
  }