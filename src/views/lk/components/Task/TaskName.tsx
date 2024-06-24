import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const TaskName = ({ className, children }: Props) => {
  const style: string = twMerge('pb-0.5 line-clamp-2', className)

  return <p className={style}>{children}</p>
}
