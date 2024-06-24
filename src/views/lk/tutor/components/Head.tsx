import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const Head = ({ className, children }: Props) => {
  const style: string = twMerge(
    'flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 mb-8',
    className
  )

  return <div className={style}>{children}</div>
}
