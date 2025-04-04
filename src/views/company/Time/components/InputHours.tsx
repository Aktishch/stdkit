import { InputNumber } from '@components'
import { TSXComponent } from '@utils'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const InputHoursComponent = (
  { className, onInput, ...props }: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>
): TSXComponent => {
  const style: string = twMerge(
    'p-0 text-sm text-center rounded-none input input-grey dark:input-fade size-6 shrink-0',
    className
  )

  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    onInput?.(event)
  }

  return <InputNumber className={style} placeholder="0.1" maxLength={3} onInput={onInputHandler} {...props} ref={ref} />
}

export const InputHours = forwardRef(InputHoursComponent) as React.ForwardRefExoticComponent<
  React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>
>
