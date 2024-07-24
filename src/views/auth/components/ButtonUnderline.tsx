import React, { ElementType } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export interface ButtonUnderlineProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: ElementType
  to?: string | null
}

export const ButtonUnderline = ({
  as: Tag = Link,
  className,
  to = null,
  children,
  ...props
}: ButtonUnderlineProps) => {
  const style: string = twMerge(
    'text-sm font-semibold text-black border-b border-black border-opacity-50 border-dashed sm:text-base dark:text-white dark:border-white btn btn-gray',
    className
  )

  return (
    <Tag className={style} to={to} {...props}>
      {children}
    </Tag>
  )
}
