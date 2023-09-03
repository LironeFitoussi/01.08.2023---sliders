console.log("Test4");
var userAge;
function checkAge() {
    var today = new Date()
    userAge = new Date(document.body.getElementsByTagName("input")[0].value)

    var compareAges = today.getFullYear() - userAge.getFullYear();
    if (compareAges >= 18) {
        document.body.innerHTML += `
            <p>User is older than 18 Y.O.</p>
        `
    } else {
        document.body.innerHTML += `
            <p>User is younger than 18 Y.O.</p>
        `
    }
}