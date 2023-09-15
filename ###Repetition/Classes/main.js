console.log("test");
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    calculateArea() {
      return this.width * this.height;
    }
  }

const rectangle1 = new Rectangle(5, 10);
const rectangle2 = new Rectangle(3, 7);

console.log(`Area of rectangle1: ${rectangle1.calculateArea()}`); // Output: Area of rectangle1: 50
console.log(`Area of rectangle2: ${rectangle2.calculateArea()}`); // Output: Area of rectangle2: 21

