t6.innerHTML = 
`
    <label for="">Set Alarm Clock</label>
    <input id="timeInput" type="time">
    <button id="setAlarmBtn">Set Alarm</button>
`
setAlarmBtn.addEventListener("click", setAlarm)

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

    console.log(`Time Left: ${hoursDiffrence}:${minutesDiffrence}:${secondsDiffrence}`);
}

function extractHoursFromUser() {
    var userHourInput = timeInput.value.substring(0, timeInput.value.indexOf(":"));
    return parseInt(userHourInput);
}

function extractMinutesFromUser() {
    var userMinutesInput = timeInput.value.substring(timeInput.value.indexOf(":")+1, timeInput.value.length);
    return parseInt(userMinutesInput);
}