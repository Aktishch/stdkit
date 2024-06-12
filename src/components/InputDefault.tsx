import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Input, InputProps } from '@ui/Input'
import { Placeholder } from '@ui/Placeholder'
import { Error } from '@ui/Error'

export interface InputDefaultProps extends InputProps {
  error?: string
}

export const InputDefault = ({
  size = 'lg',
  type = 'text',
  value = '',
  className,
  placeholder,
  error,
  maxLength,
  onInput,
  onKeyDown,
  children,
  ...props
}: InputDefaultProps) => {
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
            className=""
            size={size}
            type={type}
            maxLength={maxLength}
            defaultValue={value}
            onInput={onInputHandler}
            onKeyDown={onKeyDownHandler}
            {...props}
          />
          {/* {tag === 'input' ? (
          ) : tag === 'textarea' ? (
            <Input
              tag="textarea"
              className=""
              height={height}
              size={size}
              value={value}
              maxLength={maxLength}
              name={name}
              onInput={onInputHandler}
              onKeyDown={onKeyDownHandler}
              onPaste={onPaste}
              onChange={onChange}
            />
          ) : (
            <Input
              tag="select"
              className=""
              size={size}
              value={value}
              name={name}
              options={options}
              onInput={onInputHandler}
              onKeyDown={onKeyDownHandler}
              onPaste={onPaste}
              onChange={onChange}
            />
          )} */}
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
