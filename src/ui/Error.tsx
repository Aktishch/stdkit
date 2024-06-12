import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

export const Error = ({ className, children }: Props) => {
  const style: string = twMerge('form-error', className)

  return <span className={style}>{children}</span>
}
