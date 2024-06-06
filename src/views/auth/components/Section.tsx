import React, { forwardRef } from 'react'
import classnames from 'classnames'

const SectionComponent = (
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

export const Section = forwardRef(
  SectionComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>
>
