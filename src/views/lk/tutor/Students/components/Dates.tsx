import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

interface DatesProps extends Props {
  status: boolean
}

export const Dates = ({ className, status, children }: DatesProps) => {
  const style: string = twMerge(
    'flex items-center justify-center p-2 text-base font-normal leading-none rounded-full h-9 text-tenter text-black',
    status ? 'bg-green-light' : 'bg-grey text-opacity-50',
    className
  )

  return <div className={style}>{children}</div>
}
