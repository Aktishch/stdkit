import React, { forwardRef } from 'react'
import classnames from 'classnames'

const LkSidebarComponent = (
  { className, children }: React.HtmlHTMLAttributes<HTMLDivElement>,
  ref: React.ForwardedRef<HTMLDivElement>
): React.JSX.Element => {
  const classNames: string = classnames('w-full', 'xs:max-w-[250px]', className)

  return (
    <div className={classNames} ref={ref}>
      <div className="md:sticky md:left-0 md:right-0 md:top-28">{children}</div>
    </div>
  )
}

export const LkSidebar = forwardRef(
  LkSidebarComponent
) as React.ForwardRefExoticComponent<
  React.HtmlHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>
