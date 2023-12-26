console.log("test");
let isYoung = true

const checkUserAge = () => {
  const todayDate = new Date()
  const userBirthday = new Date(document.getElementById("userBirthday").value)
  console.log(userBirthday.getFullYear());
  console.log(todayDate);

  // Age Logic:
  if(todayDate.getFullYear() - userBirthday.getFullYear() >= 18) {
    console.log(todayDate.getFullYear() - userBirthday.getFullYear() >= 18);
    if (todayDate.getMonth() - userBirthday.getMonth()  0) {
      if (todayDate.getDay() - userBirthday.getDay() > 0) {
        isYoung = false
      }
    }
  }
  
  renderMessage()
}

function renderMessage() { 
  document.body.innerHTML += `
    <p>user is ${isYoung? "younger" : "older"} than 18 y.o </p>
  `
}