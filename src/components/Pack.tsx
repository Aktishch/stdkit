import React from 'react'
import classnames from 'classnames'

interface PackProps extends React.PropsWithChildren {
  Tag?: string
  size: string
  className?: string
  href?: string | null
  onClick?: (() => void | undefined) | undefined
}

const packSizes = {
  half: 'pack-half',
  sm: 'pack-rect-sm',
  md: 'pack-rect-md',
  lg: 'pack-rect-lg',
  box: 'pack-box',
  sheet: 'pack-sheet',
}

export const Pack = ({
  Tag = 'div',
  size = 'box',
  className,
  href,
  onClick,
  children,
}: PackProps): React.JSX.Element => {
  const classNames: string = classnames('pack', size ? packSizes[size] : null, className)

  return (
    <Tag className={classNames} href={Tag === 'a' ? href : null} onClick={onClick}>
      {children}
    </Tag>
  )
}
