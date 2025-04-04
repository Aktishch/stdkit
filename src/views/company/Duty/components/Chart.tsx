import { Icon, Preview } from '@components'
import { DutyType, Props, TSXComponent } from '@utils'
import { TableCol, TableRow } from '@views/company/components'
import { twMerge } from 'tailwind-merge'

interface ChartProps extends Props {
  item: DutyType
  onClick?: () => void
}

export const Chart = ({ className, item, onClick }: ChartProps): TSXComponent => {
  const ratingLength: number[] = [...Array(5).keys()]
  const { src, name, work, period, rating, active, checked } = item
  const style: string = twMerge('group cursor-pointer', active || !checked ? 'pointer-events-none' : null, className)

  return (
    <div className={style} onClick={onClick}>
      <TableRow className={`transition group-hover:bg-grey/50 ${active ? 'bg-grey/50 print:bg-transparent' : ''}`}>
        <Preview className="text-base lg:text-2xl size-7 lg:size-10" src={src} load={true} />
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
                  className={`text-base lg:text-lg text-primary ${rating >= index + 1 ? '' : 'opacity-50'}`}
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
