import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const UserName = ({ className, children }: Props) => {
  const style: string = twMerge(
    'font-normal truncate text-base leading-none',
    className
  )

  return <span className={style}>{children}</span>
}
