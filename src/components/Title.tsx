import React, { ElementType, forwardRef } from 'react'
import classnames from 'classnames'

interface TitleProps extends React.PropsWithChildren {
  as?: ElementType
  className?: string
}

const TitleComponent = (
  { as: Tag = 'h2', className, children }: TitleProps,
  ref: React.ForwardedRef<HTMLHeadingElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'font-alt',
    'font-bold',
    'text-center',
    Tag === 'h1' ? 'text-48 lg:text-6xl' : 'text-36 lg:text-48',
    'leading-2',
    className
  )

  return (
    <Tag className={classNames} ref={ref}>
      {children}
    </Tag>
  )
}

export const Title = forwardRef(TitleComponent) as React.ForwardRefExoticComponent<
  TitleProps & React.RefAttributes<HTMLHeadingElement>
>
