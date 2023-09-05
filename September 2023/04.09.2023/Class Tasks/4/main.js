myDiv.innerHTML += `
    <button id="myBtn">Hello World!</button>
    <p>Click Me</p>
`

document.body.getElementsByTagName("p")[0].addEventListener("click", expandBtn)

function expandBtn() {
    myBtn.style = "width: 45vw;"
}