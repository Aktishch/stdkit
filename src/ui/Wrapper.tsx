import React, { forwardRef } from 'react'
import classnames from 'classnames'

const WrapperComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLDivElement>,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const classNames: string = classnames('form-wrapper', className)

  return (
    <div className={classNames} ref={ref}>
      {children}
    </div>
  )
}

export const Wrapper = forwardRef(
  WrapperComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>
