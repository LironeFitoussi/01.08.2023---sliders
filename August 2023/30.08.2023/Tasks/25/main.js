var myManager = {};
    myManager.firstName = "John";
    myManager.lastName = "Morales";
    myManager.age = 37;
    myManager.salary = 23000 + "$"; 

for (var i = 0; i < myManager.length; i++) {
    document.body.innerHTML +=
        `
            <p>${myManager[i]}</p>
        `
}
    
