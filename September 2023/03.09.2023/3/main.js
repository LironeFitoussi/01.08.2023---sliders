console.log("test");
var inputValue;
var secondNumber;
function checkNumber() {
  inputValue = document.getElementsByTagName("input")[0].value;
  console.log(inputValue);
  if (inputValue > 7) {
    document.body.innerHTML += `
        <p>Your input is Higher than 7</p>
        `;
  } else if (inputValue == 7) {
    document.body.innerHTML += `
        <p>Your input is Equal to 7</p>
        `;
  }
}

function compareNumber() {
  inputValue = document.getElementsByTagName("input")[0].value;
  secondNumber = document.getElementsByTagName("input")[1].value;
  console.log(inputValue);
  console.log(secondNumber);
  if (inputValue > secondNumber) {
    document.body.innerHTML += `
            <p>${inputValue} is higher than ${secondNumber}</p>
        `;
  } else if (inputValue < secondNumber) {
    document.body.innerHTML += `
        <p>${secondNumber} is higher than ${inputValue}</p>
    `;
  } else {
    document.body.innerHTML += `
        <p>${secondNumber} and ${inputValue} are Equal!</p>
    `;
  }
}
