import React from 'react';
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark top-navbar">
        <Link to="/" className="navbar-brand">React Todo App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                to={{
                  pathname: '/',
                }}
                className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link 
                to={{
                  pathname: '/todos',
                }}
                className="nav-link">Todo</Link>
            </li>
            <li className="nav-item">
              <Link 
                to={{
                  pathname: '/addtodos',
                }}
                className="nav-link">Add Todo</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;