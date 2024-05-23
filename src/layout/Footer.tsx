import React from 'react'
import { Link } from 'react-router-dom'
import { Fancybox } from '../components/Fancybox'
import { Button } from '../components/Button'
import { Picture } from '../components/Picture'
import { Waved } from '../components/Waved'

export const Footer = (): React.JSX.Element => {
  const currentYear = (): number => {
    return new Date().getFullYear()
  }

  return (
    <footer
      className="container flex flex-col flex-wrap items-center justify-between gap-4 pt-4 pb-10 mt-auto bg-black md:flex-row text-second md:pb-4"
      id="footer"
    >
      <Button as={Link} color="white" size={null} variant={null} className="w-36" to="/">
        <Waved />
        <Picture webp="img/pictures/logo.webp" src="img/pictures/logo.png" className="w-full" />
      </Button>
      <address className="leading-4 text-center text-16">
        ​Рождественская набережная, <br /> 45/1​5 офис; 3 этаж
      </address>
      <Fancybox options={{ dragToClose: false }} className="color-second">
        <a className="text-18 w-max underline-offset-4 hover:underline" data-fancybox href="#dialog-politics">
          Privacy policy
        </a>
      </Fancybox>
      <div className="font-normal text-16">© {currentYear()}</div>
      <div className="flex items-start gap-1 text-18">
        Разработка:
        <a className="underline underline-offset-4 w-max" href="https://stdkit.ru/" target="_blank" rel="noreferrer">
          Студия К.И.Т.
        </a>
      </div>
    </footer>
  )
}
