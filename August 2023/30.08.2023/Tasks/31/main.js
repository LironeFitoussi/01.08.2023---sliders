var userObj = {
    firstName: prompt("Type User First Name:"),
    lastName: prompt("Type User Last Name:"),
    profilePic: prompt("Type User profile Pic URL:"),
    userMail: prompt("Type User E-Mail:"),
    userPassword: prompt("Type User Password:")
}

console.log(userObj);
console.log(Object.keys(userObj));


userData.innerHTML += 
    `
        <div>${userObj.firstName}<div>
        <div>${userObj.lastName}<div>
        <img src="${userObj.profilePic}">
        <div>${userObj.userMail}<div>
        <div>${userObj.userPassword}<div>
    `

