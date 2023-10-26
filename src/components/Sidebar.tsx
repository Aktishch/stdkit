import React, { createContext, useState, useCallback } from 'react'

export const SidebarContext = createContext(false)

export const Sidebar = ({ children }) => {
  const [state, setState] = useState(false)

  const createState = useCallback((): void => {
    state ? setState(false) : setState(true)
  })

  return <SidebarContext.Provider value={{ state, createState }}>{children}</SidebarContext.Provider>
}

// export const SidebarToggle = ({ children }) => {
//   const { state, createState } = useContext(SidebarContext)

//   console.log(state)

//   return <div onClick={createState}>{children}</div>
// }
