import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/Theme'
import { Switch } from '../components/Switch'

export const ThemeToggle = (): React.JSX.Element => {
  const { themeValue, themeToggle } = useContext(ThemeContext)

  return (
    <div className="hidden lg:flex items-center justify-center fixed left-5 bottom-5 z-5 bg-white dark:bg-black rounded-4 border border-solid border-gray dark:border-white shadow-md w-max p-4">
      <span className="text-14 mr-2">Темная тема</span>
      <Switch variant="toggle" type="checkbox" checked={themeValue} onChange={themeToggle} />
    </div>
  )
}
