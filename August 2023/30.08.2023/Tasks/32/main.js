var carsArray = [];
for (var i = 0; i < 4; i++) {
  var newCar = {
    carCompany: prompt("Type Car Company:"),
    carColor: prompt("Type Car Color:"),
    cubicCentimeter: +prompt("Type Car cc.:"),
    carYear: +prompt("Type Car Construction Year:"),
  };

  carsArray.push(newCar);
}

console.log(carsArray);

for (let i = 0; i < carsArray.length; i++) {
  carsArray[i];
  myTbody.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${carsArray[i].carCompany}</td>
            <td>${carsArray[i].carColor}</td>
            <td>${carsArray[i].cubicCentimeter}</td>
            <td>${carsArray[i].carYear}</td>
        </tr>
    `;
}
