console.log("Test");

document.body.innerHTML += `
        <p></p>
    `

function printLastName() {
    var lastName = document.getElementsByTagName("input")[0];
    if (lastName.value != "") {
        document.getElementsByTagName("p")[0].innerText = `${lastName.value}`
        lastName.value = null;
    }
    
}