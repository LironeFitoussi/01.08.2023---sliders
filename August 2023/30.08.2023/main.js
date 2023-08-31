// document.writeln("<div>Hello World</div>")
// document.write("Hello World")

// var myDivElem1 = document.getElementById("myDiv1");
// myDivElem1.innerText = "Lirone"

var myDivElem2 = document.getElementById("myDiv2");
myDivElem2.innerText = "<p> A Name </p>"

var myDivElem3 = document.getElementById("myDiv3");
myDivElem3.innerHTML = "<p>A Name</p>"

var liClassElemes = document.getElementsByClassName("liClass");
console.log(liClassElemes[2].innerText);

for (let i = 0; i < liClassElemes.length; i++) {
    console.log(liClassElemes[i].innerText);
}