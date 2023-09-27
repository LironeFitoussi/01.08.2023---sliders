console.log("test");
document.getElementById("cityValid").addEventListener("submit", (e) => {
    e.preventDefault()
    const cityInputValue = document.getElementById("cityInput").value
    console.log(cityInputValue);
    fetchWeather(cityInputValue)
})

const fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=6&appid=38457dab3383d5ed2ed06f87db57c7b3&units=metric`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.getElementById("mainContainer").innerHTML = `
                <h1>Weather Forecast in ${data.city.name}, ${data.city.country} for the next Week</h1>
                <span>Fun Fact: ${data.city.name} has ${data.city.population} citizens</span>
            `
            data.list.forEach((element, index) => {
                console.log(element);
                const today = new Date()
                const nextDay = new Date(today.getTime() + ((index+1)*(60 * 60 * 24 * 1000)))
                function getDayAbbreviation(nextDay) {
                    switch (nextDay.getDay()) {
                        case 0:
                            return 'SUN';
                        case 1:
                            return 'MON';
                        case 2:
                            return 'TUE';
                        case 3:
                            return 'WED';
                        case 4:
                            return 'THU';
                        case 5:
                            return 'FRI';
                        case 6:
                            return 'SAT';
                        default:
                            return 'Invalid day';
                    }
                }
                const weatherImgSrc = () => {
                    if (element.main.temp >= 30) {
                        return "https://parspng.com/wp-content/uploads/2022/05/sunpng.parspng.com-5.png"
                    } else if (element.main.temp >= 26) {
                        return "https://static.vecteezy.com/system/resources/previews/009/266/750/original/sun-icon-design-free-png.png"
                    } else if (element.main.temp >= 22){
                        return "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
                    } else {
                        return "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather14-512.png"
                    }
                }
                const dateDay = nextDay.getDate()
                const dateMonth = nextDay.getMonth()
                const weatherElem = document.createElement("div")
                const milesToKm = miles => miles * 1.609344
                weatherElem.className = "dayDiv"
                const weatherContent = `
                <div class="headWeather">
                    <div class="dayWeather">
                        <p class="weekDay">${getDayAbbreviation(nextDay)}</p>
                        <p class="dateFormat">${dateMonth}/${dateDay < 10? "0" + dateDay: dateDay}</p>
                    </div>
                    <img src="${weatherImgSrc()}" alt="weather-logo" class="weather-icon">
                    <div class="highLowTemp">
                        <span class="high-temp">${parseInt(element.main.temp_max)}°</span>
                        <span class="low-temp">/${parseInt(element.main.temp_min)}°</span>
                    </div>
                </div>
                <div class="maintemps">
                    <p class="weather-decriptions">${element.weather[0].main}, ${element.weather[0].description}</p>
                    <div class="tempKind">
                        <p>Average Temperature</p>
                        <span>${element.main.temp}°</span> 
                    </div>
                    <div class="tempKind">
                        <p>Wind</p>
                        <span>${milesToKm(element.wind.speed).toFixed(2)} km/h</span>
                    </div>
                    <div class="tempKind">
                        <p>Feels Like:</p>
                        <span>${element.main.feels_like}°</span>
                    </div>
                    <div class="tempKind">
                        <p>Humidity</p>
                        <span>${element.main.humidity}%</span>
                    </div>
                </div>
                `
                weatherElem.id = `day_${index + 1}`
                weatherElem.innerHTML = weatherContent
                console.log(weatherElem);
                document.getElementById("mainContainer").innerHTML += weatherElem.outerHTML          
            });
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

