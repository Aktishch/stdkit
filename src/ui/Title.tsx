import React, { forwardRef } from 'react'
import classnames from 'classnames'

const TitleComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLHeadingElement>,
  ref: React.ForwardedRef<HTMLHeadingElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'font-medium',
    'text-24',
    'leading-2',
    className
  )

  return (
    <h1 className={classNames} ref={ref}>
      {children}
    </h1>
  )
}

export const Title = forwardRef(
  TitleComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLHeadingElement> &
    React.RefAttributes<HTMLHeadingElement>
>
