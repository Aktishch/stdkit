import { Props, TSXComponent } from '@utils'
import { twMerge } from 'tailwind-merge'

export const Error = ({ className, children }: Props): TSXComponent => {
  const style: string = twMerge(
    'flex items-center justify-end absolute left-0 right-0 -bottom-4 text-red text-xs h-4',
    className
  )

  return <span className={style}>{children}</span>
}
