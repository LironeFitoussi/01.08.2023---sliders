var teachersArr = [];

function getTecherByUser(count) {
  for (let i = 0; i < count; i++) {
    teachersArr.push({
      name: prompt("Choose Teacher's Name"),
      hourSallary: +prompt("Set Teacher's Sallary Hourly"),
      mail: prompt("Add Teacher's E-Mail:"),
      birthYear: +prompt("What is the Teacher's Year of Birth?"),
    });
  }

  printTeachers();
}

function printTeachers() {
  for (let i = 0; i < teachersArr.length; i++) {
    var teacher = teachersArr[i];
    if (teacher.birthYear <= 1990 || teacher.hourSallary >= 100) {
      teacherDiv.innerHTML += `
            <span>
                Name: ${teacher.name}
                Sallry: ${teacher.hourSallary} Per Hour
                E-Mail: ${teacher.mail}
                Birth Year: ${teacher.birthYear}
            </span>
            <br>
            `;
    }
  }
}
