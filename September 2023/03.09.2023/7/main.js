console.log("Test7");
var numbersArr = [];
var inputColection = document.getElementsByTagName("input")
var sumNumber = 0;
function calcAvg() {
    for (let i = 0; i < inputColection.length; i++) {
        numbersArr.push(
            +inputColection[i].value
        )
    }
    console.log(numbersArr);


    for (let i = 0; i < numbersArr.length; i++) {
        sumNumber += numbersArr[i]
    }
    console.log(sumNumber);
    if (sumNumber > 0 ) {
        document.body.innerHTML += `
        <p>Avarage Number is: ${sumNumber / numbersArr.length}
    `
    }
    numbersArr = []
}

function calcSum() {
    if (sumNumber > 0 ) {
        document.body.innerHTML += `
        <p>Avarage Number is: ${sumNumber}
    `
    sumNumber = 0
    }
}