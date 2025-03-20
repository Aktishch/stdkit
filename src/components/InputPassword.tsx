import { Icon } from '@components'
import { useToggle } from '@hooks'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const InputPasswordComponent = (
  { className, ...props }: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const [passwordValue, , , passwordToggle] = useToggle(true)
  const style: string = twMerge('pr-12', className)

  return (
    <>
      <input
        className={style}
        type={passwordValue ? 'password' : 'text'}
        placeholder="********"
        autoComplete="new-password"
        {...props}
        ref={ref}
      />
      <button
        className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 h-full cursor-pointer"
        type="button"
        onClick={passwordToggle}
      >
        <Icon className="text-2xl opacity-50" id={passwordValue ? 'eye-visible' : 'eye-hidden'} />
      </button>
    </>
  )
}

export const InputPassword = forwardRef(InputPasswordComponent)
