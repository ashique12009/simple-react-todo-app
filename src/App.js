import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Todo from './Pages/Todo';

function App() {
  return (
    <Router>      
      <div className="App container-fluid">
        <Header />
      </div>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/todo" component={Todo}/>
    </Router>
  );
}

export default App;