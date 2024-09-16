import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'

export const TableRow = ({ className, children }: Props) => {
  const style: string = twMerge(
    'flex items-center justify-between gap-3 py-2 text-sm lg:text-base font-normal border-b border-solid lg:gap-6 border-grey',
    className
  )

  return <div className={style}>{children}</div>
}