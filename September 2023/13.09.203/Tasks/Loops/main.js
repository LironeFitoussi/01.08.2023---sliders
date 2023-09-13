// let namesArray = ["Lirone", "Nir", "Uriel", "Alaluf", "Ben"];

// // Task 1
// namesArray.forEach((friendsName) => {
//     console.log(friendsName);
// });

// // Task 2
// let ageArray = [23,55,2,54,16,8,33,34,87,12]
// ageArray.forEach((ages) =>{
//     if (ages >= 18) {
//         console.log(ages);
//     }
// });

// // Task 3
// let familyNames = ["Gluskin", "Alaluf", "Fitoussi", "Bengaev", "Livne", "Arbaiv", "Inngidou", "Hazan"];
// let newFamilyNames = []

// familyNames.forEach((families) => {
//     newFamilyNames.push(families)
// });
// console.log(newFamilyNames);

// // Taks 4
// for (const name of namesArray) {
//     console.log(name);
// }

// // Task 5
// for (const age of ageArray) {
//     if (age > 25) {
//         console.log(age);
//     }
// }

// // Task 6 
// let emptyFamily = [];
// for (const fName of familyNames) {
//     emptyFamily.push(fName.toUpperCase())
// }

// console.log(emptyFamily);

// // Task 7
// document.querySelector("#CaseBtn").addEventListener("click", () => {
//     let contryName = document.getElementsByTagName("li")
//         for (const country of contryName) {
//             if (country.innerHTML != country.innerHTML.toUpperCase()){
//                 country.innerHTML = country.innerHTML.toUpperCase()
//             } else {
//                 country.innerHTML = country.innerHTML.substring(0,1) + country.innerHTML.substring(1,country.innerHTML.length).toLowerCase()
//             }
//         }  
//     });

// // Task 8
// let myHouse = {
//     street: "HaOrzim 14",
//     city: "Netanya",
//     numOfRooms: 5,
//     hasResidants: true
// }

// console.log(myHouse);

// for (const houseKey in myHouse) {
//     console.log(houseKey);
// }

// for (const houseValue in myHouse) {
//     document.querySelector("#myDiv").innerHTML += `
//         <p>${myHouse[houseValue]}</p>
//     `
// }

// Task 9
const doggies = [
    {name: "tofi", age: 6, breed: "pagapu"},
    {name: "nala", age: 2.5 ,breed: "malinua"},
    {name: "yanis", age: 2 ,breed: "labrador"}
] 

// 1
function printEach() {
    for (const dog of doggies) {
        console.log(dog);
    }
}

// 2
function getSecondDog() {
    for (const dog of doggies) {
        if (doggies.indexOf(dog) == 1) {
            console.log(dog);
        }
    }
}

// 3
function getAllDogs() {
    for (const dog of doggies) {
        document.querySelector("#myDiv").innerHTML += `
            <div id="dog_div_${doggies.indexOf(dog)}"></div> 
        `
        for (const key in dog) {
            document.getElementById(`dog_div_${doggies.indexOf(dog)}`).innerHTML += `
                <h1>${dog[key]}</h1>
            `
        }
    }
}

// Task 10
const studentsArray = [
    {
        "name": "Lirone Fitoussi",
        "birthday": "26/10/1999",
        "mail": "lironefit@gmail.com",
        "passedTest": true
    },
    {
        "name": "Sarah Johnson",
        "birthday": "15/07/1990",
        "mail": "sarah.j@example.com",
        "passedTest": false
    },
    {
        "name": "John Smith",
        "birthday": "03/12/1985",
        "mail": "john.smith@example.com",
        "passedTest": true
    },
    {
        "name": "Emily Brown",
        "birthday": "21/04/2001",
        "mail": "emily.b@example.com",
        "passedTest": true
    }
];

// 1
function printEachStudent() {
    for (const studentDiv of studentsArray) {
        console.log(studentDiv);
    }
}

// 2
function getThirdStudent() {
    for (const part of studentsArray) {
        if (studentsArray.indexOf(part) == 2) {
            console.log(part);
        }
    }
}

// 3
function getAllStudents() {
    for (const student of studentsArray) {
        document.querySelector("#myDiv").innerHTML += `
            <div id="student_div_${studentsArray.indexOf(student)}"></div> 
        `
        for (const key in student) {
            document.querySelector(`#student_div_${studentsArray.indexOf(student)}`).innerHTML += `
                <p>${student[key]}</p>
            `
        }
    }
}