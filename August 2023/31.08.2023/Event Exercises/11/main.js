var userName = prompt("What's Your Name?");
var birthDay = new Date(prompt("When's Your Birthday?"));
var today = new Date();

function reloadPage() {
  location.reload();
}

function changeColorToGreen() {
  document.getElementsByTagName("h1")[0].style = "color: green;";
}

var name1;
var name2;
var name3;
var name4;
var lastName;

function askNames() {
  alert("Well, You are 18 so WE have few more questions");
  lastName = prompt("Your Last Name:");
  name1 = prompt("Name 1");
  name2 = prompt("Name 2");
  name3 = prompt("Name 3");
  name4 = prompt("Name 4");
  document.body.innerHTML += `
        <button onclick="buildFamily()">Show New Family</button>
    `;
}

function buildFamily() {
  const names = [name1, name2, name3, name4];

  document.body.innerHTML += `
        <ol>
            <li>${names[0]} ${lastName}</li>
            <li>${names[1]} ${lastName}</li>
            <li>${names[2]} ${lastName}</li>
            <li>${names[3]} ${lastName}</li>
        </ol>
    `;

  for (let i = 0; i < 4; i++) {
    if (names[i][0].toLocaleLowerCase() == lastName[0].toLocaleLowerCase()) {
      document.getElementsByTagName("li")[i].style.color = "green";
    }
  }
  return names
}

if (today.getFullYear() - birthDay.getFullYear() >= 18) {
  document.body.innerHTML += `
        <h1 onmouseover="changeColorToGreen()" >Welcome</h1>
        <p>${userName}</p>
    `;
  document.body.style = "background-color: blue;";
} else {
  document.body.innerHTML += `
        <h1 style="color: red;">You are not allowed to enter this site...</h1>
        <img src="https://media.tenor.com/tdAtB_LNDgUAAAAM/it-is-forbidden-lady-sif.gif">
    `;
  setTimeout(reloadPage, 2000);
}

setTimeout(askNames, 3000);
