myDiv.innerHTML += `
    <div>Click Me</div>
    <p id="myTime"></p>
`

document.body.getElementsByTagName("div")[0].addEventListener("mouseover", printHour)

function printHour() {
    var actualDate = new Date()
    myTime.innerHTML = 
    `
        ${actualDate.getHours()}:${actualDate.getMinutes()}
    `
}