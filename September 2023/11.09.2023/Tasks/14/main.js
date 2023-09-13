const people = [
    {
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "1990-05-15",
        email: "john@example.com"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        dateOfBirth: "1985-08-22",
        email: "jane@example.com"
    },
    {
        firstName: "Bob",
        lastName: "Johnson",
        dateOfBirth: "1978-03-10",
        email: "bob@example.com"
    },
    {
        firstName: "Alice",
        lastName: "Williams",
        dateOfBirth: "1995-11-03",
        email: "alice@example.com"
    }
];

const tableBody = document.getElementById("tableBody");

for (const person of people) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.dateOfBirth}</td>
        <td>${person.email}</td>
    `;
    tableBody.appendChild(row);
}