import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@ui/Icon'

export const AuthLogo = ({
  className,
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const style: string = twMerge(
    'flex flex-col items-center justify-center mb-12 md:mt-6 lg:mb-24',
    className
  )

  return (
    <div className={style}>
      <Icon
        className="w-24 h-3 mb-5 min-w-24 md:mb-8 opacity-60"
        id="practice"
      />
      <Icon className="w-56 h-16 min-w-56" id="logo" />
    </div>
  )
}
