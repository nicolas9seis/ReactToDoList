import React from 'react';
import './ToDoList.css'

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };