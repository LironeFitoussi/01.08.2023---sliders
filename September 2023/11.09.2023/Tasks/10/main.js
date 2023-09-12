const elementsWithSameClass = document.querySelectorAll('.my-class');

for (let i = 0; i < elementsWithSameClass.length; i++) {
    console.log(`Element ${i + 1}: ${elementsWithSameClass[i].textContent}`);
}
