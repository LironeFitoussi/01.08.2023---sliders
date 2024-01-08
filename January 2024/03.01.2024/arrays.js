const numbersArr = [3, 6, 13, 43, 54, 4, 2];

// Normal Loop
let sumArray = 0;
for (let i = 0; i < numbersArr.length; i++) {
  sumArray += numbersArr[i];
}
console.log(sumArray);

// forEach
let emptyNumber = 0;
numbersArr.forEach((num) => (emptyNumber += num));

console.log(emptyNumber);

// Reduce
let newSum = numbersArr.reduce((a, b) => a + b);
console.log(newSum);

// Lowest value of Array
let minNum = numbersArr[0];
numbersArr.forEach((num) => {
  minNum >= num ? (minNum = num) : null; //ternary operator
});
console.log({ minNum });

// Lowest value of Array
let maxNum = numbersArr[0];
numbersArr.forEach((num) => {
  maxNum <= num ? (maxNum = num) : null; //ternary operator
});
console.log({ maxNum });

let res = array.reduce((total, item) => {
  return total + item;
}, 0);
let totalMulti = array.reduce((total, item) => {
  return total * item;
}, 1);
console.log({ sum1 });
console.log({ sum2 });
console.log({ res });
console.log({ totalMulti });
