import React from 'react'
import classnames from 'classnames'

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: string
}

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

export const Switch = ({
  color,
  variant = 'checkbox',
  className,
  type = 'checkbox',
  disabled = false,
  checked = false,
  value,
  onChange,
}: SwitchProps): React.JSX.Element => {
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
    />
  )
}
