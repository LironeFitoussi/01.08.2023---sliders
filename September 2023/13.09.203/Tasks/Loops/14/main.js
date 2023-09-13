console.log("Test");
const people = [
    {
      firstName: "Adam",
      lastName: "Cohen",
      dateOfBirth: "01/01/1990",
      email: "adam@example.com"
    },
    {
      firstName: "Sarah",
      lastName: "Levy",
      dateOfBirth: "15/03/1985",
      email: "sarah@example.com"
    },
    {
      firstName: "Joseph",
      lastName: "Cohen",
      dateOfBirth: "30/07/1995",
      email: "yosef@example.com"
    },
    {
      firstName: "Rachel",
      lastName: "Abramovich",
      dateOfBirth: "10/11/1980",
      email: "rachel@example.com"
    }
  ];

  function printFullTable() {
    placeContainer.innerHTML = `
        <table>
            <thead> 
                <tr id="tableHeader"><tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    `
    
    for (const key in people[0]) {
        document.querySelector("#tableHeader").innerHTML += `
            <th>${key}</th>
        `
    }
    for (const person of people) {
        document.querySelector("tbody").innerHTML += `
            <tr id="human_row_${people.indexOf(person)}"></tr>
        `
        for (const key in person) {
            document.querySelector(`#human_row_${people.indexOf(person)}`).innerHTML += `
                <td>${person[key]}</td>
            `
        }
    }
  }