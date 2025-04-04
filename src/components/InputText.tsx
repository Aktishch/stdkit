import { TSXComponent } from '@utils'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const InputTextComponent = (
  { className, onInput, ...props }: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>
): TSXComponent => {
  const style: string = twMerge(className)

  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement
    const regExp = /[0-9.,!@#$%^&*()-=_+`~{}/?<>|'"]/

    if (input.value.match(regExp)) input.value = input.value.replace(regExp, '')

    onInput?.(event)
  }

  return <input className={style} type="text" onInput={onInputHandler} {...props} ref={ref} />
}

export const InputText = forwardRef(InputTextComponent) as React.ForwardRefExoticComponent<
  React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>
>
