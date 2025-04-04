import { TSXComponent } from '@utils'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const InputNumberComponent = (
  { className, onInput, ...props }: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>
): TSXComponent => {
  const style: string = twMerge(className)

  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement
    const regExp = /[^0-9.]/g

    input.value = input.value.replace(regExp, '')

    onInput?.(event)
  }

  return <input className={style} type="text" placeholder="123456789" onInput={onInputHandler} {...props} ref={ref} />
}

export const InputNumber = forwardRef(InputNumberComponent) as React.ForwardRefExoticComponent<
  React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>
>
