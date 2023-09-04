myDiv.innerHTML += `
    <h3 id="myH3">Click Me</h3>
`

document.body.getElementsByTagName("h3")[0].addEventListener("mouseover", changeColor)

function changeColor() {
    myH3.style = "color: purple"
}