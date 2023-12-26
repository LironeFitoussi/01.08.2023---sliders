console.log("Test");
let firstNumber = "";

const saveFirstNumber = () => {
  firstNumber = document.getElementById("firstNumber").value;
  console.log(firstNumber);
};

const compareNumbers = () => {
  saveFirstNumber()
  const secondNumber = document.getElementById("secondNumber").value;
  console.log(firstNumber);
  console.log(secondNumber);

  if (firstNumber > secondNumber) {
    document.body.innerHTML += `
      <p>${firstNumber} is higher than ${secondNumber}</p>
    `;
  } else if (firstNumber < secondNumber) {
    document.body.innerHTML += `
      <p>${firstNumber} is lower than ${secondNumber}</p>
    `;
  } else {
    document.body.innerHTML += `
    <p>${secondNumber} is equal to ${firstNumber}</p>
  `;
  }

};
