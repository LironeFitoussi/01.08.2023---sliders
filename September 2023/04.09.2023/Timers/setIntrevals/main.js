// T1
// setInterval(printTimer, 4000)
// function printTimer() {
//     t1.innerHTML += `<p>timer</p>`
// }

// T2
// setInterval(printCounter, 6000)
function printCounter() {
    t2.innerHTML += `<p>counter</p>`
}

// T3
// var printTimer = setInterval(printSomething, 6000)
// t3.innerHTML += `
//     <button onclick="stopTimer()">Stop Counter</button>
// `

// function stopTimer() {
//     clearInterval(printTimer)
// }

// function printSomething() {
//     t3.innerHTML += `<p>I Love Timers</p>`
// }

// T4
// setInterval(printTime, 1000)
// function printTime() {
//     var actualTime = new Date();
//     t4.innerHTML = `
//         <p>${actualTime.getHours()}:${actualTime.getMinutes()}:${actualTime.getSeconds()}</p>
//     `
// }

// T5
t5.innerHTML = `
    <label for="">Set Timer Countdown</label>
    <input type="number">
    <button>Start Countdown</button>
`

t5.getElementsByTagName("button")[0].addEventListener("click", logTest)

function logTest() {
    setInterval(countDown, 1000)
    var countSec = 12
    console.log(countSec);
    var countMin = (t5.getElementsByTagName("input")[0].value)-1
    function countDown() {
        t5.innerHTML = `<p>${countMin}:${countSec}</p>`
        countSec--
        if (countSec < 10) {
            countSec =  "0" + countSec
        }
        if (countSec == "0-1") {
            countSec = 59;
            countMin--
        }
    }
}
