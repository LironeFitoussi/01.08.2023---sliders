t6.innerHTML = 
`
    <label for="">Set Alarm Clock</label>
    <input id="timeInput" type="time">
    <button id="setAlarmBtn">Set Alarm</button>
    <button id="pauseButton">⏸ / ▶</button>
    <p id=timeLeftP></p>
`
setAlarmBtn.addEventListener("click", startCountdown)
pauseButton.addEventListener("click", stopCountdown)

var mainInterval;
var isCountDownActive = false;

function startCountdown() {
    isCountDownActive = true;
    mainInterval = setInterval(printTime, 1000)
}

function stopCountdown() {
    if (isCountDownActive == true) {
        clearInterval(mainInterval)
        isCountDownActive = false;
    } else {
        mainInterval = setInterval(printTime, 1000)
        isCountDownActive = true;
    }
    
}

function printTime() {
    timeLeftP.innerHTML = `
        ${setAlarm()}
    `
}

function setAlarm() {
    //Set 2 times
    var presentTime = new Date();
    var userTime = new Date(presentTime);

    // Initialize User Time
    userTime.setHours(extractHoursFromUser(), extractMinutesFromUser(), 0)
    var timeDiffrence = userTime.getTime()-presentTime.getTime();

    // Set Hours
    var hoursDiffrence = Math.floor(timeDiffrence/1000/60/60)
    timeDiffrence -= hoursDiffrence*60*60*1000

    // Set Minutes
    var minutesDiffrence = Math.floor(timeDiffrence/1000/60)
    timeDiffrence -= minutesDiffrence*60*1000

    // Set Seconds
    var secondsDiffrence = Math.floor(timeDiffrence/1000)
    timeDiffrence -= secondsDiffrence*1000
    
    return `Time Left: ${hoursDiffrence}:${minutesDiffrence}:${secondsDiffrence}`
}

function extractHoursFromUser() {
    var userHourInput = timeInput.value.substring(0, timeInput.value.indexOf(":"));
    return parseInt(userHourInput);
}

function extractMinutesFromUser() {
    var userMinutesInput = timeInput.value.substring(timeInput.value.indexOf(":")+1, timeInput.value.length);
    return parseInt(userMinutesInput);
}