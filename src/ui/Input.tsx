import React from 'react'
import { twMerge } from 'tailwind-merge'

const inputSizes = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
  xl: 'input-xl',
  xxl: 'input-xxl',
}

type Extension = Omit<
  React.InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >,
  'size' | 'height'
>

export interface InputProps extends Extension {
  tag?: string | null
  size?: keyof typeof inputSizes | null
  height?: string | null
  options?: { value: string; text: string }[] | undefined
}

export const Input = ({
  tag = 'input',
  size = 'lg',
  type = 'text',
  value,
  name,
  className,
  height,
  maxLength,
  onInput = undefined,
  onKeyDown = undefined,
  onPaste = undefined,
  options,
}: InputProps) => {
  const style: string = twMerge(
    'input',
    size ? inputSizes[size] : null,
    tag === 'textarea' && height ? height : null,
    className
  )

  return tag === 'input' ? (
    <input
      className={type === 'hidden' ? '' : style}
      type={type}
      defaultValue={value}
      maxLength={maxLength}
      autoComplete={type === 'password' ? 'new-password' : undefined}
      name={name}
      onInput={onInput}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
    />
  ) : tag === 'textarea' ? (
    <textarea
      className={style}
      defaultValue={value}
      maxLength={maxLength}
      name={name}
      onInput={onInput}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
    />
  ) : (
    <select
      className={style}
      defaultValue={value}
      name={name}
      onInput={onInput}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
    >
      {options !== undefined
        ? options.map((item, index) => (
            <option value={item.value} hidden={index === 0} key={index}>
              {item.text}
            </option>
          ))
        : ''}
    </select>
  )
}
