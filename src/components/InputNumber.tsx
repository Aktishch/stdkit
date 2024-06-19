import React from 'react'
import { InputDefault, InputDefaultProps } from '@components/InputDefault'

export const InputNumber = ({
  onInput,
  children,
  ...props
}: InputDefaultProps) => {
  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement

    input.value = input.value.replace(/^\.|[^\d.]|\.(?=.*\.)|^0+(?=\d)/g, '')
    onInput?.(event)
  }

  return (
    <InputDefault onInput={onInputHandler} {...props}>
      {children}
    </InputDefault>
  )
}
