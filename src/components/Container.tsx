import React from 'react'
import classnames from 'classnames'

interface containerProps {
  Tag?: string
  distance?: boolean
  xs?: boolean
  classes?: string | null
  children?: HTMLElement | SVGElement | string
}

export const Container = ({ Tag = 'section', distance = false, xs = false, classes, children }: containerProps) => {
  const classNames = classnames(
    'container',
    distance ? 'container-distance' : null,
    xs ? 'container-xs' : null,
    classes
  )

  return <Tag className={classNames}>{children}</Tag>
}
