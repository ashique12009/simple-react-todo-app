import React from 'react';
import './TodoItem.css';

function TodoItem({todo, onDelete}) {
  return (
    <div className="round-border">
      <h4>{todo.title}</h4>
      <p>{todo.detail}</p>
      <p>Status: {todo.status === true ? "Complete" : "Incomplete"}</p>
      <button className="btn btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  );
}

export default TodoItem;