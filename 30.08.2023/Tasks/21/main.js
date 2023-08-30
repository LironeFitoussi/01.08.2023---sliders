function addDoctor() {
    var numOfDoc = prompt("Set num of Doctors to Add");
    var docsArray = [];
    for (let i = 0; i < numOfDoc ; i++) {
        var doctorInfo = {};
        doctorInfo.fullName = prompt("Add doc's Name");
        doctorInfo.profession = prompt("Add doc's Profession");
        doctorInfo.phone = prompt("Add doc's Phone");
        doctorInfo.available = prompt("Set doc's Availability");
        doctorInfo.mail = prompt("Add doc's Mail");   
        
        docsArray.push(doctorInfo)
        var myList = document.getElementsByTagName("tbody")
        
        myList[0].innerHTML +=
        `
            <tr>
                <td>${doctorInfo.fullName}</td>
                <td>${doctorInfo.profession}</td>
                <td>${doctorInfo.phone}</td>
                <td>${doctorInfo.available}</td>
                <td>${doctorInfo.mail}</td>
            </tr>
        `

        return docsArray
    }

}
