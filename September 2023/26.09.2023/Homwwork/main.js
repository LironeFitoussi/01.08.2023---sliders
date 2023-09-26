console.log("test");
// Task 1

function Person(firstName, lastName, birthdate, profileImage) {
    let age = 0
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthdate);
    this.profileImage = profileImage;
    this.getFullName = () => this.firstName + " " +this.lastName;
    this.getAge = () => {
        const today = new Date();
        const yearsDiff = today.getFullYear() - this.birthDate.getFullYear();
        let hasBirthdayOccurred = new Boolean
        if (today.getMonth() > this.birthDate.getMonth()) {
            hasBirthdayOccurred = true
        } else if (today.getMonth() == this.birthDate.getMonth()) {
            if (today.getDate() >= this.birthDate.getDate()){
                hasBirthdayOccurred = true
            } else {
                hasBirthdayOccurred = false
            }
        } else {
            hasBirthdayOccurred = false
        }
        age = hasBirthdayOccurred ? yearsDiff : yearsDiff - 1;
        return age;
    };

    this.canClub = () => {
        if (this.getAge() >= 18) {
            return true
        } else {
            return false
        }
        
    }

    this.render = () => {
        const personContent = `
            <h1>${this.getFullName()}</h1>
            <h2>${this.getAge()}</h2>
            <p>${this.canClub() ? "Allowed To Club" : "Not Allowed to Club"}</p>
            <img class="profile-pic" src="${this.profileImage}" alt="${this.getFullName()}_pic">
        `;
        const personComp = document.createElement("div");
        personComp.id = "personCard"
        personComp.innerHTML = personContent;
        document.body.appendChild(personComp)
    };

};

const person1 = new Person("John", "Miller", "Sep 26 1985", "https://www.usmagazine.com/wp-content/uploads/2018/10/John-Miller-Jen-Garner-new-boyfriend.jpg?w=1200&quality=47&strip=all");
const person2 = new Person("Maya", "Sanders", "Sep 14 2006", "https://images.squarespace-cdn.com/content/v1/5eb346d5e986d7697947c1b3/1614297452455-00YS9HPCKVXHI5ILZ0VD/IMG_7896.jpg");
const person3 = new Person("Alice", "Johnson", "Dec 10 1990", "https://example.com/alice.jpg");
const person4 = new Person("Bob", "Smith", "Jan 5 1980", "https://example.com/bob.jpg");
const person5 = new Person("Eva", "Davis", "Mar 20 2000", "https://example.com/eva.jpg");
const person6 = new Person("Michael", "Wilson", "Jul 15 1975", "https://example.com/michael.jpg");

console.log(person1);
console.log(person1.getFullName());
console.log(person1.getAge());
console.log(person1.canClub());
console.log(person1.render());
console.log(person2.render());

const peopleArr = [
    person1.render(),
    person2.render(),
    person3.render(),
    person4.render(),
    person5.render(),
    person6.render(),
  ];
peopleArr.forEach()
  // You can now use the `peopleArr` to access the rendered content of each person.
  


