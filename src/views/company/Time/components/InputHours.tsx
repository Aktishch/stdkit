import React from 'react'
import { twMerge } from 'tailwind-merge'
import { InputNumber } from '@components'

export const InputHours = ({
  onInput,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const style: string = twMerge(
    'p-0 text-sm text-center rounded-none input input-grey dark:input-fade size-6 shrink-0',
    className
  )

  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    onInput?.(event)
  }

  return (
    <InputNumber
      className={style}
      {...props}
      maxLength={1}
      onInput={onInputHandler}
    />
  )
}
