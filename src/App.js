import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
