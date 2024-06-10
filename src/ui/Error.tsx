import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Error = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLSpanElement>) => {
  const style: string = twMerge('form-error', className)

  return <span className={style}>{children}</span>
}
