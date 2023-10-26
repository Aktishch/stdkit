import React, { useState, useRef, useEffect, useContext } from 'react'
import classnames from 'classnames'
import { useToggle } from '../hooks/useToggle'
import { ToggleContext } from '../contexts/ToggleContext'

interface accordionProps {
  active?: boolean
  scroll?: boolean
  className?: string | null
  children?: HTMLElement | SVGElement | string
}

interface accordionToggleProps {
  className?: string | null
  children?: HTMLElement | SVGElement | string
}

interface accordionContentProps {
  className?: string | null
  children?: HTMLElement | SVGElement | string
}

export const Accordion = ({ active = false, scroll = false, className = null, children }: accordionProps) => {
  const { value, off, toggle } = useToggle({ status: active })
  const accordion = useRef()

  useEffect((): void => {
    document.addEventListener('click', ((event: Event): void => {
      if ((accordion.current === null || accordion.current.contains(event.target)) === false) off()
    }) as EventListener)
  }, [])

  useEffect((): (() => void) | undefined => {
    if (!scroll) return

    const closeToScroll = (): void => off()

    document.addEventListener('scroll', closeToScroll as EventListener)

    return () => document.removeEventListener('scroll', closeToScroll as EventListener)
  }, [scroll])

  const classNames = classnames(className)

  return (
    <ToggleContext.Provider value={{ value, toggle }}>
      <div className={classNames} ref={accordion}>
        {children}
      </div>
    </ToggleContext.Provider>
  )
}

export const AccordionToggle = ({ className = null, children }: accordionToggleProps) => {
  const { toggle } = useContext(ToggleContext)
  const classNames: string = classnames('cursor-pointer', className)

  return (
    <div className={classNames} onClick={toggle}>
      {children}
    </div>
  )
}

export const AccordionContent = ({ className = null, children }: accordionContentProps) => {
  const [height, setHeight] = useState('0px')
  const [duration, setDuration] = useState(null)
  const [hidden, setHidden] = useState(null)
  const { value } = useContext(ToggleContext)
  const content = useRef()
  const timeOut = useRef()
  const flag = useRef(false)

  useEffect((): void => {
    if (timeOut.current) clearTimeout(timeOut.current)

    const transition: number = flag.current ? Math.max(content.current.scrollHeight / 2, 100) : 0

    setHeight(`${content.current.scrollHeight}px`)
    setDuration(flag.current ? `${transition / 1000}s` : '0s')

    switch (value) {
    case true: {
      timeOut.current = setTimeout((): void => {
        setHeight('')
        setHidden(null)
      }, transition)
      break
    }

    case false: {
      setHidden('overflow-hidden')
      timeOut.current = setTimeout(
        (): void => {
          setHeight('0px')
        },
        flag.current ? 10 : 0
      )
      break
    }
    }

    flag.current = true
  }, [value])

  const classNames: string = classnames(hidden, className)

  return (
    <div className={classNames} ref={content} style={{ height: height, transitionDuration: duration }}>
      {children}
    </div>
  )
}
