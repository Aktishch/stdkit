import React, { createContext } from 'react'
import { useToggle } from '../hooks/useToggle'

interface SidebarContextProps {
  sidebarValue?: boolean
  sidebarOn?: () => void
  sidebarOff?: () => void
}

export const SidebarContext = createContext<SidebarContextProps>({})

export const Sidebar = ({ children }: React.PropsWithChildren): React.JSX.Element => {
  const { value, on, off } = useToggle({ status: false })

  return (
    <SidebarContext.Provider value={{ sidebarValue: value, sidebarOn: on, sidebarOff: off }}>
      {children}
    </SidebarContext.Provider>
  )
}
