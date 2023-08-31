// Task1
function helloMessage() {
    alert("Welcome!")
}

// Task2
function printHour() {
    var time = new Date();
    var hourFormat = `${time.getHours()}:${time.getMinutes()}` 
    console.log(hourFormat);
}

// Task3
function changeBgColor() {
    document.getElementsByTagName("h3")[0].style = 
    `
    background-color: purple;
    `
    ;
}

// Task4
function changeBtnWidth() {
    document.getElementsByTagName("button")[0].style =
    `
    width: 200px;
    `
}

// Task5
function changeMyBrother() {
    document.getElementsByTagName("p")[1].innerText = "I changed"
}