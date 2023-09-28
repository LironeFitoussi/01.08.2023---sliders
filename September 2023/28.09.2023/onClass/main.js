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
//? console.log(localVal);
//? console.log(JSON.parse(localVal));

if (localVal != null) {
    booksArr = JSON.parse(localVal)
}

let printed = false;

document.getElementById("bookForm").addEventListener("submit", (e) => {
    e.preventDefault(); 
    const newBook = {"name": userNameInput.value, "author": userAuthorInput.value, "pages": userPagesInput.value}
    addBook(newBook);
    resetInputs()
});

document.getElementById("resetBooks").addEventListener("click", () => {
    if (confirm("Are You Sure?")) {
        localStorage.removeItem("booksArr")
        alert("Memory has been reseted, page will reload...")
        location.reload()
    }
});

document.getElementById("printBooks").addEventListener("click", () => {
    printToScreen()
});

function addBook(newBook) {
    booksArr.push(newBook)
    console.log(booksArr);
    localStorage.setItem("booksArr", JSON.stringify(booksArr))
    // document.getElementById("mainContainer").innerHTML += `
    //         <div class="bookContainer">
    //             <h1>${newBook.name}</h1>
    //             <h3>Author: ${newBook.author}</h3>
    //             <span>${newBook.pages} pages</span>
    //         </div>
    //     `
}

function resetInputs() {
    const inputsArr = document.querySelectorAll("input")
    inputsArr.forEach((e) =>  {
        e.value = ""
    }) 
}

function printToScreen() {
    document.getElementById("mainContainer").innerHTML = ""
    booksArr.forEach((book) => {
        document.getElementById("mainContainer").innerHTML += `
            <div class="bookContainer">
                <h1>${book.name}</h1>
                <h3>Author: ${book.author}</h3>
                <span>${book.pages} pages</span>
            </div>
        `
    });
}


