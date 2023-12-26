console.log("test");
let isYoung = true

const checkUserAge = () => {
  const todayDate = new Date()
  const userBirthday = new Date(document.getElementById("userBirthday").value)

  // Age Logic:
  if(todayDate.getFullYear() - userBirthday.getFullYear() >= 18) {
    if (todayDate.getMonth() >= userBirthday.getMonth()) {
      console.log(1);
      if (todayDate.getDate() > userBirthday.getDate()) {
        console.log(2);
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