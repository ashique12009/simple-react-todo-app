import React from 'react';
import { useLocation } from 'react-router-dom';
import TodoItem from '../Components/TodoItem';

const Todos = (props) => {
  console.log(props);
  const location = useLocation();
  const { todos } = location.state;

  return (
    <div className="container mt-3">
      <h3>Todo List</h3>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} />
      })}
    </div>
  );
}

export default Todos;