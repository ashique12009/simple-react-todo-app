import React from 'react';
import TodoItem from '../Components/TodoItem';

const Todos = (props) => {
  return (
    <div className="container mt-3">
      <h3>Todo List</h3>
      {props.todos.length > 0 ?
        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })
      : "No Todos to display" }
    </div>
  );
}

export default Todos;