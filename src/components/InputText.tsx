import React from 'react'
import { twMerge } from 'tailwind-merge'
import { InputProps } from '@ui/Input'
import { InputDefault } from '@components/InputDefault'

export const InputText = ({
  size = 'lg',
  value,
  name,
  className,
  maxLength,
  placeholder,
  onInput = undefined,
  onKeyDown = undefined,
  onPaste = undefined,
  children,
}: InputProps) => {
  const style: string = twMerge(className)

  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    if (onInput !== undefined) onInput(event)

    const input = event.target as HTMLInputElement
    const regExp = /[0-9.,!@#$%^&*()-=_+`~{}/?<>|'"]/

    if (input.value.match(regExp)) input.value = input.value.replace(regExp, '')
  }

  return (
    <InputDefault
      className={style}
      size={size}
      type="text"
      value={value}
      maxLength={maxLength}
      name={name}
      placeholder={placeholder}
      onInput={onInputHandler}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
    >
      {children}
    </InputDefault>
  )
}
