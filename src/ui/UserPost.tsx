import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const UserPost = ({ className, children }: Props) => {
  const style: string = twMerge(
    'font-normal truncate text-sm leading-4 opacity-40',
    className
  )

  return <span className={style}>{children}</span>
}
