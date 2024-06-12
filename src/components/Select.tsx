import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Placeholder } from '@ui/Placeholder'
import { Error } from '@ui/Error'
import { InputIcon } from '@ui/InputIcon'

const selectSizes = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
  xl: 'input-xl',
  xxl: 'input-xxl',
}

type Extension = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>

export interface SelectProps extends Extension {
  size?: keyof typeof selectSizes | null
  placeholder?: string | null
  error?: string | null
}

export const Select = ({
  size = 'lg',
  className,
  value = '',
  placeholder,
  error,
  onInput,
  onKeyDown,
  children,
  ...props
}: SelectProps) => {
  const [empty, setEmpty] = useState(value)
  const style: string = twMerge('form-label', className)

  const onInputHandler = (event: React.FormEvent<HTMLSelectElement>): void => {
    setEmpty((event.target as HTMLInputElement).value)
    onInput?.(event)
  }

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLSelectElement>
  ): void => {
    setEmpty((event.target as HTMLInputElement).value)
    onKeyDown?.(event)
  }

  return (
    <label className={style}>
      <div className="form-wrapper">
        <div className="input-cover">
          <select
            className={twMerge('input', size ? selectSizes[size] : null)}
            onInput={onInputHandler}
            onKeyDown={onKeyDownHandler}
            {...props}
          >
            {children}
          </select>
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
        <InputIcon
          className="text-sm text-black opacity-50"
          id="arrow-right"
          right={true}
        />
      </div>
    </label>
  )
}
