import React from 'react'
import { twMerge } from 'tailwind-merge'

export const AuthTitle = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  const style: string = twMerge(
    'mb-2 font-medium text-center sm:mb-4 text-xl sm:text-2xl leading-7',
    className
  )

  return <h4 className={style}>{children}</h4>
}
