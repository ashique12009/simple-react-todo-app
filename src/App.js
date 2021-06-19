import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Todos from './Pages/Todos';
import { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  let [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'First task',
      detail: 'Complete this first task'
    },
    {
      sno: 2,
      title: 'Second task',
      detail: 'Complete this second task'
    },
    {
      sno: 3,
      title: 'Third task',
      detail: 'Complete this third task'
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
    </Router>
  );
}

export default App;