import { useRef, useState, useEffect } from 'react'
import { Coordinates } from '../functions/coordinates'

export const useDraggable = (storage: string) => {
  const body = document.body as HTMLBodyElement
  const drag = useRef<HTMLDivElement>(null)
  const active = useRef<boolean>(false)
  const currentY = useRef<number>(0)
  const currentX = useRef<number>(0)
  const initialY = useRef<number>(0)
  const initialX = useRef<number>(0)

  const [position, setPosition] = useState({
    top: sessionStorage.getItem(storage) ? JSON.parse(sessionStorage.getItem(storage) || '{}').top : 0,
    left: sessionStorage.getItem(storage) ? JSON.parse(sessionStorage.getItem(storage) || '{}').left : 0,
  })

  const coordinates: Coordinates = {
    top: position.top,
    left: position.left,
  }

  const dragStart = (event: Event): void => {
    switch (event.type) {
    case 'touchstart': {
      initialY.current = (event as TouchEvent).touches[0].clientY - coordinates.top
      initialX.current = (event as TouchEvent).touches[0].clientX - coordinates.left
      break
    }

    case 'mousedown': {
      initialY.current = (event as MouseEvent).clientY - coordinates.top
      initialX.current = (event as MouseEvent).clientX - coordinates.left
      break
    }
    }

    if (event.target === drag.current) active.current = true
  }

  const dragEnd = (): void => {
    initialX.current = currentX.current
    initialY.current = currentY.current
    active.current = false
  }

  const dragMove = (event: Event): void => {
    if (!active.current) return

    switch (event.type) {
    case 'touchmove': {
      currentX.current = (event as TouchEvent).touches[0].clientX - initialX.current
      currentY.current = (event as TouchEvent).touches[0].clientY - initialY.current
      break
    }

    case 'mousemove': {
      currentX.current = (event as MouseEvent).clientX - initialX.current
      currentY.current = (event as MouseEvent).clientY - initialY.current
      break
    }
    }

    coordinates.top = currentY.current
    coordinates.left = currentX.current
    sessionStorage.setItem(storage, JSON.stringify(coordinates))

    setPosition({
      top: coordinates.top,
      left: coordinates.left,
    })
  }

  useEffect((): (() => void) | undefined => {
    body.addEventListener('touchstart', dragStart as EventListener)
    body.addEventListener('touchmove', dragMove as EventListener)
    body.addEventListener('touchend', dragEnd as EventListener)
    body.addEventListener('mousedown', dragStart as EventListener)
    body.addEventListener('mousemove', dragMove as EventListener)
    body.addEventListener('mouseup', dragEnd as EventListener)

    return (): void => {
      body.removeEventListener('touchstart', dragStart as EventListener)
      body.removeEventListener('touchmove', dragMove as EventListener)
      body.removeEventListener('touchend', dragEnd as EventListener)
      body.removeEventListener('mousedown', dragStart as EventListener)
      body.removeEventListener('mousemove', dragMove as EventListener)
      body.removeEventListener('mouseup', dragEnd as EventListener)
    }
  }, [])

  return { drag, position }
}
