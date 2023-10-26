import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { scrolledPage } from '../functions/scrolled-page'
import { Accordion, AccordionToggle, AccordionContent } from '../components/Accordion'
import { SidebarContext } from '../components/Sidebar'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Picture } from '../components/Picture'
import { nav } from '../data/nav'

export const Header = () => {
  const [top, setTop] = useState('0px')
  const header = useRef()
  const prevOffsetTop = useRef(scrolledPage().top)
  const { createState } = useContext(SidebarContext)

  useEffect((): (() => void) | undefined => {
    const scrollHeader = (): void => {
      const currentOffsetTop: number = scrolledPage().top
      const headerHeight: number = header.current.offsetHeight

      prevOffsetTop.current > currentOffsetTop ? setTop('0px') : setTop(`-${headerHeight}px`)

      prevOffsetTop.current = currentOffsetTop
    }

    document.addEventListener('scroll', scrollHeader as EventListener)

    return () => document.removeEventListener('scroll', scrollHeader as EventListener)
  }, [])

  return (
    <header
      className="container flex items-center justify-between gap-5 fixed z-3 top-0 left-0 right-0 bg-black py-4 duration-3"
      style={{ transform: `translateY(${top})` }}
      ref={header}
    >
      <Link className="btn btn-white w-36" to="/">
        <Picture webp={true} src="img/pictures/logo" format="png" className="w-full"></Picture>
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
        <Accordion className="relative" scroll={true}>
          <AccordionToggle className="btn btn-second hover:underline underline-offset-4 text-14 font-normal uppercase p-1">
            Navigation
            <Icon className="text-12 ml-2 ease-linear duration-3" id="arrow-right" />
          </AccordionToggle>
          <AccordionContent className="absolute top-16 right-0 bg-white rounded-2 shadow-md w-full">
            <div className="flex flex-col gap-4 p-4">
              {nav.blocks.map((item) => (
                <Button
                  Tag="a"
                  color="gray"
                  size={null}
                  variant={null}
                  className="hover:underline underline-offset-4 text-14"
                  href={item.href}
                  key={item.id}
                >
                  {item.text}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </Accordion>
      </nav>
      <Button color="second" size={null} variant={null} className="lg:hidden text-48" onClick={createState}>
        <Icon id="burger" />
      </Button>
    </header>
  )
}
