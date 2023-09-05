console.log("test");
mainDiv.innerHTML = `
    <div class="colorDiv""></div>
`

document.head.innerHTML += `
    <style> 
        .colorDiv {
            background-color: blue;
            width: 30vw;
            height: 5vh
        }
    </style>  
`
document.getElementsByClassName("colorDiv")[0].addEventListener("click", startLoop)

var randomRed;
var randomGreen;
var randomBlue;

function startLoop() {
    setInterval(loopColor, 100)
}

function loopColor() {
    document.getElementsByClassName("colorDiv")[0].style = `background-color:${getRandomColor()};`
}

function getRandomColor() {
    randomRed =  Math.floor((Math.random()*255))
    randomGreen =  Math.floor((Math.random()*255))
    randomBlue =  Math.floor((Math.random()*255))
    var randomColor= `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    return randomColor
}

console.log(getRandomColor());

