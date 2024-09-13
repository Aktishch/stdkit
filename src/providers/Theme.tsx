import React, { createContext, useState, useEffect, useContext } from 'react'
import { useToggle } from '@hooks'

const colors = {
  default: 'color-default',
  purple: 'color-purple',
  yellow: 'color-yellow',
  blue: 'color-blue',
  orange: 'color-orange',
}

type Color = keyof typeof colors

export interface ThemeContextProps {
  themeValue: boolean
  themeToggle: () => void
  color: string
  changeColor(value: string): void
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

export const useTheme = () => useContext(ThemeContext)

export const Theme = ({ children }: React.PropsWithChildren) => {
  const html = document.documentElement as HTMLElement
  const [themeValue, , , themeToggle] = useToggle(
    localStorage.getItem('theme') === 'dark'
  )
  const [color, setColor] = useState<Color>(
    (localStorage.getItem('color') as Color) || colors.default
  )

  const onKeyUpHandler = (event: KeyboardEvent): void => {
    if (event.altKey && event.code === 'Digit5') themeToggle()
  }

  const changeColor = (color: Color): void => {
    setColor(color)
  }

  useEffect((): (() => void) | undefined => {
    document.addEventListener('keyup', onKeyUpHandler as EventListener)

    return (): void =>
      document.removeEventListener('keyup', onKeyUpHandler as EventListener)
  }, [])

  useEffect((): void => {
    html.classList.toggle('dark', themeValue)
    localStorage.setItem('theme', themeValue ? 'dark' : 'default')
  }, [themeValue])

  useEffect((): void => {
    for (const color of Object.entries(colors)) html.classList.remove(color[1])

    html.classList.add(colors[color])
    localStorage.setItem('color', color)
  }, [color])

  return (
    <ThemeContext.Provider
      value={{ themeValue, themeToggle, color, changeColor }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
