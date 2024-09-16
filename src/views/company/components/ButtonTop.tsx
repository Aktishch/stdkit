import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@components'

export interface ButtonTopProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
}

export const ButtonTop = ({
  className,
  id,
  children,
  ...props
}: ButtonTopProps) => {
  const style: string = twMerge(
    'w-full btn btn-primary btn-lg btn-fade xs:max-w-52',
    className
  )

  return (
    <button className={style} {...props}>
      <Icon className="mr-2 text-2xl" id={id} />
      {children}
    </button>
  )
}
