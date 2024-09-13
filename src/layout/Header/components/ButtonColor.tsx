import React from 'react'
import { twMerge } from 'tailwind-merge'

export const ButtonColor = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const style: string = twMerge(
    'btn btn-primary btn-fill border border-solid rounded-full size-5 shrink-0 border-grey',
    className
  )

  return <button className={style} {...props} />
}
