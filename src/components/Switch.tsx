import React from 'react'
import classnames from 'classnames'

interface switchProps {
  color?: string | null
  variant: string
  className?: string | null
  type?: string
  disabled?: boolean
  checked?: boolean
  onChange?: () => void | undefined
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
  color = null,
  variant = 'checkbox',
  className = null,
  type = 'checkbox',
  disabled = false,
  checked = false,
  onChange = undefined,
}: switchProps) => {
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
      defaultChecked={checked}
      onChange={onChange}
    />
  )
}
