const baseUrl = "https://restcountries.com/v3.1/all";
// then
// then
// catch

// todo: explain async
// todo: explain promises
// todo: use fetch to fetch countries
// todo: handle error

console.log("this is the q print");

// while (true) {
// console.log(true);
// }

setTimeout(() => {
    console.log('this is the 2 print');
}, 1000);

setTimeout(() => {
    console.log('this is the 3 print');
}, 1000);

console.log("this is the 4 print");

//1, 4, 3, 2
//1, 4, 3, 2

fetch(baseUrl)
  .then((res) => {
    // console.log(res.json());
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("print after fetch");
