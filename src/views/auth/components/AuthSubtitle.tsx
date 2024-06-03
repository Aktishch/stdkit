import React, { forwardRef } from 'react'
import classnames from 'classnames'

const AuthSubtitleComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLParagraphElement>,
  ref: React.ForwardedRef<HTMLParagraphElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'font-normal',
    'leading-4',
    'text-center',
    'text-14',
    'sm:text-16',
    'opacity-60',
    'mb-7',
    'md:mb-10',
    className
  )

  return (
    <p className={classNames} ref={ref}>
      {children}
    </p>
  )
}

export const AuthSubtitle = forwardRef(
  AuthSubtitleComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLParagraphElement> &
    React.RefAttributes<HTMLParagraphElement>
>
