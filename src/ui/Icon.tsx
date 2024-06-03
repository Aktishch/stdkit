import React, { forwardRef } from 'react'
import classnames from 'classnames'

interface IconProps {
  id: string
  className?: string
}

const IconComponent = (
  { id, className }: IconProps,
  ref: React.ForwardedRef<SVGSVGElement>
): React.JSX.Element => {
  const classNames: string = classnames('icon', className)

  return (
    <svg className={classNames} ref={ref}>
      <use xlinkHref={`img/icons.svg#${id}`} />
    </svg>
  )
}

export const Icon = forwardRef(
  IconComponent
) as React.ForwardRefExoticComponent<IconProps & React.RefAttributes<null>>
