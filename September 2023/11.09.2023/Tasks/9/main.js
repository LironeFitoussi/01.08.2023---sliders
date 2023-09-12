const peopleArray = [
    {age: 25, firstName: "Aaron", lastName: "Levi"},
    {age: 17, firstName: "Sarah", lastName: "Cohen"},
    {age: 21, firstName: "David", lastName: "Golan"},
    {age: 16, firstName: "Rachel", lastName: "Friedman"}
];

printButton.addEventListener("click", function() {
    printNamesBasedOnAge(peopleArray);
});

function printNamesBasedOnAge(people) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].age > 18) {
            document.querySelector("#printNames").innerHTML += 
            `<p>${people[i].firstName}</p>`
        } else {
            document.querySelector("#printNames").innerHTML += 
            `<p>${people[i].lastName}</p>`
        }
    }
}
