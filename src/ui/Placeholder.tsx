import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const Placeholder = ({ className, children }: Props) => {
  const style: string = twMerge(
    'absolute left-4 flex items-center duration-200 pointer-events-none rounded text-base px-1',
    className
  )

  return <span className={style}>{children}</span>
}
