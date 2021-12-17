import React, { createContext, useState } from 'react'

export const ChallengeContext = createContext()

export const ChallengeProvider = ({ children }) => {
  const [ name, setName ] = useState("Default Name")
  const [ location, setLocation ] = useState("Default Location")

  return (
    <ChallengeContext.Provider
      value={{
        name,
        setName,
        location,
        setLocation
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}