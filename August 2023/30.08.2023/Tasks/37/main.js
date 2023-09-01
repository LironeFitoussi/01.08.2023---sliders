var computersArr = [];

function getComputerByUser() {
    var count = +prompt("Pick a Number of Computers");

    for (let i = 0; i < count; i++) {
        computersArr.push (
            {
                company: prompt("Choose Company"),
                model: prompt("Choose Model"),
                weight: +prompt("Type Weight"),
                inStock: confirm("in Stock? Click OK for 'yes' or Cancel for 'no'")
            }
        )        
    }  

    printComputers()
    
    console.log(computersArr);
}

function printComputers() {
    for (let i = 0; i < computersArr.length; i++) {
        var computer = computersArr[i]
        if (computer.inStock == true && computer.weight > 2 )
        document.getElementById("mainDiv").innerHTML +=
        `
            <h1>Company: ${computer.company}</h1>
            <h2>Model: ${computer.model}</h2>
            <p>Weight: ${computer.weight} KG <p>
            <span>is in Stock?: ${computer.inStock}</span>
        `
    }
}