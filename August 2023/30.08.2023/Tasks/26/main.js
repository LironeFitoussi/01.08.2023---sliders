// T26
var employee = {
    fullName: "JOJO",
    birthYear: 1990,
    email: "example@example.com",
    address: "HaBonim 47, Holon"
};

var body = document.body;
body.innerHTML += "<p>Full Name: " + employee.fullName + "</p>";
body.innerHTML += "<p>Birth Year: " + employee.birthYear + "</p>";
body.innerHTML += "<p>Email: " + employee.email + "</p>";
body.innerHTML += "<p>Address: " + employee.address + "</p>";

// T27
var fruit = {
    name: "Apple",
    color: "Red",
    type: "Hard Fruit"
};

var body = document.body;
body.innerHTML += "<p>Fruit Name: " + fruit.name + "</p>";
body.innerHTML += "<p>Fruit Color: " + fruit.color + "</p>";
body.innerHTML += "<p>Fruit Type: " + fruit.type + "</p>";

// T28
var classroom = {
    classNumber: 1,
    numberOfStudents: 20,
    studentNames: ["Alice", "Bob", "Charlie", "David", "Eve"]
};

var body = document.body;
var studentList = "<ul>";
for (var i = 0; i < classroom.studentNames.length; i++) {
    studentList +=
    `
        <li>${classroom.studentNames[i]}</li>
    `;
}
studentList += "</ul>";
body.innerHTML += "<p>Student Names:</p>" + studentList;

// T29
var kindergarten = {
    teacherName: "Rachel",
    numberOfChildren: 25,
    childrenNames: ["Elisha", "Noah", "Abigail", "Joseph", "Lion", "Shira", "Or", "Michael", "Rebecca", "Ethan"]
};

var userInputKey = prompt("Please enter a key:");
console.log("The value of the key is:", userInputKey);

var body = document.body;
body.innerHTML += "<p>The value of the key is: " + userInputKey + "</p>";

var childrenList = "<ul>";
for (var i = 0; i < kindergarten.childrenNames.length; i++) {
    childrenList += "<li>" + kindergarten.childrenNames[i] + "</li>";
}
childrenList += "</ul>";
body.innerHTML += childrenList;

