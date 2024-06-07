import React from 'react'
import { twMerge } from 'tailwind-merge'

export const UserName = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLSpanElement>) => {
  const style: string = twMerge(
    'mb-1 font-normal truncate text-base leading-4',
    className
  )

  return <span className={style}>{children}</span>
}
