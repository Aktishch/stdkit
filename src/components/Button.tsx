import React from 'react'
import classnames from 'classnames'

interface buttonProps {
  Tag?: string
  color: string | null
  size?: string | null
  variant?: string | null
  effect?: string | null
  classes?: string | null
  type?: string
  href?: string | null
  disabled?: boolean
  onClick?: () => void | undefined
  children?: HTMLElement | SVGElement | string
}

const buttonColors = {
  primary: 'btn-primary',
  second: 'btn-second',
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
  color = null,
  size = 'lg',
  variant = 'fill',
  effect = null,
  classes = null,
  type = 'button',
  href = null,
  disabled = false,
  onClick = undefined,
  children,
}: buttonProps) => {
  const classNames = classnames(
    'btn',
    color ? buttonColors[color] : null,
    size ? buttonSizes[size] : null,
    variant ? buttonVariants[variant] : null,
    effect ? buttonEffects[effect] : null,
    classes
  )

  return (
    <Tag
      className={classNames}
      type={Tag === 'button' ? buttonTypes[type] : null}
      href={Tag === 'a' ? href : null}
      disabled={Tag === 'button' ? disabled : null}
      onClick={onClick}
    >
      {children}
    </Tag>
  )
}
