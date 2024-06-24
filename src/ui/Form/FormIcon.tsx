import React, { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@ui/Icon'

interface FormIconProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  as?: ElementType
  id: string
  right?: boolean
  pointer?: boolean
  type?: string
}

export const FormIcon = ({
  as: Tag = 'div',
  id,
  right = false,
  pointer = false,
  type = 'button',
  className,
  ...props
}: FormIconProps) => {
  const style: string = twMerge(
    'form-icon',
    right ? 'form-icon-right' : 'form-icon-left',
    pointer ? 'form-icon-pointer' : null,
    className
  )

  return (
    <Tag className={style} type={Tag === 'button' ? type : null} {...props}>
      <Icon id={id} />
    </Tag>
  )
}
