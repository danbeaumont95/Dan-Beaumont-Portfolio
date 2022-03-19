import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { HomePage } from './Components/HomePage';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Contact } from './Components/Contact';
import { Main } from './Components/Main';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
