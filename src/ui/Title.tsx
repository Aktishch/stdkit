import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Title = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  const classNames: string = twMerge(
    'font-medium text-2xl leading-7',
    className
  )

  return <h1 className={classNames}>{children}</h1>
}
