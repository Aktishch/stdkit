import React, { useState, useRef, useEffect } from 'react'
import { useToggle } from '../hooks/useToggle'
import { Main } from '../includes/Main'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { social } from '../data/social'

export const Index = (): React.JSX.Element => {
  const { value, toggle } = useToggle({ status: false })

  const positionLink = (index: number) => {
    return {
      top: (42 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / social.length) * index * Math.PI)).toFixed(4) + '%',
      left: (42 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / social.length) * index * Math.PI)).toFixed(4) + '%',
    }
  }

  let lastTap: number

  const doubleTap = (): void => {
    const timeSince: number = new Date().getTime() - lastTap

    if (timeSince < 300 && timeSince > 0) toggle()

    lastTap = new Date().getTime()
  }

  const body = document.body as HTMLBodyElement
  const btn = useRef()
  const [position, setPosition] = useState({
    top: sessionStorage.getItem('coordinates') ? JSON.parse(sessionStorage.getItem('coordinates') || '{}').top : 0,
    left: sessionStorage.getItem('coordinates') ? JSON.parse(sessionStorage.getItem('coordinates') || '{}').left : 0,
  })

  const coordinates = {
    top: sessionStorage.getItem('coordinates') ? JSON.parse(sessionStorage.getItem('coordinates') || '{}').top : 0,
    left: sessionStorage.getItem('coordinates') ? JSON.parse(sessionStorage.getItem('coordinates') || '{}').left : 0,
  }
  let active = false
  let currentY: number = useRef(0)
  let currentX: number = useRef(0)
  let initialY: number = useRef(0)
  let initialX: number = useRef(0)

  const dragStart = (event: Event): void => {
    switch (event.type) {
    case 'touchstart': {
      initialY = (event as TouchEvent).touches[0].clientY - coordinates.top
      initialX = (event as TouchEvent).touches[0].clientX - coordinates.left
      break
    }

    case 'mousedown': {
      initialY = (event as MouseEvent).clientY - coordinates.top
      initialX = (event as MouseEvent).clientX - coordinates.left
      break
    }
    }

    if (event.target === btn.current) active = true
  }

  const dragEnd = (): void => {
    initialX = currentX
    initialY = currentY
    active = false
  }

  const dragMove = (event: Event): void => {
    if (!active) return

    switch (event.type) {
    case 'touchmove': {
      currentX = (event as TouchEvent).touches[0].clientX - initialX
      currentY = (event as TouchEvent).touches[0].clientY - initialY
      break
    }

    case 'mousemove': {
      currentX = (event as MouseEvent).clientX - initialX
      currentY = (event as MouseEvent).clientY - initialY
      break
    }
    }

    coordinates.top = currentY
    coordinates.left = currentX
    sessionStorage.setItem('coordinates', JSON.stringify(coordinates))

    setPosition({
      top: coordinates.top,
      left: coordinates.left,
    })
  }

  useEffect((): void => {
    body.addEventListener('touchstart', dragStart as EventListener)
    body.addEventListener('touchmove', dragMove as EventListener)
    body.addEventListener('touchend', dragEnd as EventListener)
    body.addEventListener('mousedown', dragStart as EventListener)
    body.addEventListener('mousemove', dragMove as EventListener)
    body.addEventListener('mouseup', dragEnd as EventListener)
  }, [])

  return (
    <>
      <Main />
      <div
        className="flex flex-col items-center justify-center fixed z-2 bottom-0 rounded-max pointer-events-none touch-none select-none w-48 h-48"
        style={{
          transform: `translate(${position.left}px, ${position.top}px)`,
        }}
      >
        <div
          className={`absolute inset-0 bg-primary bg-opacity-30 rounded-max ${
            value ? '' : 'opacity-0 scale-0 -rotate-180'
          } overflow-hidden pointer-events-auto ease-in-out duration-4`}
        >
          {social.map((item) => (
            <div className="absolute" key={item.id} style={positionLink(item.id)}>
              <Button
                Tag="a"
                color="second"
                size={null}
                variant={null}
                className="text-30 rounded-max"
                href="/"
                target={true}
              >
                <Icon className="text-30" id={item.icon} />
              </Button>
            </div>
          ))}
        </div>
        <button
          className="btn btn-primary btn-contur rounded-max shadow-md overflow-hidden pointer-events-auto w-10 h-10 p-1 after:content-auto after:block after:bg-current after:rounded-inherit after:w-full after:h-full"
          ref={btn}
          onClick={doubleTap}
        ></button>
        {/* <div ref={btn}>
          <Button
            color="primary"
            variant="contur"
            size={null}
            className="rounded-max shadow-md overflow-hidden pointer-events-auto w-10 h-10 p-1 after:content-auto after:block after:bg-current after:rounded-inherit after:w-full after:h-full"
            onClick={doubleTap}
          />
        </div> */}
      </div>
    </>
  )
}
