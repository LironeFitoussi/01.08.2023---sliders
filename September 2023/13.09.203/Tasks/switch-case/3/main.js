console.log("Test");
document.querySelector("#calculate").addEventListener("click", () => {
    let operator = document.querySelector("#operator").value;
    let firstNumber = document.querySelector("#firstNumber").value;
    let secondNumber = document.querySelector("#secondNumber").value;

    switch (operator) {
        case "+":
            console.log(parseInt(firstNumber) + parseInt(secondNumber));
            break;
        case "-":
            console.log(parseInt(firstNumber) - parseInt(secondNumber));
            break;
        case "x":
            console.log(parseInt(firstNumber) * parseInt(secondNumber));
            break;
        case "/":
            console.log(parseInt(firstNumber) / parseInt(secondNumber));
            break;
        default:
            break;
    }
});