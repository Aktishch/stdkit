import React, { forwardRef } from 'react'
import classnames from 'classnames'

const ContentComponent = (
  { children }: React.PropsWithChildren,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'w-full',
    'max-w-[435px]',
    'bg-white',
    'dark:bg-dark',
    'rounded-6',
    'pt-10',
    'md:pt-14',
    'px-4',
    'sm:px-8',
    'pb-7',
    'md:pb-10',
    'relative'
  )

  return (
    <div className={classNames} ref={ref}>
      {children}
    </div>
  )
}

export const Content = forwardRef(
  ContentComponent
) as React.ForwardRefExoticComponent<
  {
    children?: React.ReactNode
  } & React.RefAttributes<HTMLDivElement>
>
