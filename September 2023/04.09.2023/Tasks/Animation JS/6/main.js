console.log("test");

document.head.innerHTML += `
    <style> 
        #colorDiv {
            background-color: blue;
            width: 1px;
            height: 1px;
        }
    </style>  
`

mainDiv.innerHTML = `
    <label for="">set Max-Width:</label>
    <input type="number">
    <label for="">set Max-Height:</label>
    <input type="number">
    <button id="startBtn">Start Animation</button>     
    <div id="colorDiv""></div>
`

var userWidthSet;
var userHeightSet;

var wCount = 1
var hCount = 1

var growInterval;

startBtn.addEventListener("click", startAnimation)

function startAnimation() {
    console.log("Test");
    getuserInputs()
    growInterval = setInterval(growElement, 10)
}

function growElement() {
    if (wCount < userWidthSet) {
        wCount++
    }

    if (hCount < userHeightSet) {
        hCount++
    }

    colorDiv.style = `
        width: ${wCount}px;
        height: ${hCount}px;
    `
    if (wCount == userWidthSet && hCount == userHeightSet) {
        clearInterval(growInterval)
    }
}

function getuserInputs() {
    userWidthSet = document.getElementsByTagName("input")[0].value;
    userHeightSet = document.getElementsByTagName("input")[1].value;
    console.log(userHeightSet);
    console.log(userWidthSet);
}

function handleKeyDown(event) {
    if (event.keyCode === 32) {
        clearInterval(growInterval)
    }
}

document.addEventListener("keydown", handleKeyDown);


