import React, { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonColors = {
  primary: 'btn-primary',
  gray: 'btn-gray',
  grey: 'btn-grey',
  black: 'btn-black',
  red: 'btn-red',
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

type Extension = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>

export interface ButtonProps extends Extension {
  as?: ElementType
  color?: keyof typeof buttonColors | null
  size?: keyof typeof buttonSizes | null
  variant?: keyof typeof buttonVariants | null
  href?: string | null
  target?: boolean
  to?: string | null
}

export const Button = ({
  as: Tag = 'button',
  color = 'primary',
  size = 'lg',
  variant = 'fill',
  className,
  type = 'button',
  href,
  target = false,
  to,
  disabled = false,
  onClick,
  children,
}: ButtonProps) => {
  const style: string = twMerge(
    'btn',
    color ? buttonColors[color] : null,
    size ? buttonSizes[size] : null,
    variant ? buttonVariants[variant] : null,
    className
  )

  return (
    <Tag
      className={style}
      type={Tag === 'button' ? type : null}
      href={href}
      target={target ? '_blank' : null}
      to={to}
      disabled={Tag === 'button' ? disabled : null}
      draggable={false}
      onClick={onClick}
    >
      {children}
    </Tag>
  )
}
