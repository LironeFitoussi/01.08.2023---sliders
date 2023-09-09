var firstNumber;
var operator;
var secondNumber = null; 
var result;


for (let i = 0; i < 11; i++) {
    var calcNumberElement = document.getElementsByClassName("calcNumber")[i];
    var displayNumber = document.getElementById("displayNumber");

    calcNumberElement.addEventListener("click", function () {
        calcNumberElement = document.getElementsByClassName("calcNumber")[i]
        if (operator == undefined) {
            displayNumber.innerHTML = calcNumberElement.querySelector("span").innerText;
            firstNumber = parseFloat(calcNumberElement.querySelector("span").innerText);
        } else {
            displayNumber.innerHTML = calcNumberElement.querySelector("span").innerText;
            secondNumber = parseInt(calcNumberElement.querySelector("span").innerText);
        }
    });
}

for (let j = 0; j < 4; j++) {
    var calcOperatorElement = document.getElementsByClassName("calcOperator")[j];
    calcOperatorElement.addEventListener("click", function () {
        calcOperatorElement = document.getElementsByClassName("calcOperator")[j]
        operator = calcOperatorElement.querySelector("span").innerText;
        if (operator == "X") {
            operator = "*";
        }
        console.log(operator);
    });
}

equal.addEventListener("click", function() {
    if (operator === null || secondNumber === null) {
        console.log("Invalid input");
        return;
    }
    
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default:
            console.log("Invalid operator");
            break;
    }
    
    // Display the result
    displayNumber.innerText = result;
    operator = undefined;
});
