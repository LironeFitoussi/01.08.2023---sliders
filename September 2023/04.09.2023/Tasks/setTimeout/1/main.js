myDiv.innerHTML += `
    <h1>Click Me</h1>
`
document.body.getElementsByTagName("h1")[0].addEventListener("mouseover", sendAlert)

function sendAlert() {
    alert("h1 Clicked!")
}

