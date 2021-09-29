//import './App.css';
import React from "react";
import { ToDoCounter } from "./ToDoCounter";

const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Ver MasterChef', completed: false},
  { text: 'Ir a reclamar los condones ', completed: false}
];

function App() {
  return (
    <React.Fragment>
      
      <ToDoCounter/>
      
      {/*<ToDoSearch/>*/}
      <input placeholder="Cebolla"/>

      {/*<ToDoList>
        <ToDoItem/>
      </ToDoList>
      {todos.map(todo => (
        <ToDoItem /> 
      )
      )}
      </ToDoList>
      */}

      {/*<CreateToDoButton/>*/}

      <button>+</button>
    </React.Fragment>
  );
}

export default App;
