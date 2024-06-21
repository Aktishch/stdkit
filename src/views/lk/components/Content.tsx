import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const Content = ({ className, children }: Props) => {
  const style: string = twMerge(
    'flex flex-col justify-between gap-7 sm:gap-10 md:flex-row md:gap-16',
    className
  )

  return <div className={style}>{children}</div>
}
