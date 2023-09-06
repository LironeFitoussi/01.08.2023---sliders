// Task 1
function equalInput() {
  if (num1.value == num2.value) {
    return true;
  } else {
    Task1.innerHTML += `
            <span style="color: red;">* Error: Two Numbers Must be Equal </span>
        `;
    return false;
  }
}

// Task 2
function higherNumber() {
  if (num1.value > num2.value) {
    return true;
  } else {
    Task2.innerHTML += `
            <span style="color: red;">* Error: First Number Must Be Higher</span>
        `;
    return false;
  }
}

// Task 3
function identicalText() {
  if (text1.value == text2.value) {
    return true;
  } else {
    Task3.innerHTML += `
            <span style="color: red;">* Error: Two input must be identical</span>
        `;
    return false;
  }
}

// Task 4
function identicalLength() {
  if (text1.value.length == text2.value.length) {
    return true;
  } else {
    Task4.innerHTML += `
            <span style="color: red;">* Error: Two input must have the same length</span>
        `;
    return false;
  }
}

// Task 5
function firstLetter() {
  if (text1.value[0] == text2.value[0]) {
    return true;
  } else {
    Task5.innerHTML += `
            <span style="color: red;">* Error: Two input must start with the same letter</span>
        `;
    return false;
  }
}

// Taks 6 - Done

// Task7
function validate() {
    var isFnameUnder10 = fnameInput.value.length < 10
    var is18Oover = new Date().getFullYear() - +ageInput.value.substr(0, 4) >= 18;
    var isPassMatch = pass1Input.value == pass2Input.value;
    var isEmailValid = emailInput.value.lastIndexOf(".com") == emailInput.value.length - 4 && emailInput.value.length>3;
    if (isFnameUnder10 && isEmailValid && is18Oover && isPassMatch) {
        return true;
    }
    else {
        if(!isFnameUnder10){
            fNameLbl.innerHTML +="<span>*name must be under 10 chars</span>"
            fNameLbl.style.color = "red"
            fnameInput.style.border = "1px dotted red"
        }

        if(!isEmailValid){
            emailLbl.innerHTML +="<span>*E-Mail invalid</span>"
            emailLbl.style.color = "red"
            emailInput.style.border = "1px dotted red"
        }

        if(!is18Oover){
            ageLbl.innerHTML +="<span>*User Must be a least 18 y.o.</span>"
            ageLbl.style.color = "red"
            ageInput.style.border = "1px dotted red"
        }

        if(!isPassMatch){
            firstPassLbl.innerHTML += "<span>*Passwords Don't Match</span>"
            firstPassLbl.style.color = "red"
            pass1Input.style.border = "1px dotted red"
        }

        return false
    }
    
}
