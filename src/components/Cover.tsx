import React, { forwardRef } from 'react'
import classnames from 'classnames'

interface CoverProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  size?: string | null
}

const coverSizes = {
  1: 'input-cover-1',
  2: 'input-cover-2',
  3: 'input-cover-3',
  4: 'input-cover-4',
  5: 'input-cover-5',
  6: 'input-cover-6',
  7: 'input-cover-7',
  8: 'input-cover-8',
  9: 'input-cover-9',
  10: 'input-cover-10',
  full: 'input-cover-full',
}

const CoverComponent = (
  { size = null, className, children }: CoverProps,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const classNames: string = classnames('input-cover', size ? coverSizes[size] : null, className)

  return (
    <div className={classNames} ref={ref}>
      {children}
    </div>
  )
}

export const Cover = forwardRef(CoverComponent) as React.ForwardRefExoticComponent<
  CoverProps & React.RefAttributes<HTMLDivElement>
>
