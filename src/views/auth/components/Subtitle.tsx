import { Props } from '@utils'
import { twMerge } from 'tailwind-merge'

export const Subtitle = ({ className, children }: Props) => {
  const style: string = twMerge(
    'font-normal text-center text-sm/normal sm:text-base/normal opacity-60 mb-7 md:mb-10',
    className
  )

  return <p className={style}>{children}</p>
}
