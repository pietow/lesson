import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [ name, setName ] = useState("Default Name")
  const [ age, setAge ] = useState(0)
  
  return (
    <main>
      <h1>Update Data from an Input</h1>
      <p>Display Name: {name}</p>
      <p>Display Age: {age}</p>

      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event => setName(event.target.value))}
        />
      </label>

      <label htmlFor="age">
        Name:
        <input
          type="number"
          id="age"
          value={age}
          onChange={(event => setAge(event.target.value))}
        />
      </label>
    </main>
  )
}

export default App;
