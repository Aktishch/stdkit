import React from 'react'
import { twMerge } from 'tailwind-merge'

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
  size?: keyof typeof inputSizes | null
}

export const Input = ({
  size = 'lg',
  type = 'text',
  className,
  maxLength,
  ...props
}: InputProps) => {
  const style: string = twMerge(
    'input',
    size ? inputSizes[size] : null,
    className
  )

  return (
    <input
      className={type === 'hidden' || type === 'file' ? 'hidden' : style}
      type={type}
      maxLength={maxLength}
      {...props}
    />
  )
}
