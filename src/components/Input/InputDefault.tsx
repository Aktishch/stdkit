import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Input, InputProps } from '@ui/Form/Input'
import { Placeholder } from '@ui/Form/Placeholder'
import { Error } from '@ui/Form/Error'

export interface InputDefaultProps extends InputProps {
  error?: string
}

const InputDefaultComponent = (
  {
    value = '',
    className,
    placeholder,
    error,
    onInput,
    onKeyDown,
    children,
    ...props
  }: InputDefaultProps,
  ref: InputRef
) => {
  const [empty, setEmpty] = useState(value)
  const style: string = twMerge('form-label', className)

  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    setEmpty((event.target as HTMLInputElement).value)
    onInput?.(event)
  }

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    setEmpty((event.target as HTMLInputElement).value)
    onKeyDown?.(event)
  }

  return (
    <label className={style}>
      <div className="form-wrapper">
        <div className="input-cover">
          <Input
            defaultValue={value}
            onInput={onInputHandler}
            onKeyDown={onKeyDownHandler}
            {...props}
            ref={ref}
          />
        </div>
        {placeholder ? (
          <Placeholder
            className={
              empty !== ''
                ? 'text-primary text-sm -top-2 bg-white'
                : 'text-black text-opacity-50 top-1/2 text-base -translate-y-1/2'
            }
          >
            {placeholder}
          </Placeholder>
        ) : (
          ''
        )}
        <Error>{error}</Error>
        {children}
      </div>
    </label>
  )
}

type InputRef = React.ForwardedRef<HTMLInputElement>

export const InputDefault = React.forwardRef(InputDefaultComponent)
