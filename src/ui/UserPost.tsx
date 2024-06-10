import React from 'react'
import { twMerge } from 'tailwind-merge'

export const UserPost = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLSpanElement>) => {
  const style: string = twMerge(
    'font-normal truncate text-sm leading-4 opacity-40',
    className
  )

  return <span className={style}>{children}</span>
}
