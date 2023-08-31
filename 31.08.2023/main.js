var bugsArray = [
  { bugName: "fly", type: "flee", wings: true },
  { bugName: "queen", type: "butlerfly", wings: false },
  { bugName: "bumbblbee", type: "flee", wings: false },
  { bugName: "roach", type: "makak", wings: true },
];

for (let i = 0; i < bugsArray.length; i++) {
  document.getElementById("myTbody").innerHTML += `
          <tr>
            <td>${bugsArray[i].bugName}</td>
            <td>${bugsArray[i].type}</td>
            <td>${bugsArray[i].wings}</td>
          </tr>  
        `;
}

// var tBodyElem = document.getElementById("myTbody");

var trElms = document.getElementsByTagName("tr");
for (var i = 1; i < trElms.length; i++) {
  if (trElms[i].lastElementChild.innerText == "true") {
    trElms[i].style = `
        background-color: grey;  
      `;
  }
}
