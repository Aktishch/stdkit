import { useRef, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Coordinates } from '@utils/coordinates'
import { touchDevice } from '@utils/touch-device'

const wavedVariants = {
  light: 'waved--light',
  dark: 'waved--dark',
}

interface WavedProps extends Props {
  variant?: keyof typeof wavedVariants
}

export const Waved = ({ variant = 'light', className }: WavedProps) => {
  const waved = useRef<HTMLDivElement>(null)
  const style: string = twMerge(
    'waved',
    variant ? wavedVariants[variant] : null,
    className
  )

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
        createCircle(
          (event as TouchEvent).touches[0].clientY,
          (event as TouchEvent).touches[0].clientX
        )
        break
      }

      case 'mousedown': {
        if (touchDevice()) return
        createCircle(
          (event as MouseEvent).clientY,
          (event as MouseEvent).clientX
        )
        break
      }
    }
  }

  useEffect((): (() => void) | undefined => {
    const parent = (waved.current as HTMLDivElement)
      .parentElement as HTMLElement

    parent.addEventListener('touchstart', onClickHandler as EventListener)
    parent.addEventListener('mousedown', onClickHandler as EventListener)

    return (): void => {
      parent.removeEventListener('touchstart', onClickHandler as EventListener)
      parent.removeEventListener('mousedown', onClickHandler as EventListener)
    }
  }, [])

  return <div className={style} ref={waved} />
}
