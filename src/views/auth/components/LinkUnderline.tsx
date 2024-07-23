import React, { ElementType } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export interface LinkUnderlineProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: ElementType
  to?: string | null
}

export const LinkUnderline = ({
  as: Tag = Link,
  className,
  to = null,
  children,
  ...props
}: LinkUnderlineProps) => {
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
