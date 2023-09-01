function createInsectsWithWings() {
    var numInsects = +prompt("How many insects to add?");
    var insectsArray = [];
    for (var i = 0; i < numInsects; i++) {
        var newInsect = {
            commonName: prompt("Enter the insect's common name:"),
            scientificName: prompt("Enter the insect's scientific name:"),
            numLegs: +prompt("Enter the number of legs of the insect:"),
            wings: confirm("Does the insect have wings? Click OK for 'yes' or Cancel for 'no'")
        };
        insectsArray.push(newInsect);
    }

    for (var i = 0; i < insectsArray.length; i++) {
        var insect = insectsArray[i];
        if (insect.wings == true) {
            insectsDiv.innerHTML +=  `
                <h3>
                    Common Name: ${insect.commonName}<br>
                    Scientific Name: ${insect.scientificName}<br>
                    Number of Legs: ${insect.numLegs}<br>
                    Wings: Yes
                </h3>
            `;
        }
    }
}
