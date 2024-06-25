import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

interface TableElementProps extends Props {
  as?: ElementType
  to?: string
  draggable?: boolean | null
}

export const TableElement = ({
  as: Tag = 'div',
  className,
  to,
  draggable = null,
  children,
}: TableElementProps) => {
  const style: string = twMerge(
    'flex items-center justify-between gap-4 py-2 border-b border-solid border-grey',
    className
  )

  return (
    <Tag className={style} draggable={draggable} to={to}>
      {children}
    </Tag>
  )
}
