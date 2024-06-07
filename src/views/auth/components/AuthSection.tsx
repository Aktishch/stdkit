import React from 'react'
import { twMerge } from 'tailwind-merge'

export const AuthSection = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLElement>) => {
  const style: string = twMerge(
    'container relative flex items-center justify-center min-h-screen',
    className
  )

  return <section className={style}>{children}</section>
}
