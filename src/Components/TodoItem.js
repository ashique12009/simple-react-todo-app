import React from 'react'

function TodoItem(props) {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.detail}</p>
      <button className="btn btn-danger" onClick={()=>props.onDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;