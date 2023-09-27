console.log("test");
const fetchWeather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=tel-aviv&cnt=6&appid=38457dab3383d5ed2ed06f87db57c7b3`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            data.list.forEach((element, index) => {
                // console.log(element);
                const today = new Date()
                const nextDay = new Date(today.getTime() + ((index+1)*(60 * 60 * 24 * 1000)))
                console.log(nextDay);
                const dateDay = nextDay.getDate()
                const dateMonth = nextDay.getFullYear()
                const weatherElem = document.createElement("div")
                const weatherContent = `
                    
                `
                weatherElem.id = `day_${index + 1}`
                weatherElem.className = `weatherCont`
                console.log(weatherElem);                
            });
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

fetchWeather("tel aviv");
