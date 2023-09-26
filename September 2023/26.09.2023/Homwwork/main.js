console.log("test");
// Task 1

function Person(firstName, lastName, birthdate, profileImage) {
    let age = 0
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthdate);
    this.profileImage = profileImage;
    this.getFullName = () => this.firstName 
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
};

const person1 = new Person("John", "Miller", "sep 26 1985", "AnuUrls")
console.log(person1);
console.log(person1.getFullName());
console.log(person1.getAge());
console.log(person1.canClub());

