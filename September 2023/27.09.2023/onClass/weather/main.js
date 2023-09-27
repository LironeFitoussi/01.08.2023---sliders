document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const city = document.getElementById("findCity").value;
    console.log(city);
    fetchWeather(city);
});

const fetchWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=38457dab3383d5ed2ed06f87db57c7b3`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const mainElem = document.createElement("div")
            
            const sunrise = new Date(data.sys.sunrise)
            const formatedSunrise = `${sunrise.getHours()>12?sunrise.getHours()-12:sunrise.getHours()}:${sunrise.getMinutes().length > 2? sunrise.getMinutes():"0" + sunrise.getMinutes()}`
            
            const sunset = new Date(data.sys.sunset)
            const formatedSunet = `${sunset.getHours()}:${sunset.getMinutes().length > 2? sunset.getMinutes():"0" + sunset.getMinutes()}`
            
            const elemCont = `
                <h1> Weather at ${data.name}</h1>
                <h3>Sunrise: ${formatedSunrise} AM | Sunset: ${formatedSunet} PM</h3>
                <p>Actual Temp: ${data.main.temp}°C</p>
                <p>Feels Like: ${data.main.feels_like}°C</p>
            `
            mainElem.innerHTML = elemCont
            document.getElementById("mainContainer").innerHTML = mainElem.outerHTML
        })
        .catch(error => {
            console.log(error);
        });
}

// document.getElementById("findCity").addEventListener("input", () => {
//     const city = document.getElementById("findCity").value;
//     console.log(city);
//     fetchWeather(city);
// })

// fetchWeather("netanya")
// fetchWeather("gaza")
// fetchWeather("new-york-city")


// fetchWeather(48.8566, 2.3522)
// fetchWeather(34.0549, -118.2426)




// sys: Object

// country: "IL"

// id: 6845

// sunrise: 1695785501

// sunset: 1695828729

// type: 1