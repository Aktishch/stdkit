import React, { forwardRef } from 'react'
import classnames from 'classnames'

interface TitleProps extends React.PropsWithChildren {
  className?: string
}

const SubtitleComponent = (
  { className, children }: TitleProps,
  ref: React.ForwardedRef<HTMLHeadingElement>
): React.JSX.Element => {
  const classNames: string = classnames('font-semibold', 'text-center', 'text-16', 'md:text-18', 'leading-2', className)

  return (
    <h3 className={classNames} ref={ref}>
      {children}
    </h3>
  )
}

export const Subtitle = forwardRef(SubtitleComponent) as React.ForwardRefExoticComponent<
  TitleProps & React.RefAttributes<HTMLHeadingElement>
>
