import { Props } from '@utils'
import { twMerge } from 'tailwind-merge'

export const Title = ({ className, children }: Props) => {
  const style: string = twMerge('mb-2 font-medium text-center sm:mb-4 text-xl sm:text-2xl', className)

  return <h4 className={style}>{children}</h4>
}
