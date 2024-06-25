import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const ContentPrimary = ({ className, children }: Props) => {
  const style: string = twMerge(
    'flex justify-between gap-7 sm:gap-10 md:gap-16 w-full xl:max-w-[910px]',
    className
  )

  return <div className={style}>{children}</div>
}
