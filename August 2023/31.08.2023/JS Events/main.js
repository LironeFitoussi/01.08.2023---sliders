var counter = 0;
function counterUp() {
    document.getElementById("divContainer").innerHTML = ++counter;
}

function counterDown() {
    document.getElementById("divContainer").innerHTML = --counter;
}

function popUp(valueParam) {
    console.log(valueParam);
}