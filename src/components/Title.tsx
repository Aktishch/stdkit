import React from 'react'
import classnames from 'classnames'

interface TitleProps extends React.PropsWithChildren {
  className?: string
}

export const Title = ({ className, children }: TitleProps): React.JSX.Element => {
  const classNames: string = classnames(
    'font-alt',
    'font-bold',
    'text-center',
    'text-48',
    'lg:text-6xl',
    'leading-2',
    className
  )

  return <h1 className={classNames}>{children}</h1>
}
