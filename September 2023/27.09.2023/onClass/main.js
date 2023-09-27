console.log("test");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.map((post) => {
//       const newContent = `
//                 <h1>${post.title}</h1>
//                 <p>${post.body}<p>
//             `;
//       const newDiv = document.createElement("div");
//       newDiv.innerHTML = newContent;
//       document.body.appendChild(newDiv);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

//   fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.map((comment) => {
//       const newContent = `
//                 <h1>${comment.name}</h1>
//                 <h2>${comment.id}: ${comment.email}</h2>
//                 <p>${comment.body}<p>
//             `;
//       const newDiv = document.createElement("div");
//       newDiv.innerHTML = newContent;
//       document.body.appendChild(newDiv);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

//   fetch("https://jsonplaceholder.typicode.com/commen")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log( "Error", error );
//   });

document.getElementById("jokeBtn").addEventListener("click", fetchData);
function fetchData() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const newJoke = data.value;
      console.log(newJoke);
      const jokeElement = document.createElement("p");
      jokeElement.textContent = newJoke;
      console.log(jokeElement);
      document.getElementById("myContainer").innerHTML += jokeElement.outerHTML
      document.getElementById("myContainer").innerHTML += `<p>${newJoke}</p>`
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}
