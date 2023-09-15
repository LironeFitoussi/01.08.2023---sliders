console.log("test");

function Person(name, age){
    this.name = name,
    this.age = age
} 

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1, person2);
