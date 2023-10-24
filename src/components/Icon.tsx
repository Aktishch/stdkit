import React from 'react'
import classnames from 'classnames'

interface iconProps {
  id: string
  classes?: string | null
}

export const Icon = ({ id, classes = null }: iconProps) => {
  const classNames = classnames('icon', classes)

  return (
    <svg className={classNames}>
      <use xlinkHref={`img/icons.svg#${id}`}></use>
    </svg>
  )
}
