var appartementsArr = [];

function getAppartement(count) {
  for (let i = 0; i < count; i++) {
    appartementsArr.push({
      address: prompt("Add Appartement Address"),
      rentPrice: +prompt("Rent Price:"),
      buyPrice: +prompt("Buy Price:"),
      intrestedArr: [
        prompt("Add first intrested person"),
        prompt("Add second intrested person"),
        prompt("Add third intrested person"),
        prompt("Add fourth intrested person"),
      ],
      realEstate: confirm(
        "in RealEstate? Click OK for 'yes' or Cancel for 'no'"
      ),
    });
  }

  printAppartement();
}

function printAppartement() {
  for (let i = 0; i < appartementsArr.length; i++) {
    var appartement = appartementsArr[i];
    if (!appartement.realEstate) {
      myAppartement.innerHTML += `
            <h1>${appartement.address}</h1>
            <p>Who's Interested?</p>
            <ul id="ul_${i}"></ul>
            `;

      var ulElement = document.getElementById(`ul_${i}`);

      for (let j = 0; j < appartement.intrestedArr.length; j++) {
        ulElement.innerHTML += `
                    <li>${appartement.intrestedArr[j]}</li>
                `;
      }
    }
  }
}
