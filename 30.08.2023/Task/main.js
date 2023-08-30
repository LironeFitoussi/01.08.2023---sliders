// T1
// var spanElem = document.getElementById("firstParagraph")
// console.log(spanElem.innerText);

// T2
// var h1Elem = document.getElementById("myH1")
// h1Elem.innerText = "Hello World"

// T3
// console.log("----Task 3----");

// var textElem1 = document.getElementById("txt1");
// console.log(textElem1.innerText);

// var textElem2 = document.getElementById("txt2");
// console.log(textElem2.innerText);

// var textElem3 = document.getElementById("txt3");
// console.log(textElem3.innerText);

// var textElem4 = document.getElementById("txt4");
// console.log(textElem4.innerText);

// T4
// console.log("----Task 4----");

// var anyText = document.getElementsByClassName("anyText")
// for (let i = 0; i < anyText.length; i++) {
//     console.log(anyText[i].innerText);
// } 

// T5
// console.log("----Task 5----");

// console.log(anyText[1]);

// T6
// console.log("----Task 6----");
// console.log(anyText[3].innerText);

// T7
// console.log("----Task 7----");
// var textElems = document.getElementsByTagName("p");
// for (var i = 0; i < textElems.length; i++) {
//     console.log(textElems[i].innerText);    
// }

// T8
// console.log("----Task 8----");
// var nameHeader = document.getElementsByTagName("h2");
// console.log(nameHeader[0].innerText);
// function changeInnerText() {
//     userInput = prompt("Type Your Name");
//     nameHeader[0].innerText = userInput;
// }
// changeInnerText();
// console.log(nameHeader[0].innerText);

// T9 ver.1
// console.log("----Task 9----");
function getUserColor1() {
    userColor = prompt("Pick A Color:");
    userNumber = +prompt("Number Times To Print");

    for (let i = 0; i < userNumber; i++) {
        document.writeln("<span>" + userColor + "</span>")
    }
}

// getUserColor1()


// T9 ver.2
// console.log("----Task 9.2----");

// var mySpan = document.getElementsByTagName("span");
// console.log(mySpan[0]);
function getUserColor2() {
    userColor = prompt("Pick A Color:");
    userNumber = +prompt("Number Times To Print");
    for (let i = 0; i < userNumber; i++) {
        mySpan[0].innerText += " " + userColor
    }
} 

// getUserColor2()

// T10
console.log("----Task 10----");
function userCreateTag() {
    userTag = prompt("Pick a Tag To Create")
    userContent = prompt("Whats inside the Tag?")
    document.writeln("<" + userTag + ">" + userContent + "</" + userTag + ">");
}

// userCreateTag()

// T11
var customInput = document.getElementsByTagName("input")
function customUserInput() {
    var userInputType = prompt("Please Choose Input Type")
    customInput[0].type = userInputType;
}

// customUserInput()

// T22
function createContryList() {
    document.body.innerHTML = "<h1>Country List</h1><ul id=contries></ul>"
    var myList = document.getElementById("contries")
    console.log(myList);
    for (var i = 0; i < 5; i++) {
        var userCountry = prompt("Add Country");
        myList.innerHTML += 
            `<li>${userCountry}</li>`
    }
}

// createContryList()

// T23











