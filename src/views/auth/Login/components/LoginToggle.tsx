import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Waved } from '@components/Waved'

const LoginToggleComponent = (
  {
    className,
    onClick = undefined,
    children,
  }: React.HtmlHTMLAttributes<HTMLDivElement>,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'flex-grow',
    'relative',
    'flex',
    'items-center',
    'justify-center',
    'w-full',
    'h-full',
    'cursor-pointer',
    'text-center',
    'text-16',
    'leading-1',
    'duration-2',
    'hover:bg-grey',
    'dark:hover:bg-primary',
    'dark:hover:bg-opacity-20',
    className
  )

  return (
    <div className={classNames} onClick={onClick} ref={ref}>
      <Waved variant="dark" />
      {children}
    </div>
  )
}

export const LoginToggle = forwardRef(
  LoginToggleComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>
