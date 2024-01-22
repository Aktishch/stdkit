import React, { useRef, useState } from 'react'
import classnames from 'classnames'
import { Coordinates } from '../functions/coordinates'
import { touchDevice } from '../functions/touch-device'

interface MovementProps extends React.DOMAttributes<HTMLDivElement> {
  className?: string
  variant?: string
}

const movementVariants = {
  light: 'movement--light',
  blend: 'movement--blend',
}

export const Movement = ({ variant = 'light', className, children }: MovementProps): React.JSX.Element => {
  const movement = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const classNames: string = classnames('movement', variant ? movementVariants[variant] : null, className)

  const setMovement = (event: MouseEvent): void => {
    if (touchDevice()) return

    const coordinates: Coordinates = {
      top: event.clientY - (movement.current as HTMLDivElement).getBoundingClientRect().top,
      left: event.clientX - (movement.current as HTMLDivElement).getBoundingClientRect().left,
    }

    setPosition({
      top: coordinates.top,
      left: coordinates.left,
    })
  }

  return (
    <div
      className={classNames}
      onMouseMove={setMovement}
      style={{ '--y': `${position.top}px`, '--x': `${position.left}px` }}
      ref={movement}
    >
      {children}
    </div>
  )
}
