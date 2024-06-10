import React from 'react'
import { twMerge } from 'tailwind-merge'

export const AuthSubtitle = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLParagraphElement>) => {
  const style: string = twMerge(
    'font-normal leading-5 text-center text-sm sm:text-base opacity-60 mb-7 md:mb-10',
    className
  )

  return <p className={style}>{children}</p>
}
