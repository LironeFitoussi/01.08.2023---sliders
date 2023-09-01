function openSearch() {
    document.body.innerHTML += 
    `<input type="text" id="searchInput" placeholder="Enter a name to search..."/>
    <div id="results"></div>
    `
}

var names = [
    "Sophia Johnson",
    "Liam Martinez",
    "Olivia Smith",
    "Noah Williams",
    "Ava Anderson",
    "Ethan Davis",
    "Isabella Taylor",
    "Aiden Jackson",
    "Mia Brown",
    "Elijah Miller"
  ];
  
  var searchInput = document.getElementById("searchInput");
  var resultsDiv = document.getElementById("results");
  
  function handleInput() {
    var searchTerm = searchInput.value.toLowerCase();
    var filteredNames = names.filter(filterNames);
    displayResults(filteredNames);
  }
  
  function filterNames(name) {
    return name.toLowerCase().indexOf(searchInput.value.toLowerCase()) !== -1;
  }
  
  function displayResults(results) {
    resultsDiv.innerHTML = "";
  
    if (results.length === 0) {
      resultsDiv.textContent = "No results found.";
      return;
    }
  
    for (var i = 0; i < results.length; i++) {
      var resultElement = document.createElement("p");
      resultElement.textContent = results[i];
      resultsDiv.appendChild(resultElement);
    }
  }
  
  searchInput.addEventListener("input", handleInput);
  