import React from 'react'
import { twMerge } from 'tailwind-merge'
import { InputDefault, InputDefaultProps } from '@components/InputDefault'

export const InputNumber = ({
  size = 'lg',
  className,
  placeholder,
  error,
  maxLength,
  onInput,
  children,
}: InputDefaultProps) => {
  const style: string = twMerge(className)

  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement

    input.value = input.value.replace(/^\.|[^\d.]|\.(?=.*\.)|^0+(?=\d)/g, '')
    onInput?.(event)
  }

  return (
    <InputDefault
      className={style}
      size={size}
      type="text"
      placeholder={placeholder}
      error={error}
      maxLength={maxLength}
      onInput={onInputHandler}
    >
      {children}
    </InputDefault>
  )
}
