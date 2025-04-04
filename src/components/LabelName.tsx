import { Props, TSXComponent } from '@utils'
import { twMerge } from 'tailwind-merge'

export const LabelName = ({ className, children }: Props): TSXComponent => {
  const style: string = twMerge('mb-2 font-normal text-sm/none', className)

  return <h5 className={style}>{children}</h5>
}
