var cityObj = {}

function generateCity() {
    cityObj.name = cityNameInput.value;
    cityObj.numOfCitizen = +(cityCitizensInput.value);
    cityObj.cityLogo = cityLogo.value
    console.log(cityObj);
}

function printCity() {
    newCity.innerHTML += 
    `
        <h1>${cityObj.name}</h1>
        <p>${cityObj.numOfCitizen}</p>
        <img src="${cityObj.cityLogo}">
    `
}





