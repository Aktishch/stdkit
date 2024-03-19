import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Picture } from '../components/Picture'
import { Waved } from '../components/Waved'

export const Footer = (): React.JSX.Element => {
  const currentYear = (): number => {
    return new Date().getFullYear()
  }

  return (
    <footer
      className="container flex flex-col flex-wrap items-center justify-between gap-4 pt-4 pb-10 bg-black md:flex-row text-second md:pb-4 mt-auto"
      id="footer"
    >
      <Button as={Link} color="white" size={null} variant={null} className="w-36" to="/">
        <Waved />
        <Picture webp="img/pictures/logo.webp" src="img/pictures/logo.png" className="w-full" />
      </Button>
      <address className="leading-4 text-center text-16">
        ​Рождественская набережная, <br /> 45/1​5 офис; 3 этаж
      </address>
      <Button color="second" size={null} variant={null} className="p-1 text-18 w-max">
        <Waved />
        Privacy policy
      </Button>
      <div className="font-normal text-16">© {currentYear()}</div>
      <span className="text-18">
        Разработка:
        <a className="underline w-max" href="https://stdkit.ru/" target="_blank" rel="noreferrer">
          Студия К.И.Т.
        </a>
      </span>
    </footer>
  )
}
