import React, { useRef, useEffect } from 'react'
import { menuItems } from '../data/menu-items'
import { Accordion, AccordionToggle, AccordionContent } from '../contexts/Accordion'
import { Subtitle } from '../components/Subtitle'
import { Button } from '../components/Button'
import { Waved } from '../components/Waved'

export const SmartMenu = (): React.JSX.Element => {
  const menu = useRef<HTMLDivElement>(null)
  const subtitle = useRef<HTMLHeadingElement>(null)
  const length = useRef<HTMLUListElement>(null)
  const nav = useRef<HTMLDivElement>(null)
  const count = useRef<HTMLSpanElement>(null)
  const list = useRef<HTMLUListElement>(null)
  const breaks = useRef<number[]>([])

  const updateSmartMenu = (): void => {
    const lengthWidth: number = (length.current as HTMLUListElement).offsetWidth
    const smartMenuWidth: number = (nav.current as HTMLElement).classList.contains('hidden')
      ? (menu.current as HTMLElement).offsetWidth
      : (menu.current as HTMLElement).offsetWidth - (nav.current as HTMLElement).offsetWidth

    switch (smartMenuWidth > 0 && smartMenuWidth < lengthWidth) {
    case true: {
      ;(breaks.current as number[]).push(lengthWidth)
      ;(list.current as HTMLUListElement).prepend(
          (length.current as HTMLUListElement).lastElementChild as HTMLElement
      )
      updateSmartMenu()
      break
    }

    case false: {
      if (smartMenuWidth > (breaks.current as number[])[(breaks.current as number[]).length - 1]) {
        ;(breaks.current as number[]).pop()
        ;(length.current as HTMLUListElement).append(
            (list.current as HTMLUListElement).firstElementChild as HTMLElement
        )
      }

      break
    }
    }

    ;(count.current as HTMLSpanElement).innerText = String((breaks.current as number[]).length)
    ;((list.current as HTMLUListElement).querySelectorAll('li') as NodeListOf<Element>).length === 0
      ? (nav.current as HTMLElement).classList.add('hidden')
      : (nav.current as HTMLElement).classList.remove('hidden')

    lengthWidth === 0
      ? (subtitle.current as HTMLHeadingElement).classList.remove('hidden')
      : (subtitle.current as HTMLHeadingElement).classList.add('hidden')
  }

  useEffect((): (() => void) | undefined => {
    updateSmartMenu()

    window.addEventListener('resize', updateSmartMenu as EventListener)

    return (): void => window.removeEventListener('resize', updateSmartMenu as EventListener)
  }, [])

  return (
    <nav className="container relative z-2 py-4">
      <div className="flex items-center justify-between gap-5 w-full max-w-full" ref={menu}>
        <Subtitle ref={subtitle}>Smart-menu items</Subtitle>
        <ul className="flex justify-between gap-3" ref={length}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Button color="primary" variant="light" className="dark:bg-dark font-semibold shadow-md w-full min-w-max">
                {item.text}
              </Button>
            </li>
          ))}
        </ul>
        <div ref={nav}>
          <Accordion className="relative min-w-max" scroll={true}>
            <Button as={AccordionToggle} color="primary">
              <Waved />
              more
              <span className="ml-1" ref={count}>
                0
              </span>
            </Button>
            <AccordionContent className="absolute top-12 right-0 bg-white dark:bg-opacity-0 rounded-2 shadow-md w-52">
              <ul className="flex flex-col gap-3 p-3" ref={list}></ul>
            </AccordionContent>
          </Accordion>
        </div>
      </div>
    </nav>
  )
}
