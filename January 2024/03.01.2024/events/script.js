"use strict";

btn.addEventListener("click", (e) =>
  console.log(`${e.target.id} got ${e.type}`)
);

const images = [
  "https://cdn.pixabay.com/photo/2017/11/07/00/07/fantasy-2925250_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072_1280.jpg",
  "https://cdn.pixabay.com/photo/2013/10/27/17/14/snowfall-201496_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/12/12/22/35/snowman-1090261_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/11/28/01/01/jay-548381_1280.jpg",
];

let index = 0;

// myImage = document.getElementById("myImage"); //No Needen becasue ID
myImage.src = images[index];

next.addEventListener("click", () => {
  //   index = (index + 1) % images.length;
  if (index === images.length - 1) {
    index = -1;
  };
  myImage.src = images[++index];
});

previous.addEventListener("click", () => {
  //   index = (index - 1 + images.length) % images.length;
  if (index === 0) {
    index = images.length;
  };
  myImage.src = images[--index];
});
