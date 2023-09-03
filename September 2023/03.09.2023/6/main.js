console.log("Test6");

function isEvenNumber() {
    var userInput = userNumber.value;
    if (userInput%2 == 0 && userInput > 0) {
        document.body.innerHTML += `
            <p>This Number is Even Number</p>
        `
    }
}