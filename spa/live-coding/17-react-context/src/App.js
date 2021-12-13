import React, { useState } from 'react';
import UserContext from './components/UserContext';
import Hello1 from './components/Hello1';
import './App.css';


function App() {
  const [user, setUser] = useState('Aaron');

  return (
    <div className="container">
      <h1>Hello, useContext!</h1>
      <UserContext.Provider value={user}>
        <Hello1 />
      </UserContext.Provider>
    </div>
  );
}

export default App;
