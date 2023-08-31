carsArray = []

var carObject1 = {
    brand: "KIA",
    color: "blue",
    onSale: true
}
carsArray.push(carObject1);


var carObject2 = {
    brand: "Ranault",
    color: "Black",
    onSale: true
}
carsArray.push(carObject2);


var carObject3 = {
    brand: "Citroen",
    color: "Green",
    onSale: false
}
carsArray.push(carObject3);

console.log(carsArray);

document.body.innerHTML += 
    `
        <table>
            <thead>
                <th>Brand</th>
                <th>Color</th>
                <th>On Sale?</th>
            </thead>
            <tbody id="carsTable">
            </tbody>
        </table>
    `
;

var myTable = document.getElementsByTagName("table")
console.log(myTable[0]);
myTable[0].style = 
    `
        background-color: blue;
        border-radius: 2vh;
        padding: 2vh;
        color: #fff
    `
;

var carsPlace = document.getElementById("carsTable");
for (let i = 0; i < carsArray.length; i++) {
    carsPlace.innerHTML += 
    `
        <tr>
            <td>${carsArray[i].brand}</td>
            <td>${carsArray[i].color}</td>
            <td>${carsArray[i].onSale}</td>
        </tr> 
    `
}
