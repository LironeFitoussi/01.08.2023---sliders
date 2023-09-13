let userData = {};

document.querySelector("#printUserDataBtn").addEventListener("click", function() {
    console.log("Test");
    userData = {
        firstName: document.querySelector("#fName").value,
        lastName: document.querySelector("#lName").value,
        userAge: document.querySelector("#userAge").value
    }

    const userCard = document.createElement("div");
    userCard.innerHTML = `
        <h1>${userData.firstName} ${userData.lastName}</h1>
        <span>${userData.userAge}</span>
    `;

    document.querySelector("#mainContainer").appendChild(userCard);
});
