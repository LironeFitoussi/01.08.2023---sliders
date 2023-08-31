var computersArr = [];
function getComputerByUser() {
    var count = +prompt("Pick a Number of Computers");
    for (let i = 0; i < count; i++) {
        computersArr.push (
            {
                company: prompt("Choose Company"),
                model: prompt("Choose Model"),
                weight: +prompt("Type Weight"),
                inStock: prompt("in Stock? (yes/no)")
            }
        )        
    }  

    printComputers()
    
    console.log(computersArr);
}

function printComputers() {
    for (let i = 0; i < computersArr.length; i++) {
        if (computersArr[i].inStock == "yes" && computersArr[i].weight > 2 )
        document.getElementById("mainDiv").innerHTML +=
        /*html*/
        `
            <h1>Company: ${computersArr[i].company}</h1>
            <h2>Model: ${computersArr[i].model}</h2>
            <p>Weight: ${computersArr[i].weight} KG <p>
            <span>is in Stock?: ${computersArr[i].inStock}</span>
        `
    }
}