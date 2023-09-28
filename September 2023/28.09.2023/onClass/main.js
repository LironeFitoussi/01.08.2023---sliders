let booksArr = [
    {
        "name": "Harry Potter", 
        "author": "J.K. Rowling",
        "pages": 456
    },
    {
        "name": "The Hobbit", 
        "author": "Tolkien",
        "pages": 566
    },
    {
        "name": "Winnie the Pooh", 
        "author": "Walt Disney",
        "pages": 3463
    }
];

const localVal = localStorage.getItem("booksArr")
console.log(localVal);
console.log(JSON.parse(localVal));

if (localVal != null) {
    booksArr = JSON.parse(localVal)
}

document.getElementById("bookForm").addEventListener("submit", (e) => {
    e.preventDefault(); 
    addBook();
    const inputsArr = document.querySelectorAll("input")
    inputsArr.forEach((e) =>  {
        e.value = ""
    }) 
});


const addBook = () => {
    const nameInput = document.getElementById("userNameInput")
    const authorInput = document.getElementById("userAuthorInput")
    const pagesInput = document.getElementById("userPagesInput")
    const newBook = {
        "name": nameInput.value,
        "author": authorInput.value,
        "pages": pagesInput.value
    }
    booksArr.push(newBook)
    console.log(booksArr);
    localStorage.setItem("booksArr", JSON.stringify(booksArr))
}



