import React, { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'

const Form = () => {
  const context = useContext(ChallengeContext)

  return (
    <fieldset>
      <legend>Modifiers</legend>
      <label htmlFor="name">
        Set Name:
        <input
          type="text"
          id="name"
          onChange={event => context.setName(event.target.value)}
        />
      </label>

      <label htmlFor="location">
        Set Location:
        <input
          type="text"
          id="location"
          onChange={event => context.setLocation(event.target.value)}
        />
      </label>
    </fieldset>
  )
}

export default Form