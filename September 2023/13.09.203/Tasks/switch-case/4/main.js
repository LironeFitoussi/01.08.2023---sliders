const form = document.getElementById("textForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const text = textInput.value;
      const color = colorInput.value;
      const sizeFromUser = sizeInput.value;
      let size;
      switch (sizeFromUser) {
        case "big":
            size = "70px"
            break;
        case "medium":
            size = "50px"
            break;
        case "small":
            size = "30px"
            break;
      
        default:
            break;
      }
      
      const styledText = `<div style="color: ${color}; font-size: ${size};">${text}</div>`;

      document.getElementById("output").innerHTML += styledText;
    });