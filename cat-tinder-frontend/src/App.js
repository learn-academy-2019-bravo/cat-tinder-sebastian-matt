import React, { Component } from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'
import Routes from './Routes'


export default class App extends Component {
  render(){
    return (
      <div>
        <HashRouter>
          <Routes />
        </HashRouter>
      </div>
    );
  }
}

