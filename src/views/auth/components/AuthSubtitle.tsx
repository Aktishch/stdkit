import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const AuthSubtitle = ({ className, children }: Props) => {
  const style: string = twMerge(
    'font-normal leading-5 text-center text-sm sm:text-base opacity-60 mb-7 md:mb-10',
    className
  )

  return <p className={style}>{children}</p>
}
