const textElements = document.querySelectorAll(".fruit");
const changeColorButton = document.getElementById("changeColorButton");
const changeTextButton = document.getElementById("changeTextButton");

changeColorButton.addEventListener("click", function() {
    for (let i = 0; i < textElements.length; i++) {
        textElements[i].style.color = "blue";
    }
});

changeTextButton.addEventListener("click", function() {
    for (let i = 0; i < textElements.length; i++) {
        textElements[i].textContent = "hello";
    }
});
