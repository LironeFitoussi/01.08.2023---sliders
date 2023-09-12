console.log("Test");

const dataCompare = {
    fullName: "Lirone Fitoussi",
    password: "123456789",
    mail: "lironefit@gmail.com",
    userName: "lilo2610"
}

document.querySelector("#loginBtn").addEventListener("click", logIn)

let fullNameToggle = true;
let passwordToggle = true;
let mailToggle = true;
let userNameToggle = true;

function logIn() {
    console.log("test");
    let userLogIn = {
        fullName: document.querySelectorAll("input")[0].value,
        password: document.querySelectorAll("input")[1].value,
        mail: document.querySelectorAll("input")[2].value,
        userName: document.querySelectorAll("input")[3].value
    }

    let validFullName = userLogIn.fullName === dataCompare.fullName;
    let validPassword = userLogIn.password === dataCompare.password;
    let validMail = userLogIn.mail === dataCompare.mail;
    let validUserName = userLogIn.userName === dataCompare.userName;
    
    if (validFullName && validPassword && validMail && validUserName) {
        for (const span of document.querySelectorAll("span")) {
            span.remove();
        }
        document.querySelector("#userData").innerHTML += `
            <p>You Are Connected</p>
        `
    } else {
        if (!validFullName && fullNameToggle) {
            fullNameToggle = false
            document.querySelectorAll("label")[0].innerHTML += `
                <span id="invalidFullName">*Wrong Full Name</span>
            `
        } else if (validFullName && !fullNameToggle){
            fullNameToggle = true
            document.querySelector("#invalidFullName").remove();
        }

        if (!validPassword && passwordToggle) {
            passwordToggle = false
            document.querySelectorAll("label")[1].innerHTML += `
                <span id="InvalidPassword">*Wrong Password</span>
            `
        } else if (validPassword && !passwordToggle){
            passwordToggle = true
            document.querySelector("#InvalidPassword").remove();
        }

        if (!validMail && mailToggle) {
            mailToggle = false
            document.querySelectorAll("label")[2].innerHTML += `
                <span id="InvalidMail">*Wrong Mail</span>
            `        
        } else if (validMail && !mailToggle){
            mailToggle = true
            document.querySelector("#InvalidMail").remove();
        }

        if (!validUserName && userNameToggle) {
            userNameToggle = false
            document.querySelectorAll("label")[3].innerHTML += `
                <span id="InvalidUserName">*Wrong User Name</span>
            `   
        } else if (validUserName && !userNameToggle){
            userNameToggle = true
            document.querySelector("#InvalidUserName").remove();
        }
    }
}
