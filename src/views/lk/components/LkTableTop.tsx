import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const LkTableTop = ({ className, children }: Props) => {
  const style: string = twMerge(
    'flex items-center justify-between gap-10 py-4 rounded-lg bg-grey',
    className
  )

  return <tr className={style}>{children}</tr>
}
