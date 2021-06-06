import React from 'react';
import logo from '../logo.svg';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Home(props) {
  const history = useHistory();
  const location = useLocation();

  let todos = [];

  if (props.todos !== 'undefined') {
    todos = props.todos;
  }
  else {
    const { todos } = location.state;
  }

  const routeChange = (incomingPath) => { 
    let path = incomingPath; 
    history.push({
      pathname: path,
      state: {
        todos: todos
      }
    });
  }

  return ( 
    <div className="container">
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src={logo} alt="" width="72" height="57"/>
        <h1 className="display-5 fw-bold">React Todo App</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Welcome to React Todo App which is quickly designed and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={()=>routeChange('/todos')}>Todo App</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={()=>routeChange('/about')}>About</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;