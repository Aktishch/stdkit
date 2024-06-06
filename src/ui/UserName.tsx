import React, { forwardRef } from 'react'
import classnames from 'classnames'

const UserNameComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLSpanElement>,
  ref: React.ForwardedRef<HTMLSpanElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'mb-1',
    'font-normal',
    'truncate',
    'text-16',
    'leading-1',
    className
  )

  return (
    <span className={classNames} ref={ref}>
      {children}
    </span>
  )
}

export const UserName = forwardRef(
  UserNameComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLSpanElement> &
    React.RefAttributes<HTMLSpanElement>
>
