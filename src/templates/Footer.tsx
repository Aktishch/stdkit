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
      className="container flex flex-wrap flex-col md:flex-row items-center justify-between gap-4 bg-black text-second pt-4 pb-10 md:pb-4"
      id="footer"
    >
      <Button as={Link} color="white" size={null} variant={null} className="w-36" to="/">
        <Waved />
        <Picture webp="img/pictures/logo.webp" src="img/pictures/logo.png" className="w-full" />
      </Button>
      <address className="text-center text-16 leading-4">
        ​Рождественская набережная, <br /> 45/1​5 офис; 3 этаж
      </address>
      <Button color="second" size={null} variant={null} className="text-18 w-max p-1">
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
