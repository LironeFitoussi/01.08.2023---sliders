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
const person3 = new Person("Alice", "Johnson", "Dec 10 1990", "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRCYTZr0PSn6pKD9KROL6SMP5WgSuJVjGj9Go5pvi2vaCX_GCZC6KYK01W0UO3LhslAvymgP3PM0a-7gnk");
const person4 = new Person("Bob", "Smith", "Jan 5 1980", "https://upload.wikimedia.org/wikipedia/en/2/26/Doctor_Bob_Alcoholics_Anonymous.jpg");
const person5 = new Person("Eva", "Davis", "Mar 20 2000", "https://yt3.googleusercontent.com/IrGSJpEAhtI0pqHnHFNtZav8-UgHSB4Y9dwYM7u__FTWqjF41ChOC8BJHv5eGTDxOOkQRnNv8_c=s900-c-k-c0x00ffffff-no-rj");
const person6 = new Person("Michael", "Wilson", "Jul 15 1975", "https://static.clubs.nfl.com/image/private/t_editorial_landscape_6_desktop/f_auto/cardinals/znbmlnew5mqvk2dkevdm.jpg");

console.log(person1);
console.log(person1.getFullName());
console.log(person1.getAge());
console.log(person1.canClub());
console.log(person1.render());
console.log(person2.render());

const peopleArr = [
    person1,
    person2,
    person3,
    person4,
    person5,
    person6,
];
peopleArr.forEach(person => person.render())
  
// Task 2
class Car {
    constructor(model, year, brand, price, maxSpeed, image) {
        this.model = model;
        this.year = year;
        this.brand = brand;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.image = image;
        this.currentSpeed = 0
    }

    set accelerate(speed) {
        if (this.currentSpeed + speed <= this.maxSpeed) {
            this.currentSpeed += speed
        } else {
            this.currentSpeed = this.maxSpeed
            return console.log(`Car reached Maximum speed`);
        }
        
    } 

}

const myCar = new Car("Camry", 2023, "Toyota", 25000, 120, "car-image.jpg");
console.log(myCar);
console.log(myCar.accelerate = 20);
console.log(myCar.accelerate = 20);
console.log(myCar.accelerate = 20);
console.log(myCar.accelerate = 20);
console.log(myCar.accelerate = 20);
console.log(myCar.accelerate = 10);
console.log(myCar.accelerate = 11);
console.log(myCar.currentSpeed);




