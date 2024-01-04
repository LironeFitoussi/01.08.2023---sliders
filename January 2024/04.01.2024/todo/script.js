const titleInput = document.querySelector("#title");
const dueDate = document.querySelector("#due_date");
const addBtn = document.querySelector("#add");
const listContainer = document.querySelector("#listContainer");
const jsonTodos = localStorage.getItem("todos");
// console.log(typeof jsonTodos);
const todos = JSON.parse(jsonTodos) || [];
// render after page load
for (let i = 0; i < todos.length; i++) {
    listContainer.innerHTML += createTodoCard(todos[i]);
};
function createTodoCard(todo) {
    return `<div>
        <h1> ${todo.title} </h1>
        <h1> ${todo.date} </h1>
        </div>`;
}
addBtn.addEventListener("click", () => {
    const todo = {
        title: titleInput.value,
        date: dueDate.value
    }
    todos.push(todo);
    listContainer.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i]);
        listContainer.innerHTML += createTodoCard(todos[i]);
    };
    localStorage.setItem(`todos`, JSON.stringify(todos));
});
// addBtn.addEventListener("click", () => {
//     console.log(titleInput);
//     console.log(titleInput.value);
//     console.log(dueDate.value);
//     const todo = {
//         title: titleInput.value,
//         date: dueDate.value
//     }
//     todos.push(todo);
//     listContainer.innerHTML += `<div>
//         <h1> ${titleInput.value} </h1>
//         <h1> ${dueDate.value} </h1>
//     </div>`;
//     localStorage.setItem(`todos`, JSON.stringify(todos));
// });