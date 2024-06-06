import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Picture } from '@ui/Picture'

interface ChapterProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  src: string
}

const ChapterComponent = (
  { className, children, src }: ChapterProps,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'flex',
    'items-center',
    'justify-between',
    className
  )

  return (
    <div className={classNames} ref={ref}>
      <h3 className="mr-2 font-semibold text-18 sm:text-20 leading-1">
        {children}
      </h3>
      <Picture className="icon text-24" src={src} />
    </div>
  )
}

export const Chapter = forwardRef(
  ChapterComponent
) as React.ForwardRefExoticComponent<
  ChapterProps & React.RefAttributes<HTMLDivElement>
>
