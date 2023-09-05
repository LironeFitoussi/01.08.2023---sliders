console.log("Test");

var heightCount = 0

mainDiv.innerHTML = `
    <div class="colorDiv""></div>
`

document.head.innerHTML += `
    <style> 
        .colorDiv {
            background-color: blue;
            width: 30vw;
        }
    </style>  
`
setInterval(heightGrow, 1)

function heightGrow() {
    if (heightCount <= 300) {
        document.getElementsByClassName("colorDiv")[0].style =  `height:${heightCount++}px`
    }
    
}

