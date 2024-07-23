import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Icon } from '@components'

export const Loader = ({ className }: Props) => {
  const style: string = twMerge('loader', className)

  return (
    <div className={style}>
      <span className="loader-progress">
        <Icon className="loader-icon" id="loader" />
      </span>
    </div>
  )
}
