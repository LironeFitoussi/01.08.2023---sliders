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
        return `item loaded to dom`
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
    #currentSpeed = 0;
    constructor(model, year, brand, price, maxSpeed, image) {
        this.model = model;
        this.year = year;
        this.brand = brand;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.image = image;
    }

    

    set accelerate(speed) {
        if (this._currentSpeed + speed <= this.maxSpeed-1) {
            this._currentSpeed += speed;
            return console.log(`Youre Current Speed is: ${currentSpeed}`);
        } else {
            this._currentSpeed = this._maxSpeed
            return console.log(`Car reached Maximum speed`);
        }
        
    } 

    stop(){
        this._currentSpeed = 0;
        return `${this.model} has Stopped`
    }

    get getModel() {
        return this.model;
    }
    set setModel(model) {
        this.model = model;
    }

    get getYear() {
        return this.year;
    }
    set setYear(year) {
        this._year = year;
    }

    get getBrand() {
        return this.brand;
    }
    set setBrand(brand) {
        this._brand = brand;
    }

    get getPrice() {
        return this.price;
    }
    set setPrice(price) {
        this._price = price;
    }

    get getMaxSpeed() {
        return this.maxSpeed;
    }
    set setMaxSpeed(maxSpeed) {
        this._maxSpeed = maxSpeed;
    }

    get getImage() {
        return this.image;
    }
    set setImage(image) {
        this._image = image;
    }

    get getCurrentSpeed() {
        return this.#currentSpeed;
    } 

    get render() {
        const carContent = `
            <h2>${this.getBrand}</h2>
            <h1>${this.getModel}</h1>
            <span>${this.getYear}</span>
            <p>Price: ${this.getPrice}</p>
            <img class="profile-pic" src="${this.getImage}" alt="${this.model}_pic">
        `;
        const carComp = document.createElement("div");
        carComp.id = "carCard"
        carComp.innerHTML = carContent;
        document.body.appendChild(carComp)
        return `item loaded to dom`
    };
}

const myCar1 = new Car("Camry", 2023, "Toyota", 25000, 120, "https://cars.usnews.com/static/images/Auto/izmo/i94428619/2019_toyota_camry_angularfront.jpg");
const myCar2 = new Car("Model 3", 2017, "Tesla", 350000, 230, "data:image/jpeg;base64,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");

console.log(myCar1.render);
console.log(myCar1.accelerate = 20);
console.log(myCar1.accelerate = 20);
console.log(myCar1.accelerate = 80);

console.log(myCar1.getCurrentSpeed);
console.log(myCar1.getModel);
console.log(myCar1.setYear = 2019);
console.log(myCar1.getYear);
console.log(myCar1.getMaxSpeed);
console.log(myCar1.stop());

const carsArr = [myCar1, myCar2]
console.log(carsArr);
carsArr.forEach(car => car.render)


const inputsCollection = document.getElementsByTagName("input");
document.getElementById("carForm").addEventListener("submit", (e) => {
    e.preventDefault(); 
    const model = document.getElementById("model").value;
    const year = parseInt(document.getElementById("year").value);
    const brand = document.getElementById("brand").value;
    const price = parseFloat(document.getElementById("price").value);
    const maxSpeed = parseInt(document.getElementById("maxSpeed").value);
    const image = document.getElementById("image").value;

    const newCar = new Car(model, year, brand, price, maxSpeed, image);
    carsArr.push(newCar)
    newCar.render
    for (const prop in inputsCollection) {
        if (inputsCollection.hasOwnProperty(prop)) {
            inputsCollection[prop].value = null;
        }
    }
});

