import React from 'react';
import Form from './components/Form';
import Location from './components/Location';
import Name from './components/Name';
import { ChallengeProvider } from './contexts/ChallengeContext';
import './App.css'


const App = () => {
  
  return (
   <ChallengeProvider>
       <main>
        <Form />
        <Name />
        <Location />
      </main>
    </ChallengeProvider>
  )
}

export default App;