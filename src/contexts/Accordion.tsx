import React, { createContext, useState, useRef, useEffect, useContext } from 'react'
import classnames from 'classnames'
import { useToggle } from '../hooks/useToggle'

interface AccordionContextProps {
  accordionValue?: boolean
  accordionToggle?: () => void
}

interface AccordionProps extends React.PropsWithChildren {
  active?: boolean
  scroll?: boolean
  className?: string
}

interface AccordionToggleProps extends React.PropsWithChildren {
  className?: string
}

interface AccordionContentProps extends React.PropsWithChildren {
  className?: string
}

export const AccordionContext = createContext<AccordionContextProps>({})

export const Accordion = ({
  active = false,
  scroll = false,
  className,
  children,
}: AccordionProps): React.JSX.Element => {
  const accordion = useRef<HTMLDivElement>(null)
  const classNames: string = classnames(className)
  const { value, off, toggle } = useToggle({ status: active })
  const onScrollHandler = (): void => off()

  const onClickHandler = (event: Event): void => {
    if ((accordion.current === null || accordion.current?.contains(event.target as Node)) === false) off()
  }

  useEffect((): (() => void) | undefined => {
    if (!scroll) return

    document.addEventListener('scroll', onScrollHandler as EventListener)

    return (): void => document.removeEventListener('scroll', onScrollHandler as EventListener)
  }, [scroll])

  useEffect((): (() => void) | undefined => {
    document.addEventListener('click', onClickHandler as EventListener)

    return (): void => document.removeEventListener('click', onClickHandler as EventListener)
  }, [])

  return (
    <AccordionContext.Provider value={{ accordionValue: value, accordionToggle: toggle }}>
      <div className={classNames} ref={accordion}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export const AccordionToggle = ({ className, children }: AccordionToggleProps): React.JSX.Element => {
  const { accordionToggle } = useContext(AccordionContext)
  const classNames: string = classnames('cursor-pointer', className)

  return (
    <button className={classNames} onClick={accordionToggle}>
      {children}
    </button>
  )
}

export const AccordionContent = ({ className, children }: AccordionContentProps): React.JSX.Element => {
  const [height, setHeight] = useState('0')
  const [duration, setDuration] = useState('')
  const [hidden, setHidden] = useState('')
  const content = useRef<HTMLDivElement>(null)
  const timeOut = useRef<NodeJS.Timeout>()
  const flag = useRef<boolean>(false)
  const { accordionValue } = useContext(AccordionContext)
  const classNames: string = classnames(hidden, className)

  useEffect((): void => {
    if (content.current === null) return

    if (timeOut.current) clearTimeout(timeOut.current)

    const transition: number = flag.current ? Math.max(content.current.scrollHeight / 2, 100) : 0

    setHeight(`${content.current?.scrollHeight}px`)
    setDuration(flag.current ? `${transition / 1000}s` : '0s')

    switch (accordionValue) {
    case true: {
      timeOut.current = setTimeout((): void => {
        setHeight('')
        setHidden('')
      }, transition)
      break
    }

    case false: {
      setHidden('overflow-hidden')
      timeOut.current = setTimeout((): void => setHeight('0'), flag.current ? 50 : 0)
      break
    }
    }

    flag.current = true
  }, [accordionValue])

  return (
    <div className={classNames} ref={content} style={{ height: height, transitionDuration: duration }}>
      {children}
    </div>
  )
}
