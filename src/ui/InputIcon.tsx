import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@ui/Icon'

interface InputIconProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  id: string
  right?: boolean
  pointer?: boolean
}

export const InputIcon = ({
  id,
  right = false,
  pointer = false,
  className,
  ...props
}: InputIconProps) => {
  const style: string = twMerge(
    'form-icon',
    right ? 'form-icon-right' : 'form-icon-left',
    pointer ? 'form-icon-pointer' : null,
    className
  )

  return (
    <div className={style} {...props}>
      <Icon id={id} />
    </div>
  )
}
