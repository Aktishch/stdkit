import React, { forwardRef } from 'react'
import classnames from 'classnames'

const AuthSectionComponent = (
  { children }: React.PropsWithChildren,
  ref: React.ForwardedRef<HTMLElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'container',
    'relative',
    'flex',
    'items-center',
    'justify-center',
    'min-h-screen'
  )

  return (
    <section className={classNames} ref={ref}>
      {children}
    </section>
  )
}

export const AuthSection = forwardRef(
  AuthSectionComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>
>
