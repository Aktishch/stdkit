import React from 'react'
import { InputDefault, InputDefaultProps } from '@components/InputDefault'

export const InputText = ({
  onInput,
  children,
  ...props
}: InputDefaultProps) => {
  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement
    const regExp = /[0-9.,!@#$%^&*()-=_+`~{}/?<>|'"]/

    if (input.value.match(regExp)) input.value = input.value.replace(regExp, '')

    onInput?.(event)
  }

  return (
    <InputDefault onInput={onInputHandler} {...props}>
      {children}
    </InputDefault>
  )
}
