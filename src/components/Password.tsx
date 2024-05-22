import React, { useState, useRef, useEffect } from 'react'
import classnames from 'classnames'
import { FormIcon } from './Form'

interface PasswordProps {
  className?: string
}

export const Password = ({ className }: PasswordProps): React.JSX.Element => {
  const icon = useRef<HTMLDivElement>(null)
  const [id, setId] = useState('eye-visible')
  const classNames: string = classnames('text-24', 'opacity-50', 'pr-4', className)

  useEffect((): (() => void) | undefined => {
    const currentIcon = icon.current as HTMLDivElement
    const label = currentIcon.closest('.form-label') as HTMLLabelElement

    if (!label) return

    const input = label.querySelector('.input') as HTMLInputElement

    const showPassword = (): void => {
      switch (input.type) {
      case 'password': {
        setId('eye-hidden')
        input.type = 'text'
        break
      }

      case 'text': {
        setId('eye-visible')
        input.type = 'password'
        break
      }
      }
    }

    currentIcon.addEventListener('click', showPassword as EventListener)

    return (): void => currentIcon.removeEventListener('click', showPassword as EventListener)
  }, [])

  return <FormIcon className={classNames} id={id} right={true} pointer={true} ref={icon}></FormIcon>
}
