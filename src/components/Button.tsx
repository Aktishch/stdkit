import React from 'react'
import classnames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Tag?: string
  size?: string | null
  variant?: string | null
  effect?: string | null
  href?: string | null
  target?: boolean
}

const buttonColors = {
  primary: 'btn-primary',
  second: 'btn-second',
  gray: 'btn-gray',
}

const buttonSizes = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
  xxl: 'btn-xxl',
}

const buttonVariants = {
  fill: 'btn-fill',
  fade: 'btn-fade',
  light: 'btn-light',
  contur: 'btn-contur',
}

const buttonEffects = {
  swipe: 'btn-swipe',
  glow: 'btn-glow',
}

const buttonTypes = {
  button: 'button',
  reset: 'reset',
  submit: 'submit',
}

export const Button = ({
  Tag = 'button',
  color,
  size = 'lg',
  variant = 'fill',
  effect,
  className,
  type = 'button',
  href,
  target = false,
  disabled = false,
  onClick = undefined,
  children,
}: ButtonProps): React.JSX.Element => {
  const classNames: string = classnames(
    'btn',
    color ? buttonColors[color] : null,
    size ? buttonSizes[size] : null,
    variant ? buttonVariants[variant] : null,
    effect ? buttonEffects[effect] : null,
    className
  )

  return (
    <Tag
      className={classNames}
      type={Tag === 'button' ? buttonTypes[type] : null}
      href={Tag === 'a' ? href : null}
      target={target ? '_blank' : null}
      disabled={Tag === 'button' ? disabled : null}
      onClick={onClick}
    >
      {children}
    </Tag>
  )
}
