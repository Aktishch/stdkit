import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  id: string
}

export const Icon = ({ id, className }: IconProps) => {
  const style: string = twMerge('icon', className)

  return (
    <svg className={style}>
      <use xlinkHref={`/img/icons.svg#${id}`} />
    </svg>
  )
}
