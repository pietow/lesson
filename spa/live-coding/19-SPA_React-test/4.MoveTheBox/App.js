import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ bottom, setBottom ] = useState(0)

  const moveBoxUp= () => {
    setBottom(bottom + 100)
  }

  return (
    <main>
      <h1>Move the Box!</h1>

      <button
        onClick={moveBoxUp}
      >Move Up</button>

      <div id="box"
         style={{ bottom }}
      ></div>
    </main>
  );
}

export default App;
