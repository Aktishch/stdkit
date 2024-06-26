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
type InputRef = React.ForwardedRef<HTMLInputElement>

export interface InputProps extends Extension {
  size?: keyof typeof inputSizes | null
}

const InputComponent = (
  { size = 'lg', type = 'text', className, ...props }: InputProps,
  ref: InputRef
) => {
  const style: string = twMerge(
    'input',
    size ? inputSizes[size] : null,
    className
  )

  return (
    <input
      className={type === 'hidden' || type === 'file' ? 'hidden' : style}
      type={type}
      ref={ref}
      {...props}
    />
  )
}

export const Input = React.forwardRef(InputComponent)
