var usersArr = [];
function creatUserObjects() {
  for (let i = 0; i < 2; i++) {
    usersArr.push({
      name: prompt(`Set User ${i + 1} Name: `),
      mail: prompt(`Set User ${i + 1} Email: `),
      pswd: prompt(`Set User ${i + 1} Password: `),
      pic: prompt(`Set User ${i + 1} profile pic URL: `),
    });
  }

  if (usersArr[0].mail == usersArr[1].mail) {
    usersDiv.innerHTML = `
            <p>The emails of both users are identical.</p>
        `;
  } else {
    for (let i = 0; i < 2; i++) {
      usersDiv.innerHTML += `
            <h1>User Name: ${usersArr[i].name}</h1>
            <p>User Mail: ${usersArr[i].mail}</p>
            <p>User Password: ${usersArr[i].pswd}</p>
            <img src="${usersArr[i].pic}">
        `;
    }
  }
}
