import React, { useRef } from 'react'
import classnames from 'classnames'
import { Coordinates } from '../functions/coordinates'
import { touchDevice } from '../functions/touch-device'

interface WavedProps extends React.DOMAttributes<HTMLDivElement> {
  className?: string
  variant?: string
}

const wavedVariants = {
  light: 'waved--light',
  dark: 'waved--dark',
}

export const Waved = ({ variant = 'light', className }: WavedProps): React.JSX.Element => {
  const waved = useRef<HTMLDivElement>(null)
  const classNames: string = classnames('waved', variant ? wavedVariants[variant] : null, className)

  const onClickHandler = (event: Event): void => {
    const circle = document.createElement('div') as HTMLDivElement

    const createCircle = (yPos: number, xPos: number): void => {
      const current = waved.current as HTMLElement
      const coordinates: Coordinates = {
        top: yPos - current.getBoundingClientRect().top,
        left: xPos - current.getBoundingClientRect().left,
      }

      circle.classList.add('waved-circle')
      circle.style.top = `${coordinates.top}px`
      circle.style.left = `${coordinates.left}px`
      current.appendChild(circle)
      setTimeout((): void => circle.remove(), 1000)
    }

    switch (event.type) {
    case 'touchstart': {
      if (!touchDevice()) return
      createCircle((event as TouchEvent).touches[0].clientY, (event as TouchEvent).touches[0].clientX)
      break
    }

    case 'mousedown': {
      if (touchDevice()) return
      createCircle((event as MouseEvent).clientY, (event as MouseEvent).clientX)
      break
    }
    }
  }

  return <div className={classNames} onTouchStart={onClickHandler} onMouseDown={onClickHandler} ref={waved} />
}
