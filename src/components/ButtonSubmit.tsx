import { Loader } from '@components'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonSubmitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  load?: boolean
}

export const ButtonSubmit = ({ className, load = false, children, ...props }: ButtonSubmitProps) => {
  const style: string = twMerge(className)

  return (
    <button className={style} type="submit" disabled={load} {...props}>
      {load ? <Loader className="text-white" /> : children}
    </button>
  )
}
