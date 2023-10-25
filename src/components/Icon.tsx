import React from 'react'
import classnames from 'classnames'

interface iconProps {
  id: string
  className?: string | null
}

export const Icon = ({ id, className = null }: iconProps) => {
  const classNames: string = classnames('icon', className)

  return (
    <svg className={classNames}>
      <use xlinkHref={`img/icons.svg#${id}`}></use>
    </svg>
  )
}
