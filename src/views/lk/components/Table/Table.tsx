import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

const tableMinWidth = {
  none: null,
  lg: 'min-w-[910px]',
  xl: 'min-w-[1230px]',
}

interface TableProps extends Props {
  minWidth?: keyof typeof tableMinWidth
}

export const Table = ({ className, minWidth = 'xl', children }: TableProps) => {
  const style: string = twMerge(
    tableMinWidth[minWidth] !== null ? 'overflow-auto' : null,
    'px-4 sm:px-0 -mx-4 sm:mx-0',
    className
  )

  return (
    <div className={style}>
      <div
        className={`flex flex-col text-base font-normal leading-tight ${tableMinWidth[minWidth]}`}
      >
        {children}
      </div>
    </div>
  )
}
