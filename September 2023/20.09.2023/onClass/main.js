Book.prototype = {
    render: function () {
        return `
            <div class="book-item">
                <h1>${this.title}</h1>
                <p>Author: ${this.author}</p>
                <p>Category: ${this.category}</p>
                <p>Number of Pages: ${this.pages}<p>
                <img src="${this.image}"
            </div>
        `
    }
}


function Book(title, category, author, pages, image){
    this.title = title;
    this.category = category;
    this.author = author;
    this.pages = pages;
    this.image = image;
}

const book1 = new Book("Harry Potter", "Fantasy", "J.K. Rollings", 486, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFKRzqIPBTYkse7NKIPTjw0ggQB02c636StmC1mONyQwec4x1")
const book2 = new Book("The Hobbit", "Novel", "John Ronald Reuel Tolkien", 304, "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/The_Hobbit_trilogy_dvd_cover.jpg/220px-The_Hobbit_trilogy_dvd_cover.jpg")
const book3 = new Book("Diary of a Wimpy Kid", "Humor", "Jeff Kinney", 221, "https://wimpykid.com/wp-content/uploads/2021/10/1-300x500.png")

const booksInSale = [book1, book2, book3]
const topSelling = [book1, book2, book3]
console.table(booksInSale[0]);


booksInSale.forEach((item) => {
    inSale.innerHTML += item.render()
});

console.table(booksInSale);

