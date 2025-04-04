import { IconProps, TSXComponent } from '@utils'
import { twMerge } from 'tailwind-merge'

export const Icon = ({ className, id }: IconProps): TSXComponent => {
  const style: string = twMerge('icon', className)

  return (
    <svg className={style}>
      <use xlinkHref={`/img/icons.svg#${id}`} />
    </svg>
  )
}
