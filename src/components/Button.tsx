import React from 'react'
import classnames from 'classnames'

interface buttonProps {
  Tag?: string
  color: string | null
  size?: string | null
  variant?: string | null
  effect?: string | null
  classes?: string | null
  type?: string | boolean
  href?: string | null
  disabled?: boolean
  onClick?: () => void | undefined
  children?: HTMLElement | SVGElement | string
}

const buttonColor = {
  primary: 'btn-primary',
  second: 'btn-second',
}

const buttonSize = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
  xxl: 'btn-xxl',
}

const buttonVariant = {
  fill: 'btn-fill',
  fade: 'btn-fade',
  light: 'btn-light',
  contur: 'btn-contur',
}

const buttonEffect = {
  swipe: 'btn-swipe',
  glow: 'btn-glow',
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
    color ? buttonColor[color] : null,
    size ? buttonSize[size] : null,
    variant ? buttonVariant[variant] : null,
    effect ? buttonEffect[effect] : null,
    classes
  )

  return (
    <Tag
      className={classNames}
      disabled={Tag === 'button' ? disabled : null}
      type={Tag === 'button' ? type : null}
      href={Tag === 'button' ? null : href}
      onClick={onClick}
    >
      {children}
    </Tag>
  )
}
