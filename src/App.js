import React from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
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
                <li><Link to='/tipos/Libro'>Libros</Link></li>
                <li><Link to='/tipos/Catalogo'>Catálogos</Link></li>
                <li><Link to='/tipos/Revista'>Revistas</Link></li>
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
