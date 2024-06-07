import React from 'react'
import classnames from 'classnames'

const inputSizes = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
  xl: 'input-xl',
  xxl: 'input-xxl',
}

type Extension = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

export interface InputProps extends Extension {
  tag?: string | null
  size?: keyof typeof inputSizes | null
}

export const Input = ({
  tag = 'input',
  size = 'lg',
  type = 'text',
  value,
  name,
  className,
  maxLength,
  onInput = undefined,
  onKeyDown = undefined,
  onPaste = undefined,
  children,
}: InputProps) => {
  const classNames: string = classnames(
    'input',
    size ? inputSizes[size] : null,
    className
  )

  return tag === 'input' ? (
    <input
      className={type === 'hidden' ? '' : classNames}
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
      className={classNames}
      defaultValue={value}
      maxLength={maxLength}
      name={name}
    />
  ) : (
    <select className={classNames} name={name}>
      {children}
    </select>
  )
}
