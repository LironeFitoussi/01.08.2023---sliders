function openSearch() {
  document.body.innerHTML += `
    <input type="text" id="searchInput" placeholder="Enter a name to search..." oninput="showNames()" style="margin: 10px;">
    <div id="results"></div>
  `
  document.getElementsByTagName("button")[0].setAttribute("onclick", "")
}

function logMsg() {
  console.log("Mouse Over the Button");
}

function displayByLength() {
  names.sort((a, b) => a.length - b.length)
  for (let i = 0; i < names.length; i++) {
    document.body.innerHTML += `
      <p style="font-size: 16px;">${names[i]} ${names[i].length} </p>
    `
  }
}

function displayByABC() {
  names.sort()
  for (let i = 0; i < names.length; i++) {
    document.body.innerHTML += `
      <p style="font-weight: bold;">${names[i]}</p>
    `
  }
}

var names = [
  "Sophia Johnson",
  "Liam Martinez",
  "Olivia Smith",
  "Noah Williams",
  "Ava Anderson",
  "Ethan Davis",
  "Isabella Taylor",
  "Aiden Jackson",
  "Mia Brown",
  "Elijah Miller"
];

function showNames() {
  var findInput = searchInput.value;
  for (let i = 0; i < names.length; i++) {
    if (currentValue != findInput) {
      results.innerHTML = ``;
      currentValue = findInput;
    } else if (names[i].indexOf(findInput) > -1 && findInput.length > 0) {
      results.innerHTML += `
        <p style="color: blue;">${names[i]}</p>
      `
    }
  }
  var currentValue = findInput;
}
