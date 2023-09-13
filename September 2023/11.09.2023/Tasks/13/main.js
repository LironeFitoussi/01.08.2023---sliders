document.querySelector("#printUserDataBtn").addEventListener("click", function() {
    console.log("Test");
    let firstName = document.querySelector("#fName").value;
    let lastName = document.querySelector("#lName").value;
    let userAge = document.querySelector("#userAge").value;

    let userData = {
        firstName,
        lastName,
        userAge
    }

    document.querySelector("#mainContainer").innerHTML += `
        <div>
            <h1>${userData.firstName} ${userData.lastName}</h1>
            <span>${userData.userAge}</span>
        </div>
    `
});

