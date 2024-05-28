import React from 'react'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Waved } from '../components/Waved'

export const Footer = (): React.JSX.Element => {
  const currentYear = (): number => {
    return new Date().getFullYear()
  }

  return (
    <footer className="container flex items-center justify-between gap-3 py-2 mt-auto bg-white border-t border-solid sm:py-4 dark:bg-black border-grey">
      <span className="font-normal text-16 leading-1">© {currentYear()}</span>
      <div className="flex items-center">
        <span className="mr-3 font-normal text-16 leading-1">Разработка:</span>
        <Button
          className="rounded-1"
          as="a"
          color="gray"
          size={null}
          variant={null}
          href="https://stdkit.ru/"
          target={true}
        >
          <Waved variant="dark" />
          <Icon className="w-20 text-black h-7 min-w-20 dark:text-white" id="logo" />
        </Button>
      </div>
    </footer>
  )
}
