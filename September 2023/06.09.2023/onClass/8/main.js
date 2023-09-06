console.log("Test");
var attemptCount = 0

var printHour = setInterval(printTime, 1000)
var presentTime;

function printTime() {
    presentTime = new Date()
    var hours = presentTime.getHours();
    var minutes = presentTime.getMinutes();
    var seconds = presentTime.getSeconds();
    timeSet.innerHTML = `
        ${hours}:${minutes<10? `0`:``}${minutes}:${seconds<10? `0`:``}${seconds}
    `
}

function validation() {
    var fNameValid = fNameInput.value[0] == fNameInput.value[0].toUpperCase();
    var lNameValid = lNameInput.value.length < 20;
    var ageValid = new Date().getFullYear() - new Date(ageInput.value).getFullYear() >= 18 && new Date().getFullYear() - new Date(ageInput.value).getFullYear() <= 65; 
    var mailValid = mailInput.value.lastIndexOf(".com") == mailInput.value.length - 4 && mailInput.value.length>3 || mailInput.value.lastIndexOf(".co.il") == mailInput.value.length - 6 && mailInput.value.length>5;
    var phoneValid = phoneInput.value[0] == 0 && phoneInput.value.length == 10;

    if (fNameValid && lNameValid && ageValid && mailValid && phoneValid) {
        return true
    } else {
        if (!fNameValid) {
            fNameError.innerHTML = "*First letter must be capitalized"
            fNameError.style.color = "red"
            fNameInput.style.border = "1px dotted red"
        }

        if (!lNameValid) {
            lNameError.innerHTML = "*The Last Name input must be less than 20 characters long"
            lNameError.style.color = "red"
            lNameInput.style.border = "1px dotted red"
        }

        if (!ageValid) {
            ageError.innerHTML = "*Worker must be between 18 to 65 y.o."
            ageError.style.color = "red"
            ageInput.style.border = "1px dotted red"
        }

        if (!mailValid) {
            mailError.innerHTML = `*E-Mail Must end With ".com" or ".co.il"`
            mailError.style.color = "red"
            mailInput.style.border = "1px dotted red"
        }

        if (!phoneValid) {
            phoneError.innerHTML = "*The Phone Number input must start with a 0 and be 10 digits long."
            phoneError.style.color = "red"
            phoneInput.style.border = "1px dotted red"
        }
        attemptCount++
        console.log(attemptCount);
        if (attemptCount >= 4) {
            disableForm()
        }
        return false
    }
}

function disableForm() {
    var minutesLeft = 1
    var secondsLeft = 29
    var countDownTimer = setInterval(printCountdown, 1000)

    timerLeft.innerHTML = `
        You Must Wait <span id="countDown">1:30</span> Minutes until next try
    `
    for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
        document.getElementsByTagName("input")[i].disabled = true;
    }
    submitBtn.disabled = true;
    function printCountdown() {
        if (secondsLeft == 0 && minutesLeft == 0) {
            clearInterval(countDownTimer)
            for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
                document.getElementsByTagName("input")[i].disabled = false;
            }
            submitBtn.disabled = false;
            attemptCount = 0
            timerLeft.innerHTML = "Try Again:"
            return
        }
        if (secondsLeft == -1) {
            secondsLeft=59;
            minutesLeft=0
        }    
        countDown.innerHTML = `${secondsLeft==0?minutesLeft--:minutesLeft}:${secondsLeft<10?`0`:``}${secondsLeft--}`
    }
}


