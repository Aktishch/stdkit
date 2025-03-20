import { Props } from '@utils'
import { twMerge } from 'tailwind-merge'

export const TableHead = ({ className, children }: Props) => {
  const style: string = twMerge(
    'flex items-center justify-between gap-3 py-3 text-sm font-normal rounded-lg lg:py-5 lg:gap-6 bg-grey dark:bg-primary lg:text-base',
    className
  )

  return <div className={style}>{children}</div>
}
