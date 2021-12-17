import React, { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'

const Location = () => {
  const context = useContext(ChallengeContext)

  return <h1>Location: {context.location}</h1>
}

export default Location