import React from 'react'
import classnames from 'classnames'

export const Placeholder = ({
  className,
  children,
}: React.HtmlHTMLAttributes<HTMLSpanElement>): React.JSX.Element => {
  const classNames: string = classnames(
    'absolute left-4 flex items-center leading-1 duration-2 pointer-events-none rounded-1 px-1',
    className
  )

  return <span className={classNames}>{children}</span>
}
