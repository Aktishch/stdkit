import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Placeholder = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLSpanElement>) => {
  const style: string = twMerge(
    'absolute left-4 flex items-center duration-200 pointer-events-none rounded text-base px-1',
    className
  )

  return <span className={style}>{children}</span>
}
