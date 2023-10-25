import React from 'react'
import classnames from 'classnames'

interface containerProps {
  Tag?: string
  distance?: boolean
  xs?: boolean
  className?: string | null
  children?: HTMLElement | SVGElement | string
}

export const Container = ({
  Tag = 'section',
  distance = false,
  xs = false,
  className = null,
  children,
}: containerProps) => {
  const classNames: string = classnames(
    'container',
    distance ? 'container-distance' : null,
    xs ? 'container-xs' : null,
    className
  )

  return <Tag className={classNames}>{children}</Tag>
}
