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