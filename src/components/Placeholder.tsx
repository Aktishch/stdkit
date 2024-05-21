import React, { useRef, useEffect } from 'react'
import classnames from 'classnames'

export const Placeholder = ({ children }: React.DOMAttributes<HTMLSpanElement>): React.JSX.Element => {
  const placeholderText = useRef<HTMLSpanElement>(null)
  const classNames: string = classnames(
    'absolute',
    'top-0',
    'bottom-0',
    'left-4',
    'flex',
    'items-center',
    'text-16',
    'leading-1',
    'text-black',
    'text-opacity-50',
    'duration-2'
  )

  useEffect((): (() => void) | undefined => {
    const currentPlaceholderText = placeholderText.current as HTMLSpanElement
    const label = currentPlaceholderText.closest('.form-label') as HTMLLabelElement

    if (!label) return

    const input = label.querySelector('.input') as HTMLInputElement

    const inputHandler = (): void => {
      switch (input.value !== '') {
      case true: {
        currentPlaceholderText.classList.remove('text-black', 'text-opacity-50', 'text-16')
        currentPlaceholderText.classList.add('text-primary', 'text-14')
        break
      }

      case false: {
        console.log('empty')
        break
      }
      }
    }

    inputHandler()
    input.addEventListener('input', inputHandler as EventListener)

    return (): void => {
      input.removeEventListener('input', inputHandler as EventListener)
    }
  }, [])

  return (
    <span className={classNames} ref={placeholderText}>
      {children}
    </span>
  )
}
