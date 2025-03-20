import { Icon } from '@components'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface HeadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
}

export const HeadButton = ({ className, id, children, ...props }: HeadButtonProps) => {
  const style: string = twMerge('w-full btn btn-primary btn-lg btn-fade xs:max-w-52', className)

  return (
    <button className={style} {...props}>
      <Icon className="mr-2 text-2xl" id={id} />
      {children}
    </button>
  )
}
