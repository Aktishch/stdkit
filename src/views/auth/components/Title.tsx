import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'

export const Title = ({ className, children }: Props) => {
  const style: string = twMerge(
    'mb-2 font-medium text-center sm:mb-4 text-xl/normal sm:text-2xl/normal',
    className
  )

  return <h4 className={style}>{children}</h4>
}
