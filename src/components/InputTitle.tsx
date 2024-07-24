import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'

export const InputTitle = ({ className, children }: Props) => {
  const style: string = twMerge('mb-2 font-normal text-sm/none', className)

  return <h5 className={style}>{children}</h5>
}
