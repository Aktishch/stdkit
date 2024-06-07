import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const TitleComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLHeadingElement>,
  ref: React.ForwardedRef<HTMLHeadingElement>
) => {
  const classNames = twMerge('font-medium text-24 leading-2', className)

  return (
    <h1 className={classNames} ref={ref}>
      {children}
    </h1>
  )
}

export const Title = forwardRef(TitleComponent)
