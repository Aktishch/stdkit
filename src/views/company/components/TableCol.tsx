import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'

export const TableCol = ({ className, children }: Props) => {
  const style: string = twMerge('shrink-0', className)

  return <span className={style}>{children}</span>
}
