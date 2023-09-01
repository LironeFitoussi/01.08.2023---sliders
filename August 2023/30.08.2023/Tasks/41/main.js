function getCountry() {
    var countriesArr = [];
    var count = prompt("How Many Country do you Want to Add?")
    for (let i = 0; i < count; i++) {
        countriesArr.push({
                name: prompt("Choose Country Name:"),
                numOfCitizen: prompt("Set Nunmber of Citizens"),
                habadHouseCities: []
            }
        )
        
        numOfHabadHouses = +prompt(`How Many Habbad Houses are in ${countriesArr[i].name}`)
        for (let j = 0; j < numOfHabadHouses; j++) {
            countriesArr[i].habadHouseCities.push(
                prompt(`Add Habbad House ${j+1} City`)
            )
        }

    }
    console.log(countriesArr);
    for (let i = 0; i < countriesArr.length; i++) {
        var country = countriesArr[i]
        if (country.habadHouseCities.length != 0) {
            countryDiv.innerHTML +=`
                <h1>${country.name}</h1>
                <p>Cities With Habad:</p>
                <ul id="ul_${i}"></ul>
            `;
            var ulElement = document.getElementById(`ul_${i}`);

            for (let j = 0; j < country.habadHouseCities.length; j++) {
              ulElement.innerHTML += `
                          <li>${country.habadHouseCities[j]}</li>
                      `;
            }    
        }
    }
}