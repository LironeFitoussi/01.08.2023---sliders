console.log("test");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const allPosts = data;
    console.log(allPosts);
    allPosts.forEach((index) => {
      const newContent = `
                <h1>${index.title}</h1>
                <p>${index.body}<p>
            `;
      const newDiv = document.createElement("div");
      newDiv.innerHTML = newContent;
      document.body.appendChild(newDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

  fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const allPosts = data;
    console.log(allPosts);
    allPosts.forEach((index) => {
      const newContent = `
                <h1>${index.name}</h1>
                <h2>${index.id}: ${index.email}</h2>
                <p>${index.body}<p>
            `;
      const newDiv = document.createElement("div");
      newDiv.innerHTML = newContent;
      document.body.appendChild(newDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
