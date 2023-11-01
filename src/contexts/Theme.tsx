import React, { createContext, useEffect } from 'react'
import { useToggle } from '../hooks/useToggle'

interface ThemeContextProps {
  themeValue?: boolean
  themeToggle?: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const Theme = ({ children }: React.PropsWithChildren): React.JSX.Element => {
  const { value, toggle } = useToggle({
    status: localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark' ? true : false,
  })

  const toggleKeyUp = (event: KeyboardEvent): void => {
    if (event.altKey && event.code === 'Digit5') toggle()
  }

  useEffect((): (() => void) | undefined => {
    document.addEventListener('keyup', toggleKeyUp as EventListener)

    return (): void => document.removeEventListener('keyup', toggleKeyUp as EventListener)
  }, [])

  useEffect((): void => {
    const html = document.documentElement as HTMLElement

    switch (value) {
    case true: {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      break
    }

    case false: {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'default')
      break
    }
    }
  }, [value])

  return <ThemeContext.Provider value={{ themeValue: value, themeToggle: toggle }}>{children}</ThemeContext.Provider>
}
