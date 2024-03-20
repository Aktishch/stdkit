import React, { forwardRef } from 'react'
import classnames from 'classnames'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  tag?: string | null
  // color?: string | null
  // size?: string | null
  fade?: boolean
}

const inputColors = {
  gray: 'input-gray',
}

const inputSizes = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
  xl: 'input-xl',
  xxl: 'input-xxl',
}

const InputComponent = (
  {
    tag = 'input',
    color = 'gray',
    size = 'lg',
    fade = false,
    type = 'text',
    value,
    placeholder,
    name,
    className,
    children,
  }: InputProps,
  ref: React.ForwardedRef<null>
): React.JSX.Element => {
  const classNames: string = classnames(
    'input',
    color ? inputColors[color] : null,
    size ? inputSizes[size] : null,
    fade ? 'input-fade' : null,
    className
  )

  return tag === 'input' ? (
    <input
      className={type === 'hidden' ? '' : classNames}
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      ref={ref}
    />
  ) : tag === 'textarea' ? (
    <textarea className={classNames} value={value} name={name} ref={ref} />
  ) : (
    <select className={classNames} value={value} name={name} ref={ref}>
      {children}
    </select>
  )
}

export const Input = forwardRef(InputComponent) as React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
>
