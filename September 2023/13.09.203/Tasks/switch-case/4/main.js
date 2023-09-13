const form = document.getElementById("textForm");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const text = textInput.value;
      const color = colorInput.value;
      const size = sizeInput.value;
      
      const styledText = `<div style="color: ${color}; font-size: ${size}px;">${text}</div>`;

      document.getElementById("output").innerHTML += styledText;
    });