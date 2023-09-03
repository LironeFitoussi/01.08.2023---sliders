var imageUrls = [
    "https://cdn.pixabay.com/photo/2017/01/01/19/07/black-forest-1945307_960_720.jpg",
    "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" 
];

var cssFilters = [
    'grayscale(50%)',
    'blur(5px)',
    'brightness(150%)',
    'contrast(200%)',
    'hue-rotate(90deg)'
  ];
  
var x = 0
imageSlider.innerHTML += `
    <img id="imageS" src="${imageUrls[x]}">
`;

function nextImage() {
    x += 1
    if (x > imageUrls.length-1) {x = 0}
    imageS.src = `${imageUrls[x]}`;
}

function prevImage() {
    x -= 1
    if (x < 0) {x = imageUrls.length-1}
    imageS.src = `${imageUrls[x]}`;
}

var y = -1
function nextFilter() {
    y += 1
    if (y > cssFilters.length-1) {y = -1}
    imageS.style = `filter:${cssFilters[y]}`;
}

function prevFilter() {
    y -= 1
    if (y < -1) {y = cssFilters.length-1}
    imageS.style = `filter:${cssFilters[y]}`;  
}

function randomImage() {
    var randomNum = Math.floor(Math.random()*imageUrls.length)
    imageS.src = `${imageUrls[randomNum]}`;    
}

function randomFilter() {
    var randomNum = Math.floor(Math.random()*cssFilters.length)
    imageS.style = `filter:${cssFilters[randomNum]}`
}

