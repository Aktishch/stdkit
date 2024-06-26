import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const DatesItems = ({ className, children }: Props) => {
  const style: string = twMerge(
    'grid grid-cols-1 gap-3 sm:grid-cols-2',
    className
  )

  return <div className={style}>{children}</div>
}
