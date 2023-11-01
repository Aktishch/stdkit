import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { scrolledPage } from '../functions/scrolled-page'
import { SidebarContext } from '../contexts/Sidebar'
import { AccordionContext, Accordion, AccordionToggle, AccordionContent } from '../contexts/Accordion'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Picture } from '../components/Picture'
import { nav } from '../data/nav'

export const Header = (): React.JSX.Element => {
  const [top, setTop] = useState('')
  const prevOffsetTop = useRef(scrolledPage().top) as React.MutableRefObject<number>
  const { sidebarOn } = useContext(SidebarContext)

  const scrollHeader = (): void => {
    const currentOffsetTop: number = scrolledPage().top

    prevOffsetTop.current > currentOffsetTop ? setTop('') : setTop('-translate-y-full')
    prevOffsetTop.current = currentOffsetTop
  }

  useEffect((): (() => void) | undefined => {
    document.addEventListener('scroll', scrollHeader as EventListener)

    return (): void => document.removeEventListener('scroll', scrollHeader as EventListener)
  }, [])

  return (
    <header
      className={`container flex items-center justify-between gap-5 
      sticky z-3 top-0 left-0 right-0 bg-black ${top} py-4 duration-3`}
    >
      <Button as={Link} color="white" size={null} variant={null} className="w-36" to="/">
        <Picture webp="img/pictures/logo.webp" src="img/pictures/logo.png" className="w-full" />
      </Button>
      <nav className="hidden lg:flex items-center justify-between gap-4 w-full max-w-[800px] ml-auto">
        {nav.pages.map((item) => (
          <Button
            as={Link}
            color="second"
            size={null}
            variant={null}
            className="hover:underline underline-offset-4 text-14 font-normal uppercase p-1"
            to={item.to}
            key={item.id}
          >
            {item.text}
          </Button>
        ))}
        <Accordion className="relative" scroll={true}>
          <Button
            as={AccordionToggle}
            color="second"
            size={null}
            variant={null}
            className="hover:underline underline-offset-4 text-14 font-normal uppercase p-1"
          >
            Navigation
            <AccordionContext.Consumer>
              {({ accordionValue }) => (
                <Icon
                  className={`text-12 ml-2 ease-linear duration-3 ${accordionValue ? 'rotate-90' : ''}`}
                  id="arrow-right"
                />
              )}
            </AccordionContext.Consumer>
          </Button>
          <AccordionContent className="absolute top-10 right-0 bg-white rounded-2 shadow-md w-full">
            <div className="flex flex-col gap-4 p-4">
              {nav.blocks.map((item) => (
                <Button
                  as="a"
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
      <Button color="second" size={null} variant={null} className="lg:hidden text-48" onClick={sidebarOn}>
        <Icon id="burger" />
      </Button>
    </header>
  )
}
