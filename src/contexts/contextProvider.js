import React, { createContext } from 'react'
import { useReducer } from 'react'
import { stateFilters } from './state'
import * as reducer from '../reducers/filtros'

export const ContextFilters = createContext()

export const ContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer.reducerFilter, stateFilters)

  return <ContextFilters.Provider  value={{state, dispatch}}>{children}</ContextFilters.Provider>
}
