import React, { ElementType, forwardRef } from 'react'
import classnames from 'classnames'

interface PackProps extends React.ButtonHTMLAttributes<HTMLElement> {
  as?: ElementType
  size: string | null
  href?: string | null
  target?: boolean
}

const packSizes = {
  half: 'pack-half',
  sm: 'pack-rect-sm',
  md: 'pack-rect-md',
  lg: 'pack-rect-lg',
  box: 'pack-box',
  sheet: 'pack-sheet',
}

const PackComponent = (
  { as: Tag = 'div', size = 'box', className, href, target = false, onClick, children }: PackProps,
  ref: React.ForwardedRef<HTMLElement>
): React.JSX.Element => {
  const classNames: string = classnames('pack', size ? packSizes[size] : null, className)

  return (
    <Tag className={classNames} href={href} target={target ? '_blank' : null} onClick={onClick} ref={ref}>
      {children}
    </Tag>
  )
}

export const Pack = forwardRef(PackComponent) as React.ForwardRefExoticComponent<
  PackProps & React.RefAttributes<HTMLElement>
>
