import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'
import { Waved } from '@components/Waved'

interface LoginToggleProps extends Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const LoginToggle = ({
  className,
  onClick,
  children,
}: LoginToggleProps) => {
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
