import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Form = ({
  className,
  children,
  ...props
}: React.FormHTMLAttributes<HTMLFormElement>) => {
  const style: string = twMerge('form', className)

  return (
    <form className={style} {...props}>
      {children}
    </form>
  )
}
