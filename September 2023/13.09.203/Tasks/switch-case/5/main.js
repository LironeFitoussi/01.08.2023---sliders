const circleForm = document.getElementById("circleForm");
const output = document.getElementById("output");

circleForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    const color = colorInput.value;
    const position = positionInput.value;
    
    createColoredCircle(color, position);
});

function createColoredCircle(color, position) {
    const circle = document.createElement("div");
    circle.style = `
        background-color: ${color};
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute
    
    `
    
    switch (position) {
        case "top-left":
            circle.style.top = "0";
            circle.style.left = "0";
            break;
        case "top-right":
            circle.style.top = "0";
            circle.style.right = "0";
            break;
        case "bottom-left":
            circle.style.bottom = "0";
            circle.style.left = "0";
            break;
        case "bottom-right":
            circle.style.bottom = "0";
            circle.style.right = "0";
            break;
        default:
        return;
    }
    
    output.appendChild(circle);
}
