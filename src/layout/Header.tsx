import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
// import { nav } from '../data/nav'
// import { scrolledPage } from '../functions/scrolled-page'
// import { scrollTo } from '../functions/scroll-to'
// import { SidebarContext } from '../contexts/Sidebar'
import { AccordionContext, Accordion, AccordionToggle, AccordionContent } from '../contexts/Accordion'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Picture } from '../components/Picture'
import { Waved } from '../components/Waved'

export const Header = (): React.JSX.Element => {
  // const [top, setTop] = useState('')
  // const prevOffsetTop = useRef(scrolledPage().top) as React.MutableRefObject<number>
  // const header = useRef<HTMLElement>(null)
  // const { sidebarOn } = useContext(SidebarContext)

  // const onScrollHandler = (): void => {
  //   const headerHeight: number = (header.current as HTMLElement).offsetHeight
  //   const currentOffsetTop: number = scrolledPage().top

  //   if (headerHeight < currentOffsetTop)
  //     prevOffsetTop.current > currentOffsetTop ? setTop('') : setTop('lg:-translate-y-full')

  //   prevOffsetTop.current = currentOffsetTop
  // }

  // useEffect((): (() => void) | undefined => {
  //   document.addEventListener('scroll', onScrollHandler as EventListener)

  //   return (): void => document.removeEventListener('scroll', onScrollHandler as EventListener)
  // }, [])

  return (
    <header className="container flex items-center justify-between gap-3 py-4 border-b border-solid sm:gap-5 md:gap-10 lg:gap-24 md:py-6 border-grey">
      <Button className="rounded-1" as={Link} color="gray" size={null} variant={null} to="">
        <Waved variant="dark" />
        <Picture className="w-full max-w-28" src="img/pictures/logo-stdkit.svg" />
        <Picture className="hidden w-full ml-4 max-w-24 md:block" src="img/pictures/logo-practice.svg" />
      </Button>
      <nav className="flex items-center gap-3 sm:gap-5 md:gap-8 md:mr-auto lg:gap-14">
        <Button
          className="font-normal sm:p-2 opacity-60 rounded-max sm:rounded-2 bg-grey sm:bg-opacity-0 hover:bg-grey w-11 h-11 sm:w-auto sm:h-auto min-w-11"
          as={Link}
          color="black"
          size={null}
          variant={null}
          to=""
        >
          <Waved variant="dark" />
          <Icon className="text-24" id="users" />
          <span className="hidden ml-2 sm:block">Студенты</span>
        </Button>
        <Button
          className="font-normal sm:p-2 opacity-60 rounded-max sm:rounded-2 bg-grey sm:bg-opacity-0 hover:bg-grey w-11 h-11 sm:w-auto sm:h-auto min-w-11"
          as={Link}
          color="black"
          size={null}
          variant={null}
          to=""
        >
          <Waved variant="dark" />
          <Icon className="text-24" id="notification" />
          <span className="hidden ml-2 sm:block">Задачи</span>
        </Button>
      </nav>
      <Accordion className="relative">
        <AccordionToggle className="relative bg-white w-[76px] min-w-[76px] h-11 rounded-full shadow-md flex items-center justify-between py-2 pr-2 pl-3">
          <Waved variant="dark" />
          <AccordionContext.Consumer>
            {({ accordionValue }) => (
              <Icon
                className={`text-14 mr-2 opacity-60 ease-linear duration-3 ${accordionValue ? '-rotate-90' : ''}`}
                id="arrow-left"
              />
            )}
          </AccordionContext.Consumer>
          <div className="flex items-center justify-center w-7 min-w-7 h-7 rounded-max bg-primary">
            <Icon className="text-white text-20" id="user" />
          </div>
        </AccordionToggle>
        <AccordionContent className="absolute right-0 top-12 w-44 z-3">
          <div className="px-4 py-6 overflow-hidden bg-white shadow rounded-4">
            <div className="flex flex-col mb-4">
              <span className="mb-3 font-normal truncate text-16 leading-1">Щербаков Иван</span>
              <span className="font-normal truncate text-14 leading-1 opacity-40">Куратор, веб-дизайн</span>
            </div>
            {/* <nav className=''></nav> */}
          </div>
        </AccordionContent>
      </Accordion>
    </header>
    // <header
    //   className={`container flex items-center justify-between gap-5
    //   sticky z-3 top-0 left-0 right-0 bg-black ${top} py-4 duration-3`}
    //   ref={header}
    // >
    //   <Button as={Link} color="white" size={null} variant={null} className="w-36" to="/">
    //     <Waved />
    //     <Picture webp="img/pictures/logo.webp" src="img/pictures/logo.png" className="w-full" />
    //   </Button>
    //   <nav className="hidden lg:flex items-center justify-between gap-4 w-full max-w-[800px] ml-auto">
    //     {nav.pages.map((item) => (
    //       <Button
    //         as={Link}
    //         color="second"
    //         size={null}
    //         variant={null}
    //         className="p-1 font-normal uppercase hover:underline underline-offset-4 text-14"
    //         to={item.to}
    //         key={item.id}
    //       >
    //         <Waved />
    //         {item.text}
    //       </Button>
    //     ))}
    //     <Accordion className="relative" scroll={true}>
    //       <Button
    //         as={AccordionToggle}
    //         color="second"
    //         size={null}
    //         variant={null}
    //         className="p-1 font-normal uppercase hover:underline underline-offset-4 text-14"
    //       >
    //         <Waved />
    //         Navigation
    //         <AccordionContext.Consumer>
    //           {({ accordionValue }) => (
    //             <Icon
    //               className={`text-12 ml-2 ease-linear duration-3 ${accordionValue ? 'rotate-90' : ''}`}
    //               id="arrow-right"
    //             />
    //           )}
    //         </AccordionContext.Consumer>
    //       </Button>
    //       <AccordionContent className="absolute right-0 w-full bg-white shadow-md top-10 rounded-2">
    //         <div className="flex flex-col gap-4 p-4">
    //           {nav.blocks.map((item) => (
    //             <Button
    //               as="a"
    //               color="gray"
    //               size={null}
    //               variant={null}
    //               className="hover:underline underline-offset-4 text-14"
    //               href={item.href}
    //               key={item.id}
    //               onClick={scrollTo}
    //             >
    //               <Waved variant="dark" />
    //               {item.text}
    //             </Button>
    //           ))}
    //         </div>
    //       </AccordionContent>
    //     </Accordion>
    //   </nav>
    //   <Button color="second" size={null} variant={null} className="lg:hidden text-48" onClick={sidebarOn}>
    //     <Waved />
    //     <Icon id="burger" />
    //   </Button>
    // </header>
  )
}
