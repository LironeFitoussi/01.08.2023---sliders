const myObject = {
    field1: "Value 1",
    field2: "Value 2",
    field3: "Value 3",
    field4: "Value 4"
};

const outputElement = document.getElementById("output");

let outputHTML = "";

for (const value of Object.values(myObject)) {
    outputHTML += `<p>${value}</p>`;
}

outputElement.innerHTML = outputHTML;
