import React from 'react';
import TodoItem from '../Components/TodoItem';

const Todos = (props) => {
  return (
    <div className="container mt-3">
      <h3>Todo List</h3>
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
      })}
    </div>
  );
}

export default Todos;