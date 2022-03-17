import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { HomePage } from './Components/HomePage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
