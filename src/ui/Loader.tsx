import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@ui/Icon'

export const Loader = ({
  className,
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const style: string = twMerge('loader', className)

  return (
    <div className={style}>
      <span className="loader-progress">
        <Icon className="loader-icon" id="loader" />
      </span>
    </div>
  )
}
