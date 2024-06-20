import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export interface LkTableElementProps extends Props {
  as?: ElementType
}

export const LkTableElement = ({
  as: Tag = 'td',
  className,
  children,
}: LkTableElementProps) => {
  const style: string = twMerge(
    'text-base font-normal leading-4 w-full',
    className
  )

  return <Tag className={style}>{children}</Tag>
}
