function numberTest() {
    let userNum = +prompt("Give Me a Number")
    switch (userNum) {
        case (3):
            console.log("Hello")
            return;
        case (5):
        console.log("Goodbye");
            return;
        case (7):
            console.log("Thank You");
            return;
        default:
            console.log("No Match Number");
    }
}

function printNameAs() {
    let userName = prompt("Type a Name");
    switch (userName) {
        case ("jacob"):
            document.querySelector("#namePlace").innerHTML = `
                <p>${userName}</p>
            `
        break;

        case ("Nathan"):
            document.querySelector("#namePlace").innerHTML = `
                <p>${userName.toUpperCase()}</p>
            `
        break;

        case ("DALYA"):
        document.querySelector("#namePlace").innerHTML = `
            <p>${userName.toLowerCase()}</p>
        `
        break;

        default:
        document.querySelector("#namePlace").innerHTML = `
            <p>No Match Name</p>
        `
        break;
    }
}