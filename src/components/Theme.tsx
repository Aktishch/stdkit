import React, { createContext, useEffect, useRef } from 'react'
import { useToggle } from '../hooks/useToggle'

interface ThemeContextProps {
  themeValue?: boolean
  themeToggle?: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const Theme = ({ children }: React.PropsWithChildren): React.JSX.Element => {
  // const status: boolean = localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark' ? true : false
  const { value, on, toggle } = useToggle({ status: false })
  const flag = useRef<boolean>(false)

  // useEffect((): void => {
  //   if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark') off()
  // }, [])

  useEffect((): void => {
    // if (flag.current === false) {
    //   if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark') on()
    // } else {
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
    // }

    // flag.current = true

    // if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark') on()
  }, [value])

  return <ThemeContext.Provider value={{ themeValue: value, themeToggle: toggle }}>{children}</ThemeContext.Provider>
}
