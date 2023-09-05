mainDiv.innerHTML = `
    <h1>Enter Colors & Text</h1>
    <input type="color" id="colorInput1" placeholder="Color 1">
    <input type="color" id="colorInput2" placeholder="Color 2">
    <input type="color" id="colorInput3" placeholder="Color 3">
    <input type="color" id="colorInput4" placeholder="Color 4">
    <input type="color" id="colorInput5" placeholder="Color 5">
    <input type="text" id="textInput" placeholder="טקסט">
    <button id="printBtn">Submit</button>
    <button id="stopBtn">Stop</button>

    <div id="output"></div>
`
printBtn.addEventListener("click", startPrint)
stopBtn.addEventListener("click", stopPrint)
document.addEventListener("keydown", handleKeyDown)


var colorArray = [] ;
var radnomColorPrint;

function startPrint() {
    radnomColorPrint = setInterval(printText, 1000)
    output.innerHTML = `
        <p>${document.getElementsByTagName("input")[5].value}</p>
    `
}

function printText() {
    var randomColorIndex = Math.floor(Math.random()*4)
    setColorArray();
    document.getElementsByTagName("p")[0].style = `color: ${colorArray[randomColorIndex]}`
}

function setColorArray() {
    for (let i = 0; i < 5; i++) {
        colorArray.push(document.getElementsByTagName("input")[i].value)
    }
}

function stopPrint() {
    clearInterval(radnomColorPrint)
}

function handleKeyDown(event) {
    if (event.keyCode === 16) {
        stopPrint()
    }
}


