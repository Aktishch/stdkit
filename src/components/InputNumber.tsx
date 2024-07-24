import React from 'react'
import { twMerge } from 'tailwind-merge'

export const InputNumber = ({
  onInput,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const style: string = twMerge(className)

  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement
    const regExp = /[^0-9.]/g

    input.value = input.value.replace(regExp, '')

    onInput?.(event)
  }

  return (
    <input className={style} type="text" {...props} onInput={onInputHandler} />
  )
}
