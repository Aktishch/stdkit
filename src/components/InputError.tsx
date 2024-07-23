import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'

export const InputError = ({ className, children }: Props) => {
  const style: string = twMerge('input-error', className)

  return <span className={style}>{children}</span>
}
