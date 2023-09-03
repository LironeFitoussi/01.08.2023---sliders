console.log("Test5");
function printName() {
    document.getElementsByTagName("p")[0].innerHTML = `${userInput.value}`
    userInput.value = ""
}