import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Icon, Preview } from '@components'
import { TableRow, TableCol } from '@views/company/components'

export interface ChartProps extends Props {
  item: {
    src?: string | undefined
    name: string
    work: string
    period: string
    rating: number
    active: boolean
    checked: boolean
  }
  onClick?: () => void
}

export const Chart = ({ className, item, onClick }: ChartProps) => {
  const ratingLength: number[] = [...Array(5).keys()]
  const { src, name, work, period, rating, active, checked } = item
  const style: string = twMerge(
    'group cursor-pointer',
    active || !checked ? 'pointer-events-none' : null,
    className
  )

  return (
    <div className={style} onClick={onClick}>
      <TableRow
        className={`duration-200 group-hover:bg-grey/50 ${active ? 'bg-grey/50 print:bg-transparent' : ''}`}
      >
        <Preview
          className="text-base lg:text-2xl size-7 lg:size-10"
          src={src}
          load={true}
        />
        <TableCol className="truncate w-44 lg:w-72">{name}</TableCol>
        <TableCol className="w-20 lg:w-24">{work}</TableCol>
        <TableCol className="w-44 lg:w-48">{period}</TableCol>
        <TableCol className="w-32 text-center print:hidden">
          {active ? (
            'Дежурный'
          ) : (
            <div className="flex items-center justify-center w-full gap-2">
              {ratingLength.map((_, index) => (
                <Icon
                  className={`text-base lg:text-lg text-primary ${rating >= index + 1 ? '' : 'text-opacity-50'}`}
                  id="star"
                  key={index}
                />
              ))}
            </div>
          )}
        </TableCol>
      </TableRow>
    </div>
  )
}
