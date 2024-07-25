import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Avatar } from '@components'

export interface ChartProps extends Props {
  item: {
    webp?: string | null
    src?: string | undefined
    name: string
    work: string
    period: string
  }
}

export const Chart = ({ className, item }: ChartProps) => {
  const style: string = twMerge(
    'flex items-center justify-between gap-3 py-2 border-b border-solid lg:gap-6 border-grey',
    className
  )
  const { webp, src, name, work, period } = item

  return (
    <div className={style}>
      <Avatar className="w-10" webp={webp} src={src} />
      <span className="font-normal truncate w-72 text-base/tight shrink-0">
        {name}
      </span>
      <span className="w-24 font-normal text-base/tight shrink-0">{work}</span>
      <span className="font-normal w-72 text-base/tight shrink-0">
        {period}
      </span>
    </div>
  )
}
