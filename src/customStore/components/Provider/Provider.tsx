import React from 'react'
import { StoreContext } from '../../contexts/StoreContext'

const Provider = ({ store, children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export { Provider }
