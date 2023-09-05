document.body.innerHTML += `
    <button id="randNamesBtn">Generate Random Names</button>
    <button id="clearBtn">Clear</button>
    <div id="mainDiv"></div>
`


var printNamesInterval;

randNamesBtn.addEventListener("click", printNames)
clearBtn.addEventListener("click", clearNamesList)


function printNames() {
    printNamesInterval = setInterval(printRandomName, 4000)
}

function clearNamesList() {
    clearInterval(printNamesInterval)
    mainDiv.innerHTML = ``
}

var myClassArray = [];
function printRandomName() {
    var randomNum =  Math.floor((Math.random()*23))
    console.log(randomNum);
    myClassArray = [
        "Ohad",
        "Dan",
        "Uriel",
        "Ben",
        "Nir",
        "Hila",
        "Sagi",
        "Maya",
        "Matan",
        "Omer",
        "Yitzhak",
        "Ramin",
        "David",
        "Sunny",
        "Ori",
        "Ofek",
        "Noa",
        "Yuval",
        "Eran",
        "Nitzan",
        "Shahaf",
        "Ron",
        "Jonathan"
    ];

    mainDiv.innerHTML += `
        <p>${myClassArray[randomNum]}</p>
    `
}

