import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Avatar } from '@components'
import { TableRow, TableCol } from '@views/company/components'

export interface ChartProps extends Props {
  item: {
    src?: string | undefined
    name: string
    work: string
    period: string
  }
}

export const Chart = ({ className, item }: ChartProps) => {
  const style: string = twMerge(className)
  const { src, name, work, period } = item

  return (
    <TableRow className={style}>
      <Avatar
        className="text-base lg:text-2xl size-7 lg:size-10"
        src={src}
        load={true}
      />
      <TableCol className="truncate w-44 lg:w-72">{name}</TableCol>
      <TableCol className="w-20 lg:w-24">{work}</TableCol>
      <TableCol className="w-44 lg:w-72">{period}</TableCol>
    </TableRow>
  )
}
