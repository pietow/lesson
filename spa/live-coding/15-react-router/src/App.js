import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router</h1>
      {/* <Link to="about">About</Link>
      <Link to="contact">Contact</Link> */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
