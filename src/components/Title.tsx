import { Props } from '@utils'
import { twMerge } from 'tailwind-merge'

export const Title = ({ className, children }: Props) => {
  const style: string = twMerge('font-medium text-2xl', className)

  return <h1 className={style}>{children}</h1>
}
