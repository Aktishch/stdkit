import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const TableHead = ({ className, children }: Props) => {
  const style: string = twMerge(
    'flex items-center justify-between gap-4 py-4 rounded-lg bg-grey dark:bg-dark',
    className
  )

  return <div className={style}>{children}</div>
}
