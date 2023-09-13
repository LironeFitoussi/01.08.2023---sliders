const cities = [
    {
        name: "New York",
        population: 8406000,
        emblem: "https://www.nyc.gov/assets/dcas/images/content/pages/CitySealColor.jpg",
        lockdown: false
    },
    {
        name: "Los Angeles",
        population: 3990000,
        emblem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Seal_of_Los_Angeles.svg/640px-Seal_of_Los_Angeles.svg.png",
        lockdown: true
    },
    {
        name: "Miami",
        population: 463000,
        emblem: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Seal_of_Miami%2C_Florida.svg",
        lockdown: false
    },
    {
        name: "Seattle",
        population: 724000,
        emblem: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Seal_of_Seattle%2C_Washington.png",
        lockdown: true
    },
    {
        name: "Las Vegas",
        population: 651000,
        emblem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Seal_of_Las_Vegas%2C_Nevada.svg/2048px-Seal_of_Las_Vegas%2C_Nevada.svg.png",
        lockdown: false
    }
];

function printCities() {
    for (const eachCity of cities) {
        console.log(eachCity);
    }
}

function getLastCity() {
    for (const eachCity of cities) {
        if (cities.indexOf(eachCity) == cities.length-1) {
            for (const key in eachCity) {
                console.log(eachCity[key]);
            }
        }
    }
}

function printAllCities() {
    for (const location of cities) {
        document.querySelector("#placeContainer").innerHTML += `
            <div id="city_div_${cities.indexOf(location)}"></div>
        `
        for (const key in location) {
            if (key == "emblem") {
                document.querySelector(`#city_div_${cities.indexOf(location)}`).innerHTML += `
                    <img src="${location[key]}">
                `
            } else {
                document.querySelector(`#city_div_${cities.indexOf(location)}`).innerHTML += `
                <p>${location[key]}</p>
               `
            }
        }
    }
}

document.querySelector("#addNewCityForm").addEventListener("click", () => {
    document.querySelector("#placeContainer").innerHTML = `
        <form id="addCityForm">
            <label>City Name</label>
            <input type="text" id="cityName"> 

            <label>City Population</label>
            <input type="number" id="cityPopulation"> 

            <label>City Emblem</label>
            <input type="text" id="cityEmblem"> 

            <label>City in LockDown</label>
            <select id="inLockdown">
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <button id=submitBtn>Print...</button>
        </form>
    `

    document.querySelector("#submitBtn").addEventListener("click", (e) => {
        console.log("test");
        e.preventDefault();
        cities.push({
            name: document.querySelector("#cityName").value,
            population: document.querySelector("#cityPopulation").value,
            emblem: document.querySelector("#cityEmblem").value,
            lockdown: document.querySelector("#inLockdown").value
        })
        console.log(cities);
        printAllCities()
    });
});