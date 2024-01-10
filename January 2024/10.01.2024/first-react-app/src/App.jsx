// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Employee from './components/Employee';
import Counter from './components/Counter';
import { personsArray } from './persones.js';

function App() {
  const name = 'Moshe';
  const age = 45;
  const todo = {
    title: "harry potter",
    author: 'J. K. Rollings',
  }

  return (
    <div>
      <Counter/>    

      <h1>Hello {name}</h1>
      <h1>Age {age}</h1>
      <img src="https://cdn.pixabay.com/photo/2023/10/05/16/23/bird-8296358_1280.jpg" alt="bird" />
      <p>aegfsdfbgsdfgzsefgd</p>
      <h1>{todo.title}</h1>
      <p>{todo.author}</p>
        {personsArray.map((person) => 
          <Employee {...person} /> 
        )}  
    </div>
  )
};

export default App
