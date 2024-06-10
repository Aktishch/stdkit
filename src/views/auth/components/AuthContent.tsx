import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const AuthContent = ({ className, children }: Props) => {
  const style: string = twMerge(
    'w-full max-w-[435px] bg-white dark:bg-dark rounded-3xl pt-10 md:pt-14 px-4 sm:px-8 pb-7 md:pb-10 relative',
    className
  )

  return <div className={style}>{children}</div>
}
