// Task 6
// var userName = prompt("Type Your Name: ")
// function displayName() {
//     document.body.innerHTML += 
//     `
//     <p>${userName}</p>
//     `
// }

// Task 6 Challenge
// function displayName2() {
//     var inputElements = document.getElementsByTagName("input");
//     var inputValues = inputElements[0].value;

//     document.body.innerHTML +=
//         `
//             <p>${inputValues}</p>
//         `
// }

// Task 7 
// var myDate = new Date();
// console.log(myDate.getHours());
// if (myDate.getHours() < 12 ) {
//     document.body.innerHTML += "<p> Have a Nice Day</p>"
//     document.body.style = "background-color: Yellow;"
// } else {
//     document.body.innerHTML += "<p>Good Evening</p>"
//     document.body.style = "background-color: blue;"
// }


// Task 8
// var userAge = +prompt("Type Your Age:")
// if (userAge > 18) {
//     document.body.style = "background-color: red"
//     document.body.innerHTML = "<h1 onmouseover=changeToYellow()>Welcome</h1>"
// } else {
//     document.body.style = "background-color: blue"
//     document.body.innerHTML = "<h1 onmouseover=changeToYellow()>ש״צ</h1>"
// }

// function changeToYellow() {
//     document.body.style = "background-color: green;"
// }

// Task 9
// var guessArr = []
// function addToGuess() {
//     var inputValue = parseInt(document.getElementsByTagName("input")[0].value)
//     guessArr.push(inputValue)
//     guessDiv.innerHTML += `<p>${inputValue}</p>`
//     if (guessArr.length == 4) {
//         myBtn.innerText = "guess"
//     }
//     if (guessArr.length == 5) {
//         myBtn.onclick = checkNumber()
//         myBtn.onclick = ""
//     } 
//     console.log(guessArr);
// }


//     var randomNum = Math.floor(Math.random()*56+1)
//     console.log(randomNum);

// function checkNumber() {
//     for (let i = 0; i < guessArr.length; i++) {
//         var isWiner = false;
//         if (guessArr[i] == randomNum) {
//             isWiner = true 
//             break
//         } 
//     }
    
//     if (isWiner == true) {
//         document.body.innerHTML += "<h1>You Win</h1>"
//     }
//     else {
//         document.body.innerHTML += "<h1>You Lose</h1>"
//     }
// }

// Task 10
// var guessArr = []
// var isWiner = false;

// function addToGuess() {
//     var inputValue = parseInt(document.getElementsByTagName("input")[0].value)
//     guessArr.push(inputValue)
//     guessDiv.innerHTML += `<p>${inputValue}</p>`
//     if (guessArr.length == 4) {
//         myBtn.innerText = "Guess"
//     }
//     if (guessArr.length == 5) {
//         myBtn.onclick = checkNumber()
//         myBtn.onclick = null;
//     } 
//     console.log(guessArr);
// }


// var randomNumArr = []
// for (let i = 0; i < 5; i++) {
//     var randomNum = Math.floor(Math.random()*56+1)
//     randomNumArr.push(randomNum)
// }
// console.log(randomNumArr);

// function checkNumber() {
//     for (let i = 0; i < guessArr.length; i++) {
//         console.log(guessArr[i]);
//         for (let j = 0; j < randomNumArr.length; j++) {
//             if (guessArr[i] == randomNumArr[j]) {
//                 isWiner = true 
//                 break
//             }
//             console.log(randomNumArr[j]);
//         }
//         if (isWiner == true) {
//             break
//         }
//     }
    
//     if (isWiner) {
//         document.body.innerHTML += "<h1>You Win</h1>"
//     }
//     else {
//         document.body.innerHTML += "<h1>You Lose</h1>"
//     }
// }








