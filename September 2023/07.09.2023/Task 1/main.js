console.log("test");

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
