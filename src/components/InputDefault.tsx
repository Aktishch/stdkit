import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Placeholder } from '@ui/Placeholder'
import { Input, InputProps } from '@ui/Input'

export const InputDefault = ({
  tag = 'input',
  size = 'lg',
  type = 'text',
  value,
  name,
  className,
  height,
  maxLength,
  placeholder,
  onInput = undefined,
  onKeyDown = undefined,
  onPaste = undefined,
  options,
  children,
}: InputProps) => {
  const [empty, setEmpty] = useState('')
  const style: string = twMerge('form-label', className)

  const onInputHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    if (onInput !== undefined) onInput(event)

    setEmpty((event.target as HTMLInputElement).value)
  }

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (onKeyDown !== undefined) onKeyDown(event)

    setEmpty((event.target as HTMLInputElement).value)
  }

  return (
    <label className={style}>
      <div className="form-wrapper">
        <div className="input-cover">
          {tag === 'input' ? (
            <Input
              tag="input"
              className=""
              size={size}
              type={type}
              value={value}
              maxLength={maxLength}
              name={name}
              onInput={onInputHandler}
              onKeyDown={onKeyDownHandler}
              onPaste={onPaste}
            />
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
            />
          )}
        </div>
        {placeholder !== null ? (
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
        {children}
      </div>
    </label>
  )
}
