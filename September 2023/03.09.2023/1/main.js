console.log("test");

function printUserName() {
    var userName = prompt("What is Your Name?")
    console.log(userName);
    document.body.innerHTML += `
        <p>${userName}</p>
    `
}