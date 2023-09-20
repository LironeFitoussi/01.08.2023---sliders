const platsArray = [];
const marioArray = [];
const enemyArray = [];

class Basics {
  constructor(width, height, x, y, image) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image = image;
  }
  jump() {
    return (y = +40);
  }
  moveRight() {
    return (x = +10);
  }
  moveLeft() {
    return (x = +10);
  }
}

class Mario extends Basics {
  constructor(width, height, x, y, image, life, speed) {
    super(width, height, x, y, image);
    this.life = life;
    this.speed = speed;
  }
  hitEnemy() {
    enemyArray[0].life = -1;
    if (enemyArray[0].life == 0) {
      enemyArray.shift();
    }
  }
}

class Enemy extends Basics {
  constructor(width, height, x, y, image, damage, life, speed) {
    super(width, height, x, y, image);
    this.damage = damage;
    this.life = life;
    this.speed = speed;
  }
  hitMario() {
    return (marioArray[0].life = -5);
  }
}

const marioTraits = new Mario(
  "5vw",
  "5vh",
  "x = 20",
  "y = 0",
  "mario.jpg",
  "100",
  "10"
);
const enemyTraits = new Enemy(
  "5vw",
  "5vh",
  "x = 40",
  "y = 0",
  "enemy.jpg",
  "10",
  "1",
  "5"
);
const platformTraits = new Basics(
  "2vw",
  "3vh",
  "x = 60",
  "y = 80",
  "platfrom.jpg"
);

marioArray.push(marioTraits);
enemyArray.push(enemyTraits);
platsArray.push(platformTraits);
