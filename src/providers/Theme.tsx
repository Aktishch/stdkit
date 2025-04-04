import { useToggle } from '@hooks'
import { ThemeContextProps, TSXComponent } from '@utils'
import React, { createContext, useContext, useEffect, useState } from 'react'

const colors = {
  default: 'color-default',
  purple: 'color-purple',
  yellow: 'color-yellow',
  blue: 'color-blue',
  orange: 'color-orange',
}

type ThemeColor = keyof typeof colors

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps) as React.Context<ThemeContextProps>

export const useTheme = (): ThemeContextProps => useContext(ThemeContext)

export const Theme = ({ children }: React.PropsWithChildren): TSXComponent => {
  const html = document.documentElement as HTMLElement
  const [themeValue, , , themeToggle] = useToggle(localStorage.getItem('theme') === 'dark')
  const [color, setColor] = useState<ThemeColor>((localStorage.getItem('color') as ThemeColor) || colors.default)

  const onKeyUpHandler = (event: KeyboardEvent): void => {
    if (event.altKey && event.code === 'Digit5') themeToggle()
  }

  const changeColor = (color: ThemeColor): void => {
    setColor(color)
  }

  useEffect((): (() => void) | undefined => {
    document.addEventListener('keyup', onKeyUpHandler as EventListener)

    return (): void => document.removeEventListener('keyup', onKeyUpHandler as EventListener)
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
    <ThemeContext.Provider value={{ themeValue, themeToggle, color, changeColor }}>{children}</ThemeContext.Provider>
  )
}
