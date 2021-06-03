import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Todo App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" activeClassName="active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" activeClassName="active">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/todo" className="nav-link" activeClassName="active">Todo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;