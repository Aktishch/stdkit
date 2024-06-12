import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const AuthTitle = ({ className, children }: Props) => {
  const style: string = twMerge(
    'mb-2 font-medium text-center sm:mb-4 text-xl sm:text-2xl leading-7',
    className
  )

  return <h4 className={style}>{children}</h4>
}
