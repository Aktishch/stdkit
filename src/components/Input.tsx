import React, { ElementType, forwardRef } from 'react'
import classnames from 'classnames'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  as?: ElementType
  cover?: string | null
  color?: string | null
  size?: string | null
  fade?: boolean
  type?: string | null
  name?: string | null
}

const inputCover = {
  1: 'input-cover-1',
  2: 'input-cover-2',
  3: 'input-cover-3',
  4: 'input-cover-4',
  5: 'input-cover-5',
  6: 'input-cover-6',
  7: 'input-cover-7',
  8: 'input-cover-8',
  9: 'input-cover-9',
  10: 'input-cover-10',
  full: 'input-cover-full',
}

const inputColors = {
  gray: 'input-gray',
}

const inputSizes = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
  xl: 'input-xl',
  xxl: 'input-xxl',
}

const InputComponent = (
  {
    as: Tag = 'input',
    cover = null,
    color = 'gray',
    size = 'lg',
    fade = false,
    type = 'text',
    name,
    className,
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'input',
    color ? inputColors[color] : null,
    size ? inputSizes[size] : null,
    fade ? 'input-fade' : null,
    className
  )

  return (
    <div className={`input-cover ${cover ? inputCover[cover] : null}`}>
      <Tag className={classNames} type={Tag === 'input' ? type : null} name={name} ref={ref} />
    </div>
  )
}

export const Input = forwardRef(InputComponent) as React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLInputElement>
>
