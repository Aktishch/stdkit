import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const Subtitle = ({ className, children }: Props) => {
  const style: string = twMerge(
    'font-normal leading-normal text-center text-sm sm:text-base opacity-60 mb-7 md:mb-10',
    className
  )

  return <p className={style}>{children}</p>
}
