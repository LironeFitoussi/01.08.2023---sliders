// Normal Object implement
const booksArray = []
function Book(title,category,author,coverImg,pages,render){
    this.title=title
    this.category = category
    this.author = author
    this.coverImg = coverImg
    this.pages = pages
    this.render = function (){
        let renderOutPut = 
        `<div class="booksDiv">
        <h1>Title : ${this.title}</h1><br>
        <p>Category : ${this.category}</p><br>
        <span>Author: ${this.author}</span><br>
        <span>pages: ${this.pages}</span><br>
        <span><img src="${this.coverImg}"></span>
        </div>`
        return renderOutPut
    }
}

booksArray.push(new Book("To Kill a Mockingbird","Fiction","Harper Lee","https://upload.wikimedia.org/wikipedia/he/b/b7/Al_tiga_bazamir_kricha.jpg",281))
booksArray.push(new Book("The Great Gatsby","Fiction","F.Scott Fitzgerald","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/800px-The_Great_Gatsby_Cover_1925_Retouched.jpg",180))
booksArray.push(new Book("Sapiens:A Brief History of Humankind","Non-Fiction","Yuval Noah Harari","https://shorturl.at/lxX27",443))
booksArray.push(new Book("The Hobbit","Fantasy","J.R.R Tolkien","https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",310))


// booksArray.forEach((book)=>{
//     mainDiv.innerHTML += book.render()
// })

mainDiv.innerHTML+= booksArray.map((Book => Book.render())).join(" ")
console.log(booksArray);


// Class object implement

class Product{
    constructor(title,price,image,description,quantity){
        this.title = title
        this.price = price
        this.image = image
        this.description = description
        this.quantity = quantity
    }

    getPrice(){
        return this.price
    }
}

const Prod1 = new Product("","","","",5)


// Constructor is default and the "Functions" are methods
class Animal{
    constructor(name){
        this.name = name
    }
    run(){
        return console.log(`${this.name} is Running`)
    }
    eat(){
        return console.log(`${this.name} is Eatting`)
    }
    sleep(){
        return console.log(`${this.name} is Sleeping`)
    }
}
function testAnimalObj(){
    let animal=new Animal("Dog")
    animal.run()
}


// Extends = Take out the other's content and extend it to my new class
// super is used to declare the old variables and use them into my "merged" class object,
//  re-declared constructor for new arguments, and rest is extention of the old Class object

class Bird extends Animal{
    constructor(name,gender,numOfWings){
        super(name)
        this.gender = gender
        this.numOfWings = numOfWings
    }
    wings(){
        return console.log(`${this.name} has ${this.numOfWings} Wings.`)
    }
}

const bird5 = new Bird("Bolbol","Male",4)

function testBirdObj(){
    bird5.run()
    bird5.eat()
    bird5.sleep()
    bird5.wings()    
}

