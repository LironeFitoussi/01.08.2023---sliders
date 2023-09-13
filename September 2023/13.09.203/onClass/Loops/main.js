let namesArray = ["Lirone", "Nir", "Uriel", "Alaluf", "Ben"];

// Task 1
namesArray.forEach((friendsName) => {
    console.log(friendsName);
});

// Task 2
let ageArray = [23,55,2,54,16,8,33,34,87,12]
ageArray.forEach((ages) =>{
    if (ages >= 18) {
        console.log(ages);
    }
});

// Task 3
let familyNames = ["Gluskin", "Alaluf", "Fitoussi", "Bengaev", "Livne", "Arbaiv", "Inngidou", "Hazan"];
let newFamilyNames = []

familyNames.forEach((families) => {
    newFamilyNames.push(families)
});
console.log(newFamilyNames);

// Taks 4
for (const name of namesArray) {
    console.log(name);
}

// Task 5
for (const age of ageArray) {
    if (age > 25) {
        console.log(age);
    }
}

// Task 6 
let emptyFamily = []
for (const fName of familyNames) {
    emptyFamily.push(fName.toUpperCase())
}

console.log(emptyFamily);