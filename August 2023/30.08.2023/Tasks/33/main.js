var catsArray = [];

function createCat() {
    for (var i = 0; i < 3; i++) {
        var newCat = {
            catName: prompt("Enter the cat's name:"),
            catBirthYear: +prompt("Enter the cat's birth year:"),
            catType: prompt("Enter the cat's type:"),
            catWeight: +prompt("Enter the cat's weight:")
        }

        catsArray.push(newCat);
    }

    console.log(catsArray);

    for (var i = 0; i < catsArray.length; i++) {
        var cat = catsArray[i];
        catsDiv.innerHTML += `
            <h1>
                Cat Name: ${cat.catName} 
                Birth Year: ${cat.catBirthYear}
                Type: ${cat.catType}
                Weight: ${cat.catWeight}
            </h1>
        `;
    }
}



