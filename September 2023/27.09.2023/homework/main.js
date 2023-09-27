console.log("test");
const fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=tel-aviv&cnt=6&appid=38457dab3383d5ed2ed06f87db57c7b3&units=metric`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
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
                const dateDay = nextDay.getDate()
                const dateMonth = nextDay.getMonth()
                const weatherElem = document.createElement("div")
                weatherElem.className = "dayDiv"
                const weatherContent = `
                <div class="headWeather">
                    <div class="dayWeather">
                        <p class="weekDay">${getDayAbbreviation(nextDay)}</p>
                        <p class="dateFormat">${dateMonth}/${dateDay < 10? "0" + dateDay: dateDay}</p>
                    </div>
                    <img src="https://static.vecteezy.com/system/resources/previews/009/266/750/original/sun-icon-design-free-png.png" alt="" class="weather-icon">
                    <div class="highLowTemp">
                        <span class="high-temp">${parseInt(element.main.temp_max)}°</span>
                        <span class="low-temp">/${parseInt(element.main.temp_min)}°</span>
                    </div>
                </div>
                <div class="maintemps">
                    <p class="weather-decriptions"></p>
                    <div class="tempKind">
                        <p>Actual Temperature</p>
                        <span>30°</span> 
                    </div>
                    <div class="tempKind">
                        <p>Wind</p>
                        <span>13 km/h</span>
                    </div>
                    <div class="tempKind">
                        <p>Feels Like:</p>
                        <span>30°</span>
                    </div>
                    <div class="tempKind">
                        <p>Actual Temperature</p>
                        <span>30°</span>
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

fetchWeather("tel aviv");
