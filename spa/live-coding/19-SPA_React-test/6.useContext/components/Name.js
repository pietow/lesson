import React, { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'

const Name = () => {
  const context = useContext(ChallengeContext)

  return <h1>Name: {context.name}</h1>
}

export default Name