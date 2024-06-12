import { twMerge } from 'tailwind-merge'
import { Props } from '@utils/props'

interface IconProps extends Props {
  id: string
}

export const Icon = ({ id, className }: IconProps) => {
  const style: string = twMerge('icon', className)

  return (
    <svg className={style}>
      <use xlinkHref={`/img/icons.svg#${id}`} />
    </svg>
  )
}
