import React, { forwardRef } from 'react'
import classnames from 'classnames'

interface TitleProps extends React.PropsWithChildren {
  className?: string
}

const TitleComponent = (
  { className, children }: TitleProps,
  ref: React.ForwardedRef<HTMLHeadingElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'font-alt',
    'font-bold',
    'text-center',
    'text-48',
    'lg:text-6xl',
    'leading-2',
    className
  )

  return (
    <h1 className={classNames} ref={ref}>
      {children}
    </h1>
  )
}

export const Title = forwardRef(TitleComponent) as React.ForwardRefExoticComponent<
  TitleProps & React.RefAttributes<HTMLHeadingElement>
>
