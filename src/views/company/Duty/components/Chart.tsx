import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Avatar } from '@components'

export interface ChartProps extends Props {
  item: {
    src?: string | undefined
    name: string
    work: string
    period: string
  }
}

export const Chart = ({ className, item }: ChartProps) => {
  const style: string = twMerge(
    'flex items-center justify-between gap-3 py-2 text-sm lg:text-base font-normal border-b border-solid lg:gap-6 border-grey',
    className
  )
  const { src, name, work, period } = item

  return (
    <div className={style}>
      <Avatar
        className="text-base lg:text-2xl size-7 lg:size-10"
        src={src}
        load={true}
      />
      <span className="truncate w-44 lg:w-72 shrink-0">{name}</span>
      <span className="w-20 lg:w-24 shrink-0">{work}</span>
      <span className="w-44 lg:w-72 shrink-0">{period}</span>
    </div>
  )
}
