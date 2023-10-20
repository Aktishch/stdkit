import React from 'react'
// import { useContext } from 'react'
import classnames from 'classnames'
// import { ThemeContext } from '../../contexts/ThemeContext'

interface buttonProps {
  color: string | null
  size: string
  variant: string
  effect: string | null
  classes: string | null
  children: HTMLElement | string
  disabled: boolean
  onClick: void
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

const Button = ({
  color = null,
  size = 'lg',
  variant = 'fill',
  effect = null,
  classes = null,
  children,
  disabled,
  onClick,
}: buttonProps) => {
  // const theme = useContext(ThemeContext)

  // console.log(theme)
  const classNames = classnames(
    'btn',
    color ? buttonColor[color] : null,
    size ? buttonSize[size] : null,
    variant ? buttonVariant[variant] : null,
    effect ? buttonEffect[effect] : null,
    classes
  )

  return (
    <button className={classNames} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export { Button }
