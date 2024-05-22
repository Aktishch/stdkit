import React, { forwardRef } from 'react'
import classnames from 'classnames'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  tag?: string | null
  size?: string | null
  data?: string | null
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
  { tag = 'input', size = 'lg', type = 'text', value, placeholder, name, className, data = null, children }: InputProps,
  ref: React.ForwardedRef<null>
): React.JSX.Element => {
  const classNames: string = classnames('input', size ? inputSizes[size] : null, className)

  return tag === 'input' ? (
    <input
      className={type === 'hidden' ? '' : classNames}
      data-input={data}
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      name={name}
      ref={ref}
    />
  ) : tag === 'textarea' ? (
    <textarea className={classNames} defaultValue={value} name={name} ref={ref} />
  ) : (
    <select className={classNames} defaultValue={value} name={name} ref={ref}>
      {children}
    </select>
  )
}

export const Input = forwardRef(InputComponent) as React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
>
