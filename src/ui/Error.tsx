import React, { forwardRef } from 'react'
import classnames from 'classnames'

const ErrorComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLSpanElement>,
  ref: React.ForwardedRef<HTMLSpanElement>
): React.JSX.Element => {
  const classNames: string = classnames('form-error', className)

  return (
    <span className={classNames} data-error ref={ref}>
      {children}
    </span>
  )
}

export const Error = forwardRef(
  ErrorComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLSpanElement> &
    React.RefAttributes<HTMLSpanElement>
>
