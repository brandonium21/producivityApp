import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './LoginForm.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
        <LoginForm/>
    );
  }
};

export default App;
