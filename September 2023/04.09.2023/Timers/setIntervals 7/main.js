document.body.innerHTML += `
    <button id="getMsg">⏸ / ▶</button>
    <button id="resetCount">■</button>   
`

getMsg.addEventListener("click", loopTime)
resetCount.addEventListener("click", resetCounter)


var isIntervalActive = false;
var myInterval;
var count = 0;

function loopTime() {
    if (!isIntervalActive) {
        myInterval = setInterval("printTime()", 1000)
        isIntervalActive = true
    } else {
        clearInterval(myInterval)
        isIntervalActive = false;
    }
    
}

function printTime() {
    console.log("Test");
    myDiv.innerHTML = `
        <p> Youre in the site ${count++} seconds</p>
    `
}

function resetCounter() {
    count = 0;
}