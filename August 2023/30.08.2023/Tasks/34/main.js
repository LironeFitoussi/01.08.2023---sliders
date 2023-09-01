document.body.innerHTML += `<p>sdfdsfds</p>`

function createDogObjects() {
    var numDogs = +prompt("How Many Dogs To Add?")
    var dogsArray = [];

    for (var i = 0; i < numDogs; i++) {
        var newDog = {
            name: prompt("Enter the dog's name:"),
            age: +prompt("Enter the dog's age:"),
            breed: prompt("Enter the dog's breed:"),
            owner: prompt("Enter the owner's name:")
        };

        dogsArray.push(newDog);
    }

    for (var i = 0; i < dogsArray.length; i++) {
        var dog = dogsArray[i];
        dogsDiv.innerHTML +=  `
            <p>
                Dog Name: ${dog.name}<br>
                Age: ${dog.age}<br>
                Breed: ${dog.breed}<br>
                Owner: ${dog.owner}
            </p>
        `;
    }
}
