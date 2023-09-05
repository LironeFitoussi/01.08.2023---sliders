console.log("Test");

var heightCount = 0

mainDiv.innerHTML = `
    <button id="startBtn">Start Animation</button>
    <div class="colorDiv""></div>
`
startBtn.addEventListener("click", startAnimation)
document.head.innerHTML += `
    <style> 
        .colorDiv {
            background-color: blue;
            width: 30vw;
            height: 5vh
        }
    </style>  
`

function startAnimation() {
    setInterval(heightGrow, 1)
}


function heightGrow() {
    if (heightCount <= 300) {
        document.getElementsByClassName("colorDiv")[0].style =  `height:${heightCount++}px`
    }
    
}

