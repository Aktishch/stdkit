import React from 'react'
import classnames from 'classnames'

interface IconProps {
  id: string
  className?: string
}

export const Icon = ({ id, className }: IconProps): React.JSX.Element => {
  const classNames: string = classnames('icon', className)

  return (
    <svg className={classNames}>
      <use xlinkHref={`img/icons.svg#${id}`}></use>
    </svg>
  )
}
