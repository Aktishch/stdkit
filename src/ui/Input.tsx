import React, { forwardRef } from 'react'
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
  data?: string | null
}

const InputComponent = (
  {
    tag = 'input',
    size = 'lg',
    type = 'text',
    value,
    placeholder,
    name,
    className,
    maxLength,
    data = null,
    onInput = undefined,
    onChange = undefined,
    children,
  }: InputProps,
  ref: React.ForwardedRef<null>
): React.JSX.Element => {
  const classNames: string = classnames(
    'input',
    size ? inputSizes[size] : null,
    className
  )

  return tag === 'input' ? (
    <input
      className={type === 'hidden' ? '' : classNames}
      data-input={data}
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      maxLength={maxLength}
      autoComplete={type === 'password' ? 'new-password' : undefined}
      name={name}
      ref={ref}
      onInput={onInput}
      onChange={onChange}
    />
  ) : tag === 'textarea' ? (
    <textarea
      className={classNames}
      data-input={data}
      defaultValue={value}
      placeholder={placeholder}
      maxLength={maxLength}
      name={name}
      ref={ref}
    />
  ) : (
    <select className={classNames} data-input={data} name={name} ref={ref}>
      {children}
    </select>
  )
}

export const Input = forwardRef(
  InputComponent
) as React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
>
