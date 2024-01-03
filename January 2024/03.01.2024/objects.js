"use strict";

const book = {
  title: "Harry Potter",
  pageNumber: 980,
};

console.log(book);

document.querySelector("#container").innerHTML = `
    <h1>${book.title}</h1>
    <p>${book.pageNumber} Pages</p>
`;

document.getElementById("container").innerHTML += `
    <h1>${book.title}</h1>
    <p>${book.pageNumber} Pages</p>
`;

document.getElementsByTagName("div")[0].innerHTML += `
    <h1>${book.title}</h1>
    <p>${book.pageNumber} Pages</p>
`;

const imaginaryBooks = [
  { title: "The Enchanted Kingdom", pageNumber: 300 },
  { title: "Whispers of the Cosmos", pageNumber: 450 },
  { title: "Chronicles of the Nebula", pageNumber: 600 },
  { title: "Mystical Adventures in Atlantis", pageNumber: 320 },
  { title: "Epic Quests of the Starlight Warriors", pageNumber: 550 },
  { title: "Secrets of the Everlasting Forest", pageNumber: 400 },
  { title: "Songs of the Celestial Sirens", pageNumber: 280 },
  { title: "The Wizard's Spellbook", pageNumber: 200 },
  { title: "Legends of the Moonlit Castle", pageNumber: 480 },
  { title: "Journey to the Cosmic Library", pageNumber: 360 },
  { title: "Realm of the Eternal Frost", pageNumber: 420 },
  { title: "Tales from the Galactic Gardens", pageNumber: 510 },
  { title: "The Labyrinth of Dreams", pageNumber: 320 },
  { title: "Echoes from the Enchanted Mirror", pageNumber: 380 },
  { title: "The Starborn Prophecy", pageNumber: 440 },
  { title: "Wonders of the Celestial Carousel", pageNumber: 270 },
  { title: "Realm of the Flying Dragons", pageNumber: 530 },
  { title: "The Crystal Chronicles", pageNumber: 460 },
  { title: "Whirlwinds of the Cosmic Whispers", pageNumber: 340 },
  { title: "Songs of the Nebula Nymphs", pageNumber: 390 },
];

imaginaryBooks.forEach((book) => {
    document.querySelector("#container").innerHTML += `
      <h1>${book.title}</h1>
      <p>${book.pageNumber} Pages</p>
  `;
});

const container = document.querySelector("#container");
const bookHTML = imaginaryBooks.map(
  (book) => `
    <h1>${book.title}</h1>
    <p>${book.pageNumber} Pages</p>
  `
);

console.log(bookHTML.join(""));
container.innerHTML += bookHTML.join("");

for (let i = 0; i < imaginaryBooks.length; i++) {
  const book = imaginaryBooks[i];
  container.innerHTML += `
    <h1>${book.title}</h1>
    <p>${book.pageNumber} Pages</p>
  `;
}
