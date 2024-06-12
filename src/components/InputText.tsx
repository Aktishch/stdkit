import React from 'react'
import { twMerge } from 'tailwind-merge'
import { InputDefault, InputDefaultProps } from '@components/InputDefault'

export const InputText = ({
  size = 'lg',
  className,
  placeholder,
  error,
  maxLength,
  onInput,
  children,
  ...props
}: InputDefaultProps) => {
  const style: string = twMerge(className)

  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement
    const regExp = /[0-9.,!@#$%^&*()-=_+`~{}/?<>|'"]/

    if (input.value.match(regExp)) input.value = input.value.replace(regExp, '')

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
      {...props}
    >
      {children}
    </InputDefault>
  )
}
