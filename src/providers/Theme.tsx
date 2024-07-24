import React, { createContext, useEffect, useContext } from 'react'
import { useToggle } from '@hooks'

export interface ThemeContextProps {
  themeValue: boolean
  themeToggle: () => void
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

export const useTheme = () => useContext(ThemeContext)

export const Theme = ({ children }: React.PropsWithChildren) => {
  const [themeValue, , , themeToggle] = useToggle(
    localStorage.getItem('theme') === 'dark'
  )

  const onKeyUpHandler = (event: KeyboardEvent): void => {
    if (event.altKey && event.code === 'Digit5') themeToggle()
  }

  useEffect((): (() => void) | undefined => {
    document.addEventListener('keyup', onKeyUpHandler as EventListener)

    return (): void =>
      document.removeEventListener('keyup', onKeyUpHandler as EventListener)
  }, [])

  useEffect((): void => {
    const html = document.documentElement as HTMLElement

    html.classList.toggle('dark', themeValue)
    localStorage.setItem('theme', themeValue ? 'dark' : 'default')
  }, [themeValue])

  return (
    <ThemeContext.Provider value={{ themeValue, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
