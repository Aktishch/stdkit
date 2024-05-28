import React, { useRef, useEffect } from 'react'
import classnames from 'classnames'

export const Placeholder = ({ children }: React.DOMAttributes<HTMLSpanElement>): React.JSX.Element => {
  const placeholderText = useRef<HTMLSpanElement>(null)
  const classNames: string = classnames(
    'absolute',
    'top-1/2',
    'left-4',
    'flex',
    'items-center',
    'text-16',
    'leading-1',
    'text-black',
    'text-opacity-50',
    'duration-2',
    'pointer-events-none',
    '-translate-y-1/2',
    'rounded-1',
    'px-1'
  )

  useEffect((): (() => void) | undefined => {
    const currentPlaceholderText = placeholderText.current as HTMLSpanElement
    const label = currentPlaceholderText.closest('.form-label') as HTMLLabelElement

    if (!label) return

    const input = label.querySelector('.input') as HTMLInputElement

    const inputHandler = (): void => {
      switch (input.value !== '') {
      case true: {
        currentPlaceholderText.classList.remove(
          'text-black',
          'text-opacity-50',
          'text-16',
          'top-1/2',
          '-translate-y-1/2'
        )
        currentPlaceholderText.classList.add('text-primary', 'text-14', '-top-2', 'bg-white')
        break
      }

      case false: {
        currentPlaceholderText.classList.add(
          'text-black',
          'text-opacity-50',
          'text-16',
          'top-1/2',
          '-translate-y-1/2'
        )
        currentPlaceholderText.classList.remove('text-primary', 'text-14', '-top-2', 'bg-white')
        break
      }
      }
    }

    inputHandler()
    input.addEventListener('input', inputHandler as EventListener)
    input.addEventListener('keydown', inputHandler as EventListener)

    return (): void => {
      input.removeEventListener('input', inputHandler as EventListener)
      input.removeEventListener('keydown', inputHandler as EventListener)
    }
  }, [])

  return (
    <span className={classNames} ref={placeholderText}>
      {children}
    </span>
  )
}
