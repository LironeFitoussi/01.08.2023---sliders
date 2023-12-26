console.log("Test");

function printLastName() {
    const userName = document.querySelector("#userLastName")
    console.log(userName);
    document.body.innerHTML += `
        <p>${userName}<p>
    `
}