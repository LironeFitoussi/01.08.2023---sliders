// Task 1
const FRUITS = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon"
  ];

  FRUITS.sort()
  console.log(FRUITS);

// Task 2
const RANDOM_NUMBERS = [42, 17, 88, 5, 61, 29, 73, 10, 50, 3];

RANDOM_NUMBERS.sort((a, b) => a - b)
console.log(RANDOM_NUMBERS);

// Task 3
RANDOM_NUMBERS.sort((a, b) => b - a)
console.log(RANDOM_NUMBERS);


// Task 4
const NAMES_ARRAY = []
document.querySelector("#mainContainer").innerHTML = `
        <button onclick="createNamesArray()">Load Form</button>
    `
function createNamesArray() {
    document.querySelector("#mainContainer").innerHTML = ``
    for (let i = 0; i < 10; i++) {
        document.querySelector("#mainContainer").innerHTML += `
            <input type="text" placeholder="type name ${i+1}">
        `
    }

    document.querySelector("#mainContainer").innerHTML += `
        <button onclick="printArray()">Print Array</button>
    `
}

function printArray() {
    let nameInput = document.querySelectorAll("input")
    for (let i = 0; i < 10; i++) {
        NAMES_ARRAY.push(nameInput[i].value)
    }
    NAMES_ARRAY.sort()
    console.log(NAMES_ARRAY);
    document.querySelector("#mainContainer").innerHTML = `
        <p>${NAMES_ARRAY}</p>
    `
}

// Task 5
let ageArray = []
document.querySelector("#mainContainer").innerHTML += `
    <button onclick="randomAges()">Random Ages</button>
`

function randomAges() {
    for (let i = 0; i < 10; i++) {
        let randomAge = Math.floor(Math.random()*65)
        console.log(randomAge);
        ageArray.push(randomAge)
    }
    ageArray.sort((a,b) => a - b)
    console.log(ageArray);
    document.querySelector("#mainContainer").innerHTML = `
        <p>${ageArray.join(", ")}</p>
    `
}

// Task 6
function joinArray() {
    console.log(NAMES_ARRAY.join("-"));
}