// T1
// var spanElem = document.getElementById("firstParagraph")
// console.log(spanElem.innerText);

// T2
// var h1Elem = document.getElementById("myH1")
// h1Elem.innerText = "Hello World"

// T3
// console.log("----Task 3----");

// var textElem1 = document.getElementById("txt1");
// console.log(textElem1.innerText);

// var textElem2 = document.getElementById("txt2");
// console.log(textElem2.innerText);

// var textElem3 = document.getElementById("txt3");
// console.log(textElem3.innerText);

// var textElem4 = document.getElementById("txt4");
// console.log(textElem4.innerText);

// T4
// console.log("----Task 4----");

// var anyText = document.getElementsByClassName("anyText")
// for (let i = 0; i < anyText.length; i++) {
//     console.log(anyText[i].innerText);
// } 

// T5
// console.log("----Task 5----");

// console.log(anyText[1]);

// T6
// console.log("----Task 6----");
// console.log(anyText[3].innerText);

// T7
// console.log("----Task 7----");
// var textElems = document.getElementsByTagName("p");
// for (var i = 0; i < textElems.length; i++) {
//     console.log(textElems[i].innerText);    
// }

// T8
// console.log("----Task 8----");
// var nameHeader = document.getElementsByTagName("h2");
// console.log(nameHeader[0].innerText);
// function changeInnerText() {
//     userInput = prompt("Type Your Name");
//     nameHeader[0].innerText = userInput;
// }
// changeInnerText();
// console.log(nameHeader[0].innerText);

// T9 ver.1
// console.log("----Task 9----");
// function getUserColor1() {
//     userColor = prompt("Pick A Color:");
//     userNumber = +prompt("Number Times To Print");

//     for (let i = 0; i < userNumber; i++) {
//         document.writeln("<span>" + userColor + "</span>")
//     }
// }

// getUserColor1()


// T9 ver.2
// console.log("----Task 9.2----");

// var mySpan = document.getElementsByTagName("span");
// console.log(mySpan[0]);
// function getUserColor2() {
//     userColor = prompt("Pick A Color:");
//     userNumber = +prompt("Number Times To Print");
//     for (let i = 0; i < userNumber; i++) {
//         mySpan[0].innerText += " " + userColor
//     }
// } 

// getUserColor2()

// T10
// console.log("----Task 10----");
// function userCreateTag() {
//     userTag = prompt("Pick a Tag To Create")
//     userContent = prompt("Whats inside the Tag?")
//     document.writeln("<" + userTag + ">" + userContent + "</" + userTag + ">");
// }

// userCreateTag()

// T11
// var customInput = document.getElementsByTagName("input")
// function customUserInput() {
//     var userInputType = prompt("Please Choose Input Type")
//     customInput[0].type = userInputType;
// }

// customUserInput()

// T12
// function changeElemByClass(name, text) {
//     var myClass = document.getElementsByClassName(name);
//     for (var i = 0; i < myClass.length; i++) {
//         myClass[i].innerHTML = text
//     }
// }
// changeElemByClass("myClass", "Fistuk")

// T13
// function insertSpanToParagraph(text) {
//     var docParagraph = document.getElementsByTagName("p");
//     for (let i = 0; i < docParagraph.length; i++) {
//         docParagraph[i].innerHTML = 
//         `
//         <span>${text}</span>
//         `        
//     }
// }

// insertspanToParagraph("Lirone")

// T14
// function userFucn() {
//     var userFrstName = prompt("Type Your First Name");
//     var userLstName = prompt("Type Your Last Name");
//     var userAge = +prompt("Type Here Your Age");

//     var userData = document.getElementById("myDiv")
//     userData.innerHTML += 
//         `
//         <p>First Name: ${userFrstName}</p>
//         <p>Last Name: ${userLstName}</p>
//         <p>Age: ${userAge}</p>
//         `
//     ;

//     if (userAge < 18) {
//         userData.innerHTML +=
//             `
//                 <label>You're Under 18 :(</label>
//                 <br>
//                 <input type="text">    
//             `
//     }
    
// }
// userFucn()

// T15
// function creatMovieCard() {
//     var movie = {}
//     movie.name = prompt("Add Movie Name");
//     movie.views = prompt("Add Number of Views");
//     movie.year = prompt("Add Release Date");
//     movie.pic = prompt("Add a Poster Link");

//     document.body.innerHTML = "<div id=movie-card></div>"
//     var myMovie = document.getElementById("movie-card")
//     console.log(myMovie);
//     myMovie.innerHTML += 
//         `
//         <h1>Movie Name: ${movie.name}</h1>
//         <p>Views: ${movie.views}</p>
//         <span>Release Date: ${movie.year} </span>
//         <br>
//         <img src="${movie.pic}" alt="movie-poster">
//         `
//     ;

//     myMovie.style = 
//         `
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             border-radius: 3vh;
//             padding: 3vh;
//             width: fit-content;
//             background-color: rgb(46 118 212);;
//         `
//     ;

//     var myImage = document.getElementsByTagName("img");
//     console.log(myImage[0]);
//     myImage[0].style = 
//         `
//             width: 15vw;
//         `
//     ;
// }
// creatMovieCard()

// T16
// var employee = {};

// employee.firstName = prompt("Please enter the employee's first name:");
// employee.lastName = prompt("Please enter the employee's last name:");
// employee.email = prompt("Please enter the employee's email address:");
// employee.department = prompt("Please enter the employee's department:");

// var employeeInfoHTML = `
//     <div id="employee-info">
//         <h1>New Employee</h1>
//         <p><strong>First Name:</strong> ${employee.firstName}</p>
//         <p><strong>Last Name:</strong> ${employee.lastName}</p>
//         <p><strong>E-Mail:</strong> ${employee.email}</p>
//         <p><strong>Department:</strong> ${employee.department}</p>
//     </div>
// `;

// document.body.innerHTML = employeeInfoHTML;

// // T17
// function createNewBuildings() {
//     var numOfBuildings = +(prompt("How many buildings to add?"));
    
//     for (var i = 0; i < numOfBuildings; i++) {
//         var newStore = {};

//         newStore.contractor = prompt("Enter contractor's name:");
//         newStore.companyName = prompt("Enter company name:");
//         newStore.numFloors = +(prompt("Enter number of floors:"));
//         newStore.numApartmentsPerFloor = +(prompt("Enter number of apartments per floor:"));

//         var newBuildingHTML = `
//             <div class="myBuilding">
//                 <h1>New Building</h1>
//                 <p><strong>Contractor: </strong> ${newStore.contractor}</p>
//                 <p><strong>Company Name: </strong> ${newStore.companyName}</p>
//                 <p><strong>Num Of Floors: </strong> ${newStore.numFloors}</p>
//                 <p><strong>Apartments Per Floor: </strong> ${newStore.numApartmentsPerFloor}</p>
//             </div>
//         `;
        
//         document.body.innerHTML += newBuildingHTML;
//     }
// }

// createNewBuildings();

// T18
// function createNewStores() {
//         var numOfStores = +(prompt("How many Stores to add?"));
//         var storesArr = [];
//         for (var i = 0; i < numOfStores; i++) {
//             var newStore = {};
    
//             newStore.storeName = prompt("Enter Store's name:");
//             newStore.address = prompt("Enter Store's address:");
//             newStore.numOfDepartments = +(prompt("Enter number of departements:"));
//             newStore.numOfWorkers = +(prompt("Enter number of workers:"));
    
//             storesArr.push(newStore)
//             console.log(storesArr);

//             if (newStore.numOfWorkers > 10) {
//                 var newStoreHTML = `
//                 <div class="myStore">
//                     <h1>New Store</h1>
//                     <p><strong>Store's address: </strong> ${newStore.storeName}</p>
//                     <p><strong>Store's address: </strong> ${newStore.address}</p>
//                     <p><strong>Num Of Departements: </strong> ${newStore.numOfDepartments}</p>
//                     <p><strong>Num Of workers: </strong> ${newStore.numOfWorkers}</p>
//                 </div>
//             `;
            
//             document.body.innerHTML += newStoreHTML;
//             }
            
//         }
//     }
    
//     createNewStores()

// T19
// function numOfElementsCreated() {
//     return document.getElementsByClassName("myBuilding").length
// }

// numOfElementsCreated()


// T20
function addContac() {
    var numOfContacts = +prompt("Choose number of Contacts to add: ")
    var contactsArr = [];
    for (let i = 0; i < numOfContacts; i++) {
        var newContact = {};
        newContact.name = prompt("Add Contact's Name")
        newContact.comapny = prompt("Add Contact's Copmpany")
        newContact.phone = prompt("Add Contact's Phone")
        newContact.mail = prompt("Add Contact's Mail")
        contactsArr.push(newContact)

        var contactNameHTML = `<li>Name: ${newContact.name} </li>`
        document.getElementById("myList").innerHTML += contactNameHTML
    }


    return contactsArr
}


// T22
// function createContryList() {
//     document.body.innerHTML = "<h1>Country List</h1><ul id=contries></ul>"
//     var myList = document.getElementById("contries")
//     console.log(myList);
//     for (var i = 0; i < 5; i++) {
//         var userCountry = prompt("Add Country");
//         myList.innerHTML += 
//             `<li>${userCountry}</li>`
//     }
// }

// createContryList()

// T23
// function createProffesorsBook() {
//     var proffesor = {};

//     proffesor.fullName = prompt("Type Proffesors Name");
//     proffesor.mail = prompt("Type proffesors E-Mail");
//     proffesor.topic = prompt("Type proffesors Topic");

//     document.body.innerHTML = 
//     `<table>
//         <theader>
//             <th>Full Name</th>
//             <th>E-Mail</th>
//             <th>Topic</th>
//         </theader>
//         <tbody>
//             <tr>
//                 <td>${proffesor.fullName}</td>
//                 <td>${proffesor.mail}</td>
//                 <td>${proffesor.topic}</td>
//             </tr>
//         </tbody>
//     </Table>`
// }

// T24

// var companysArray = [
//     {companyName: "Apple", city:"Tizinaby", numberOfEmployees: 53, recruiting: true},
//     {companyName: "Wix", city:"Tizinaby", numberOfEmployees: 400, recruiting: false},
//     {companyName: "Microsoft", city:"Tizinaby", numberOfEmployees: 90, recruiting: true},
//     {companyName: "IITC", city:"Ramat-Gan", numberOfEmployees: 15, recruiting: false}
// ]


// var companiesData = document.getElementById("myCompanies");

// for (let i = 0; i < companysArray.length; i++) {
//     companiesData.innerHTML += 
//         `
//         <tr>
//             <td>${companysArray[i].companyName}</td>
//             <td>${companysArray[i].city}</td>
//             <td>${companysArray[i].numberOfEmployees}</td>
//             <td>${companysArray[i].recruiting}</td>
//         </tr>
//         ` 
// }

// T25
// var myBody = document.getElementsByTagName("body");
// myBody[0].style = 
//     `
//         display: flex;
//         height: 100vh;
//         justify-content: center;
//         align-items: center;
//     `

// var myTable = document.getElementsByTagName("table");
// myTable[0].style = 
//     `
//         background-color: rgb(85, 115, 255);
//         padding: 2%;
//         border: solid 1px;
//         border-radius: 2vh
//     `

// var myTr = document.getElementsByTagName("tr");
// for (let i = 0; i < myTr.length; i++) {
//     myTr[i].style = 
//         `
//             background-color: #fff;
//             padding: 2%;
//             border: solid 1px;
//             border-radius: 2vh
//         `    
// }

// var myTd = document.getElementsByTagName("td");
// console.log(myTd);
// for (let i = 0; i < myTd.length; i++) {
//     myTd[i].style = 
//         `
//             border-radius: 1vw;
//         `
// }












