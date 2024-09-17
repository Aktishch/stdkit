import React from 'react'
import { twMerge } from 'tailwind-merge'

export const PaginationButton = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const style: string = twMerge(
    'rounded-lg btn btn-primary size-8 sm:size-11 font-normal',
    className
  )

  return (
    <button className={style} type="submit" {...props}>
      {children}
    </button>
  )
}
