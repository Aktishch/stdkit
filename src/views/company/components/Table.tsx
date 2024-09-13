import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'

export interface TableProps extends Props {
  minWidth?: string | undefined
}

export const Table = ({
  className,
  minWidth = undefined,
  children,
}: TableProps) => {
  const style: string = twMerge('px-4 -mx-4 overflow-auto', className)

  return (
    <div className={style}>
      <div className={minWidth}>{children}</div>
    </div>
  )
}
