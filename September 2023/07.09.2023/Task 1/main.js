var currentTime = new Date();
var nameError = false;
var ageError = false;

function loadSite() {
  
  // document.getElementsByClassName("error-msg")[1].innerHTML = ``

  if (userLogAge.value == `` || logName.value == ``) {
    if (logName.value == `` && nameError == false) {
      nameError = true;
      nameInputContainer.innerHTML += `
        <span class="error-msg">*You must type Your name</span>
      ` 
    } else if (logName.value.length > 0 && nameError == true) {
      nameError = false;
      document.getElementsByClassName("error-msg")[0].innerHTML = ``
    }
    
    if (userLogAge.value == `` && ageError == false) {
      ageError = true;
      ageInputContainer.innerHTML += `
        <span class="error-msg">*You must type Your Age</span>
      ` 
    } else if (userLogAge.value != `` && ageError == true) {
      ageError = false;
      document.getElementsByClassName("error-msg")[1].innerHTML = ``
    }
    return
  }

  nameError = false;
  ageError = false;

  var userName = document.getElementById("logName").value;
  var userBirthday = new Date(document.getElementById("userLogAge").value);

  // Age calculator
  var userAge = currentTime.getFullYear() - userBirthday.getFullYear();
  // Set Background by Age
  if (userAge < 18) {
    document.body.classList.add("youngUser");
  } else if (userAge > 18 && userAge < 30) {
    document.body.classList.add("adultUser");
  } else {
    document.body.classList.add("oldUser");
  }

  // Find Day Time
  var dayTime;
  if (currentTime.getHours() < 12 && currentTime.getHours() > 5) {
    dayTime = "Morning";
  } else if (currentTime.getHours() >= 12 && currentTime.getHours() < 19) {
    dayTime = "Afternoon";
  } else if (currentTime.getHours() >= 19 && currentTime.getHours() > 19) {
    dayTime = "Evening";
  } else {
    dayTime = "Night";
  }

  // Set Season Style
  var currentMonth = currentTime.getMonth();
  var seasonOfTheYear;

  if (currentMonth >= 0 && currentMonth <= 1) {
    seasonOfTheYear = "winterDisplay";
  } else if (currentMonth >= 2 && currentMonth <= 4) {
    seasonOfTheYear = "springDisplay";
  } else if (currentMonth >= 5 && currentMonth <= 7) {
    seasonOfTheYear = "summerDisplay";
  } else if (currentMonth >= 8 && currentMonth <= 10) {
    seasonOfTheYear = "autumnDisplay";
  } else {
    // December
    seasonOfTheYear = "winterDisplay";
  }

  // Build Form
  mainContainer.innerHTML = `
      <h1 class="site-header display-1">Good ${dayTime}, ${userName}!</h1>
      <div id="yearSeason" class="${seasonOfTheYear}"></div>
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
              <label class="input-group-text" id="inputGroup-sizing-sm">Insert Deadline:</label>
              <input id="userDateInput" type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
          </div>
          <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">Priority:</label>
              <select class="form-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
          </div>
  
          <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">Status:</label>
              <select class="form-select" id="inputGroupSelect02">
                <option selected>Choose...</option>
                <option value="Pending">Pending</option>
                <option value="Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
          </div>
  
          <div class="buttons">
              <button class="button-53" onclick="addTask()">Save this Task</button>
              <button class="button-35" onclick="printUserTasks()">Print Tasks</button>
          </div>
      </div>
      `;
}

var userTasks = [];

function addTask() {
  var invalidTaskName = userTaskInput.value == ``;
  var invalidTaskDesc = userTaskDescInput.value == ``;

  if (invalidTaskName || invalidTaskDesc) {
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
  if (userTasks.length == 0) {
    document.getElementsByTagName("table")[0].remove();
    tableExist = false;
    return;
  }

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
    tableExist = false;
  }

  for (let i = 0; i < userTasks.length; i++) {
    var userDeadLine = new Date(userTasks[i].date);
    userTasksOutput.innerHTML += `
      <tr id="row${i}" class="user-task">
        <td scope="row" class="TaskName">${userTasks[i].task}</td>
        <td scope="row">${userTasks[i].taskDesk}</td>
        <td scope="row"><span class="${
          currentTime.getTime() > userDeadLine.getTime()
          ? "passedDate"
          : ``
          }">${userTasks[i].date}</span></td>
        <td scope="row">
          <span class="${userTasks[i].importance}">
            ${userTasks[i].importance}
          </span>
        </td>
        <td scope="row">
          <span class="${userTasks[i].status}">
            ${userTasks[i].status}
          </span>
        </td>
      </tr>
    `;
  }

  for (let j = 0; j < userTasks.length; j++) {
    document.getElementById(`row${j}`).addEventListener("click", function () {
      var confirmDelete = confirm("Are You sure you want to Delete this task?");
      if (confirmDelete) {
        userTasks.splice(j, 1);
        printUserTasks();
      }
    });
  }
}
