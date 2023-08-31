var productsArray = [];
function getProductsFromUser() {
    var counter = +prompt("How many products do You want?")
    for (let i = 0; i < counter; i++) {    
        productsArray.push(
            {
                title: prompt("Enter a Title"),
                price: prompt("Enter a Price"),
                url: prompt("Enter Image Source")
            }
        )
    }
    printProducts()
}

console.log(productsArray);
function printProducts() {
    for (let i = 0; i < productsArray.length; i++) {
        document.getElementById("divContainer").innerHTML += 
            /*html*/
            `
                <h1>${productsArray[i].title}</h1>
                <h2>${productsArray[i].price}<h2>
                <img src="${productsArray[i].url}">
            `
        ; 
    }
}
