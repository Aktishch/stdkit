import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Picture } from '../components/Picture'
// import { Accordion } from '../components/Accordion'
import { nav } from '../data/nav'

export const Header = () => {
  return (
    <Container
      Tag="header"
      classes="flex items-center justify-between gap-5 fixed z-3 top-0 left-0 right-0 bg-black py-4 duration-3"
    >
      <>
        <Link className="btn btn-white w-36" to="/">
          <Picture webp={true} src="img/pictures/logo" format="png" classes="w-full"></Picture>
        </Link>
        <nav className="hidden lg:flex items-center justify-between gap-4 w-full max-w-[800px] ml-auto">
          {nav.pages.map((item) => (
            <Link
              className="btn btn-second hover:underline underline-offset-4 text-14 font-normal uppercase p-1"
              to={item.to}
              key={item.id}
            >
              {item.text}
            </Link>
          ))}
        </nav>
        {/* <div className="text-white">
        <Accordion>title</Accordion>
      </div>
      <div className="text-white">
        <Accordion>title2</Accordion>
      </div> */}
        <Button color="second" size={null} variant={null} classes="lg:hidden text-48">
          <Icon id="burger" />
        </Button>
      </>
    </Container>
  )
}
