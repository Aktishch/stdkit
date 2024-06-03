import React, { forwardRef } from 'react'
import classnames from 'classnames'

const switchColors = {
  second: 'text-second',
  green: 'text-green',
  red: 'text-red',
}

const switchVariant = {
  checkbox: 'switch-checkbox',
  radio: 'switch-radio',
  toggle: 'switch-toggle',
}

const switchTypes = {
  checkbox: 'checkbox',
  radio: 'radio',
}

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: keyof typeof switchColors
  variant?: keyof typeof switchVariant
  type?: keyof typeof switchTypes
}

const SwitchComponent = (
  {
    color,
    variant = 'checkbox',
    className,
    type = 'checkbox',
    disabled = false,
    checked = false,
    value,
    onChange,
  }: SwitchProps,
  ref: React.ForwardedRef<HTMLInputElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'switch',
    color ? switchColors[color] : null,
    variant ? switchVariant[variant] : null,
    className
  )

  return (
    <input
      className={classNames}
      type={switchTypes[type]}
      disabled={disabled}
      checked={checked}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  )
}

export const Switch = forwardRef(
  SwitchComponent
) as React.ForwardRefExoticComponent<
  SwitchProps & React.RefAttributes<HTMLInputElement>
>
