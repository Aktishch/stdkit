import React from 'react'
import { InputDefault, InputDefaultProps } from '@components/Input/InputDefault'

const InputTextComponent = (
  { onInput, children, ...props }: InputDefaultProps,
  ref: InputRef
) => {
  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement
    const regExp = /[0-9.,!@#$%^&*()-=_+`~{}/?<>|'"]/

    if (input.value.match(regExp)) input.value = input.value.replace(regExp, '')

    onInput?.(event)
  }

  return (
    <InputDefault onInput={onInputHandler} {...props} ref={ref}>
      {children}
    </InputDefault>
  )
}
type InputRef = React.ForwardedRef<HTMLInputElement>

export const InputText = React.forwardRef(InputTextComponent)
