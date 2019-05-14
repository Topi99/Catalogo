import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './components/routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
