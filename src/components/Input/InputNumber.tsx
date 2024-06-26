import React from 'react'
import { InputDefault, InputDefaultProps } from '@components/Input/InputDefault'

const InputNumberComponent = (
  { onInput, children, ...props }: InputDefaultProps,
  ref: InputRef
) => {
  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement

    input.value = input.value.replace(/^\.|[^\d.]|\.(?=.*\.)|^0+(?=\d)/g, '')
    onInput?.(event)
  }

  return (
    <InputDefault onInput={onInputHandler} {...props} ref={ref}>
      {children}
    </InputDefault>
  )
}

type InputRef = React.ForwardedRef<HTMLInputElement>

export const InputNumber = React.forwardRef(InputNumberComponent)
