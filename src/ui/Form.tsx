import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Form = ({
  className,
  action = undefined,
  onSubmit = undefined,
  children,
}: React.FormHTMLAttributes<HTMLFormElement>) => {
  const style: string = twMerge('form', className)

  return (
    <form className={style} action={action} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
