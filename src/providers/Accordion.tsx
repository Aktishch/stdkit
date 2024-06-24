import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext,
} from 'react'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { useToggle } from '@hooks/useToggle'

interface AccordionContextProps {
  accordionValue?: boolean
  accordionToggle?: () => void
}

interface AccordionProps extends Props {
  active?: boolean
  scroll?: boolean
}

export const AccordionContext = createContext<AccordionContextProps>({})

export const Accordion = ({
  active = false,
  scroll = false,
  className,
  children,
}: AccordionProps) => {
  const accordion = useRef<HTMLDivElement>(null)
  const style: string = twMerge(className)
  const [accordionValue, , accordionOff, accordionToggle] = useToggle(active)
  const onScrollHandler = (): void => accordionOff()

  const onClickHandler = (event: Event): void => {
    if (
      (accordion.current === null ||
        accordion.current?.contains(event.target as Node)) === false
    )
      accordionOff()
  }

  useEffect((): (() => void) | undefined => {
    if (!scroll) return

    document.addEventListener('scroll', onScrollHandler as EventListener)

    return (): void =>
      document.removeEventListener('scroll', onScrollHandler as EventListener)
  }, [scroll])

  useEffect((): (() => void) | undefined => {
    document.addEventListener('click', onClickHandler as EventListener)

    return (): void =>
      document.removeEventListener('click', onClickHandler as EventListener)
  }, [])

  return (
    <AccordionContext.Provider value={{ accordionValue, accordionToggle }}>
      <div className={style} ref={accordion}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export const AccordionToggle = ({
  className,
  children,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { accordionToggle } = useContext(AccordionContext)
  const style: string = twMerge('cursor-pointer', className)

  return (
    <button className={style} onClick={accordionToggle}>
      {children}
    </button>
  )
}

export const AccordionContent = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const [height, setHeight] = useState('0')
  const [duration, setDuration] = useState('')
  const [hidden, setHidden] = useState('')
  const content = useRef<HTMLDivElement>(null)
  const timeOut = useRef<number>()
  const flag = useRef<boolean>(false)
  const { accordionValue } = useContext(AccordionContext)
  const style: string = twMerge(hidden, className)

  useEffect((): void => {
    if (content.current === null) return

    if (timeOut.current) clearTimeout(timeOut.current)

    const transition: number = flag.current
      ? Math.max(content.current.scrollHeight / 2, 100)
      : 0

    setHeight(`${content.current?.scrollHeight}px`)
    setDuration(flag.current ? `${transition / 1000}s` : '0s')

    if (accordionValue) {
      timeOut.current = setTimeout((): void => {
        setHeight('')
        setHidden('')
      }, transition)
    } else {
      setHidden('overflow-hidden')
      timeOut.current = setTimeout(
        (): void => setHeight('0'),
        flag.current ? 50 : 0
      )
    }

    flag.current = true
  }, [accordionValue])

  return (
    <div
      className={style}
      ref={content}
      style={{ height: height, transitionDuration: duration }}
    >
      {children}
    </div>
  )
}
