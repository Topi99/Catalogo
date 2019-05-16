import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/routes';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <header>
            <nav>
              <ul className="elements">
                <li>Libros</li>
                <li>Catálogos</li>
                <li>Revistas</li>
              </ul>

              <div className="search-box">
                <input className="input" />
                <button className="search">Buscar</button>
              </div>
            </nav>
          </header>
          <Switch>
            <Routes />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
