import React, { forwardRef } from 'react'
import classnames from 'classnames'

const UserPostComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLSpanElement>,
  ref: React.ForwardedRef<HTMLSpanElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'font-normal',
    'truncate',
    'text-14',
    'leading-1',
    'opacity-40',
    className
  )

  return (
    <span className={classNames} ref={ref}>
      {children}
    </span>
  )
}

export const UserPost = forwardRef(
  UserPostComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLSpanElement> &
    React.RefAttributes<HTMLSpanElement>
>
