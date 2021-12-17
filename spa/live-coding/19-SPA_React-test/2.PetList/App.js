import React, { Fragment } from 'react';
import './App.css';


const people = [
  { 
    name: 'chris',
    pets: [
      { name: 'bella', type: 'dog' },
      { name: 'cocoa', type: 'dog' }
    ]
  },
  { 
    name: 'nick',
    pets: [
      { name: 'hilo', type: 'cat' },
      { name: 'polly', type: 'cat' }
    ]
  }
];



const capitalize = (word) => {
  return word = word[0].toUpperCase() + word.slice(1)
}


const App = () => {
    return (
      <ul>
        {people.map((person, index) => (
            <Fragment>
              <h1>{capitalize(person.name)}'s Pets</h1>
              <ul
                key={"person_"+index}
              >
                {person.pets.map(({name, type}, index) => (
                    <li
                      key={"pet_"+index}
                    >
                      {capitalize(name)} the {type}
                    </li>
                  )
                )}
              </ul>
            </Fragment>
          )
        )}
      </ul>
    )
}

export default App;
