import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Waved } from '@components/Waved'

export const LoginToggle = ({
  className,
  onClick = undefined,
  children,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const style: string = twMerge(
    'flex-grow relative flex items-center justify-center w-full h-full cursor-pointer text-center text-base duration-200 hover:bg-grey dark:hover:bg-primary dark:hover:bg-opacity-20',
    className
  )

  return (
    <button className={style} type="button" onClick={onClick}>
      <Waved variant="dark" />
      {children}
    </button>
  )
}
