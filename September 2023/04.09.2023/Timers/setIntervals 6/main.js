t6.innerHTML = 
`
    <label for="">Set Alarm Clock</label>
    <input id="timeInput" type="time">
    <button id="setAlarmBtn">Set Alarm</button>
`
setAlarmBtn.addEventListener("click", setAlarm)

function setAlarm() {
    var presentTime = new Date()
    console.log(presentTime.getHours() + ":" + presentTime.getMinutes());
    userHourInput = timeInput.value.substring(0, timeInput.value.indexOf(":"))
    userMinutesInput = timeInput.value.substring(timeInput.value.indexOf(":")+1, timeInput.value.length)
}