import { TableProps, TSXComponent } from '@utils'
import { twMerge } from 'tailwind-merge'

export const Table = ({ className, minWidth = undefined, children }: TableProps): TSXComponent => {
  const style: string = twMerge('px-4 -mx-4 overflow-auto', className)

  return (
    <div className={style}>
      <div className={minWidth}>{children}</div>
    </div>
  )
}
