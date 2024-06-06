import React, { forwardRef } from 'react'
import classnames from 'classnames'

const SubtitleComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLHeadingElement>,
  ref: React.ForwardedRef<HTMLHeadingElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'mb-2',
    'font-medium',
    'text-center',
    'sm:mb-4',
    'text-20',
    'sm:text-24',
    'leading-2',
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
