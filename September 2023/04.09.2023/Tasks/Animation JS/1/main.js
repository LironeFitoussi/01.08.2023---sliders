console.log("Test");

var heightCount = 0

mainDiv.innerHTML = `
    <button id="startBtn">Start Animation</button>
    <button id="stopBtn">Stop Animation</button>

    <div class="colorDiv""></div>
`
startBtn.addEventListener("click", startAnimation)
stopBtn.addEventListener("click", stopAnimation)

document.head.innerHTML += `
    <style> 
        .colorDiv {
            background-color: blue;
            width: 30vw;
            height: 5vh
        }
    </style>  
`
var growInterval;
function startAnimation() {
    growInterval = setInterval(heightGrow, 10)
}

function stopAnimation() {
    clearInterval(growInterval)
}


function heightGrow() {
    if (heightCount <= 300) {
        document.getElementsByClassName("colorDiv")[0].style =  `height:${heightCount++}px`
    }
    
}

