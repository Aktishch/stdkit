import React from 'react'
import { twMerge } from 'tailwind-merge'
import { useToggle } from '@hooks'
import { Icon } from '@components'

export const InputPassword = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [passwordValue, , , passwordToggle] = useToggle(true)
  const style: string = twMerge(className)

  return (
    <>
      <input
        className={style}
        type={passwordValue ? 'password' : 'text'}
        autoComplete="new-password"
        {...props}
      />
      <button
        className="input-icon input-icon-right input-icon-pointer"
        type="button"
        onClick={passwordToggle}
      >
        <Icon
          className="text-2xl text-black/50"
          id={passwordValue ? 'eye-visible' : 'eye-hidden'}
        />
      </button>
    </>
  )
}
