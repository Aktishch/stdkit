import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Icon } from '@ui/Icon'

const LogoComponent = (
  { className }: React.HtmlHTMLAttributes<HTMLDivElement>,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const classNames: string = classnames(
    'flex',
    'flex-col',
    'items-center',
    'justify-center',
    'mb-12',
    'md:mt-6',
    'lg:mb-24',
    className
  )

  return (
    <div className={classNames} ref={ref}>
      <Icon
        className="w-24 h-3 mb-5 min-w-24 md:mb-8 opacity-60"
        id="practice"
      />
      <Icon className="w-56 h-16 min-w-56" id="logo" />
    </div>
  )
}

export const Logo = forwardRef(LogoComponent) as (
  { className }: React.HtmlHTMLAttributes<HTMLDivElement>,
  ref: React.ForwardedRef<HTMLDivElement>
) => React.JSX.Element
