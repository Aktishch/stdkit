import { Props } from '@utils'
import { twMerge } from 'tailwind-merge'

export const TableCol = ({ className, children }: Props) => {
  const style: string = twMerge('shrink-0', className)

  return <span className={style}>{children}</span>
}
