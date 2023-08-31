var studentObject = {}
studentObject.fullName = prompt("Type Student Name:")
studentObject.mail = prompt("Type Student Mail:")
studentObject.finalGrade = +prompt("Type Student Final Grade:")

document.body.innerHTML += 
`
    <table>
        <thead> 
            <th>Student Name</th>
            <th>Student Mail</th>
            <th>Student Grade</th>
        </thead>
        <tbody id=studentsData>
        <tbody>
    </table>
`

document.getElementById("studentsData").innerHTML +=
`
    <tr>
        <td>${studentObject.fullName}</td>
        <td>${studentObject.mail}</td>
        <td>${studentObject.finalGrade}</td>
    </tr>
`

