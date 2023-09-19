// const randomArray1 = [42, 15, 73, 28, 91, 56, 37, 64, 19, 5];
// filteredArray = randomArray1.filter((num) => num % 3 === 0);
// console.log(filteredArray);


// const randomArray2 = [42, 15, 73, 28, 91, 56, 37, 64, 19, 5];
// const newArr = new Array()
// function filterMyArray(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 3 === 0 ) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(filterMyArray(randomArray2));

const peopleArr = [
    {
        firstName: "Lirone",
        lastName: "Fitoussi",
        age: 23
    },
    {
        firstName: "Nir",
        lastName: "Gluskin",
        age: 25
    },
    {
        firstName: "Uriel",
        lastName: "Bengaev",
        age: 24
    }
]

peopleArr.forEach((name) => {
    name.fullName = `${name.firstName} ${name.lastName}`
})

console.log({peopleArr});

