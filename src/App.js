import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Todos from './Pages/Todos';
import AddTodos from './Pages/AddTodos';
import { useState } from 'react';

function App() {
  const addTodo = (title, detail, status) => {
    let sno = 0;
    if (todos.length > 0) {
      sno = todos[todos.length-1].sno + 1;
    }
    else {
      sno = 1;
    }
    
    const incomingTodo = {
      sno: sno,
      title: title,
      detail: detail,
      status: status
    }
    setTodos([...todos, incomingTodo]);
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  let [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'First task',
      detail: 'Complete this first task',
      status: 0
    },
    {
      sno: 2,
      title: 'Second task',
      detail: 'Complete this second task',
      status: 1
    },
    {
      sno: 3,
      title: 'Third task',
      detail: 'Complete this third task',
      status: 0
    }
  ]);
  
  return (
    <Router>      
      <div className="App container-fluid">
        <Header todos={todos} onDelete={onDelete} />
      </div>
      <Route exact path="/"><Home todos={todos} /></Route>
      <Route path="/about" component={About} />
      <Route path="/todos" component={Todos}><Todos todos={todos} onDelete={onDelete}></Todos></Route>
      <Route path="/addtodos" component={AddTodos}><AddTodos addTodo={addTodo}></AddTodos></Route>
    </Router>
  );
}

export default App;