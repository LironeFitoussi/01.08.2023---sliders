const grade = 89;
switch (grade) {
  case 100:
    console.log("A");
    break;
  case 90:
    console.log("B");
    break;
  case 80:
    console.log("C");
    break;
  case 70:
    console.log("D");
    break;
  case 60:
    console.log("E");
    break;
  default:
    console.log("F");
    break;
}

let method = "add";

switch (method) {
  case "plus":
    console.log("add method");
    break;
  case "minus":
    console.log("subtract method");
    break;
  case "divide":
    console.log("divide method");
    break;
  case "multiply":
    console.log("multiply method");
    break;

  default:
    console.log("default method");
    break;
}

const mathOperation = (num1, num2, operator) => {
  switch (operator) {
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "-":
      return num1 - num2;
    default:
      return num1 + num2;
  }
};

const calculator = mathOperation(10, 20, "/");
console.log(calculator);
