import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/Theme'
import { Switch } from '../components/Switch'

export const ThemeToggle = (): React.JSX.Element => {
  const { themeValue, themeToggle } = useContext(ThemeContext)

  return (
    <div className="fixed items-center justify-center hidden p-4 bg-white border border-solid shadow-md lg:flex left-5 bottom-5 z-5 dark:bg-black rounded-4 border-gray dark:border-white w-max">
      <span className="mr-2 text-14">Темная тема</span>
      <Switch variant="toggle" type="checkbox" checked={themeValue} onChange={themeToggle} />
    </div>
  )
}
