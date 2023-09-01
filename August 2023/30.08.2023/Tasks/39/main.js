furnitureArr = [];

function getFurniture(count) {
    for (let i = 0; i < count; i++) {
        furnitureArr.push({
            name: prompt("Type Furniture Name"),
            brand: prompt("Brand"),
            storesArr: [
            prompt("Add first Store"),
            prompt("Add second Store"),
            prompt("Add third Store"),
            prompt("Add fourth Store")
            ],
            price: +prompt("Price:")
        });
    }  

    printFurnitures()
}

function printFurnitures() {
    for (let i = 0; i < furnitureArr.length; i++) {
        var furniture = furnitureArr[i];
        furnDiv.innerHTML +=`
            <h1>${furniture.name}</h1>
            <p>Available at</p>
            <ul></ul>
        `     
        for (let i = 0; i < furniture.storesArr.length; i++) {
            document.getElementsByTagName("ul")[0].innerHTML += `
                <li>${furniture.storesArr[i]}</li>            
            `
        }  
    }
}