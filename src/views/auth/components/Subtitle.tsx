import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const SubtitleComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLHeadingElement>,
  ref: React.ForwardedRef<HTMLHeadingElement>
): React.JSX.Element => {
  const classNames: string = twMerge(
    'mb-2',
    'font-medium',
    'text-center',
    'sm:mb-4',
    'text-xl',
    'sm:text-2xl',
    'leading-7',
    className
  )

  return (
    <h4 className={classNames} ref={ref}>
      {children}
    </h4>
  )
}

export const Subtitle = forwardRef(
  SubtitleComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLHeadingElement> &
    React.RefAttributes<HTMLHeadingElement>
>
