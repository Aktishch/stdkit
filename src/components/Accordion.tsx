import React from 'react'
import classnames from 'classnames'

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

export const AccordionContext = React.createContext(false)

export const Accordion = ({ active = false, scroll = false, className = null, children }: accordionProps) => {
  const [state, setState] = React.useState(active)
  const item = React.useRef()

  const createState = React.useCallback((): void => {
    state ? setState(false) : setState(true)
  })

  React.useEffect((): void => {
    document.addEventListener('click', ((event: Event): void => {
      if ((item.current === null || item.current.contains(event.target)) === false) setState(false)
    }) as EventListener)
  }, [])

  React.useEffect((): (() => void) | undefined => {
    if (!scroll) return

    const closeToScroll = (): void => setState(false)

    document.addEventListener('scroll', closeToScroll as EventListener)

    return () => document.removeEventListener('scroll', closeToScroll as EventListener)
  }, [scroll])

  const classNames = classnames(className)

  return (
    <AccordionContext.Provider value={{ state, createState }}>
      <div className={classNames} ref={item}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export const AccordionToggle = ({ className = null, children }: accordionToggleProps) => {
  const { createState } = React.useContext(AccordionContext)
  const classNames: string = classnames('cursor-pointer', className)

  return (
    <div className={classNames} onClick={createState}>
      {children}
    </div>
  )
}

export const AccordionContent = ({ className = null, children }: accordionContentProps) => {
  const [height, setHeight] = React.useState('0px')
  const [duration, setDuration] = React.useState(null)
  const [hidden, setHidden] = React.useState(null)
  const { state } = React.useContext(AccordionContext)
  const content = React.useRef()
  const timeOut = React.useRef()
  const flag = React.useRef(false)

  React.useEffect((): void => {
    if (timeOut.current) clearTimeout(timeOut.current)

    const transition: number = flag.current ? Math.max(content.current.scrollHeight / 2, 100) : 0

    setHeight(`${content.current.scrollHeight}px`)
    setDuration(flag.current ? `${transition / 1000}s` : '0s')

    switch (state) {
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
  }, [state])

  const classNames: string = classnames(hidden, className)

  return (
    <div className={classNames} ref={content} style={{ height: height, transitionDuration: duration }}>
      {children}
    </div>
  )
}
