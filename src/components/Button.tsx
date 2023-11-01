import React, { ElementType, forwardRef } from 'react'
import classnames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ElementType
  size?: string | null
  variant?: string | null
  effect?: string | null
  href?: string | null
  target?: boolean
  to?: string | null
}

const buttonColors = {
  primary: 'btn-primary',
  second: 'btn-second',
  white: 'btn-white',
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

const ButtonComponent = (
  {
    as: Tag = 'button',
    color,
    size = 'lg',
    variant = 'fill',
    effect,
    className,
    type = 'button',
    href,
    target = false,
    to,
    disabled = false,
    onClick = undefined,
    children,
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>
): React.JSX.Element => {
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
      type={Tag === 'button' ? type : null}
      href={href}
      target={target ? '_blank' : null}
      to={to}
      disabled={Tag === 'button' ? disabled : null}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </Tag>
  )
}

export const Button = forwardRef(ButtonComponent) as React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLElement>
>
