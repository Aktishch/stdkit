import React, { createContext } from 'react'
import { useToggle } from '../hooks/useToggle'

interface SidebarContextProps {
  value?: boolean
  on?: () => void
  off?: () => void
}

export const SidebarContext = createContext<SidebarContextProps>({})

export const Sidebar = ({ children }: React.PropsWithChildren): React.JSX.Element => {
  const { value, on, off } = useToggle({ status: false })

  return <SidebarContext.Provider value={{ value, on, off }}>{children}</SidebarContext.Provider>
}
