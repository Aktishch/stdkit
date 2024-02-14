import React, { useRef, useEffect } from 'react'
import { Coordinates } from '../functions/coordinates'
import { touchDevice } from '../functions/touch-device'

export const Snowflakes = (): React.JSX.Element => {
  const snowflakes = useRef<HTMLDivElement>(null)
  const flag = useRef<boolean>(true)

  const onMousemoveHandler = (event: MouseEvent): void => {
    if (!flag.current) return

    flag.current = false

    setTimeout((): boolean => (flag.current = true), 300)

    const current = snowflakes.current as HTMLElement
    const snowflake = document.createElement('img') as HTMLImageElement
    const size: number = Math.random() * 60
    const coordinates: Coordinates = {
      top: event.clientY,
      left: event.clientX,
    }

    snowflake.classList.add('snowflake', 'absolute')
    snowflake.src = 'img/pictures/snow.png'
    snowflake.style.top = `${coordinates.top}px`
    snowflake.style.left = `${coordinates.left}px`
    snowflake.style.width = `${20 + size}px`
    current.appendChild(snowflake)

    setTimeout((): void => snowflake.remove(), 3000)
  }

  useEffect((): (() => void) | undefined => {
    if (touchDevice()) return

    document.addEventListener('mousemove', onMousemoveHandler as EventListener)

    return (): void => document.removeEventListener('mousemove', onMousemoveHandler as EventListener)
  }, [])

  return <div className="fixed inset-0 pointer-events-none z-5" ref={snowflakes} />
}
