import { createContext, useState } from 'react'
import logements from '../../data/logements.json'

export const ItemsContext = createContext()

export const ItemsProvider = ({ children }) => {
  const [logementsList, setLogementsList] = useState(logements)

  return (
    <ItemsContext.Provider value={{ logementsList }}>
      {children}
    </ItemsContext.Provider>
  )
}
