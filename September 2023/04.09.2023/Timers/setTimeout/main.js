// T1
// setTimeout(printMyName, 7000)
function printMyName() {
    t1.innerHTML = `
            <p>Lirone Fitoussi<p>
    `
}

// T2
// setTimeout(printHello, 5000)
function printHello() {
    t2.innerHTML += `
            <p>Hello<p>
    `
}
// t2.innerHTML += `
//     <p>Bye<p>
//     `


// T3
// setTimeout(printHour, 90000)

var newDate = new Date()
function printHour() {
    t3.innerHTML +=`
        <p>${newDate.getHours()}:${"0"+newDate.getMinutes()}</p>
    `
}

// T4
// var printTimer = setTimeout(printSomething, 10000)
// t4.innerHTML = `
//     <button onclick="eraseParagraph()"> Stop Timer </button>
// `

function printSomething() {
    t4.innerHTML +=`
        <p>I love Timers</p>
    `
}

function eraseParagraph() {
    clearTimeout(printTimer)
}

// T5
t5.innerHTML +=`
    <h1>This is an Header</h1>
`

setTimeout(changeColor, 3000)
function changeColor() {
    t5.getElementsByTagName("h1")[0].style = "color: red"
}

// 


