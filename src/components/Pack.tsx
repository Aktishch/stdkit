import React from 'react'
import classnames from 'classnames'

interface packProps {
  Tag?: string
  size: string | null
  className?: string | null
  href?: string | null
  onClick?: () => void | undefined
  children?: HTMLElement | SVGElement | string
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
  className = null,
  href = null,
  onClick = undefined,
  children,
}: packProps) => {
  const classNames: string = classnames('pack', size ? packSizes[size] : null, className)

  return (
    <Tag className={classNames} href={Tag === 'a' ? href : null} onClick={onClick}>
      {children}
    </Tag>
  )
}
