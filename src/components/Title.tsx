import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'

export const Title = ({ className, children }: Props) => {
  const style: string = twMerge('font-medium text-2xl/normal', className)

  return <h1 className={style}>{children}</h1>
}
