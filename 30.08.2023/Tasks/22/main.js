function createColorList() {
    var colorArr = []
    var color1 = prompt("Pick Color 1")
    colorArr.push(color1)
    var color2 = prompt("Pick Color 2")
    colorArr.push(color2)
    var color3 = prompt("Pick Color 3")
    colorArr.push(color3)
    var color4 = prompt("Pick Color 4")
    colorArr.push(color4)

    document.body.innerHTML += "<div id=list-container></div>";
    var myList = document.getElementById("list-container");
    myList.innerHTML = 
        `
        <ol>
            <li>1st Color: ${color1}</li>
            <li>2nd Color: ${color2}</li>
            <li>3rd Color: ${color3}</li>
            <li>4th Color: ${color4}</li>
        <ol>
        `
    ;
}