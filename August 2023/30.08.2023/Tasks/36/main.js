function createChildren() {
  var numChildren = +prompt("How many children to add?");
  var childrenArray = [];

  for (var i = 0; i < numChildren; i++) {
    var newChild = {
      fullName: prompt("Enter the child's full name:"),
      age: +prompt("Enter the child's age:"),
      inKindergarten: confirm(
        "Is the child in kindergarten? Click OK for 'yes' or Cancel for 'no'"
      ),
    };

    childrenArray.push(newChild);
  }

  for (var i = 0; i < childrenArray.length; i++) {
    var child = childrenArray[i];
    if (child.age >= 4) {
      childrenDiv.innerHTML += `
                        <p>
                            Full Name: ${child.fullName}<br>
                            Age: ${child.age}<br>
                            In Kindergarten: ${
                              child.inKindergarten ? "Yes" : "No"
                            }
                        </p>
                    `;
    }
  }
}
