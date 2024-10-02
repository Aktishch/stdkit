import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { TableRow, TableCol } from '@views/company/components'
import { InputHours } from '@views/company/Time/components'

export interface MonthProps extends Props {
  monthLength: number[]
  item: {
    name: string
    dates: {
      value: number
      weekend: boolean
    }[]
  }
  number: number
}

export const Month = ({ className, monthLength, item, number }: MonthProps) => {
  const style: string = twMerge('px-4', className)
  const { name, dates } = item

  return (
    <TableRow className={style}>
      <TableCol className="text-sm text-center w-7">{++number}</TableCol>
      <TableCol className="text-sm truncate w-44">{name}</TableCol>
      <div className="flex items-center gap-1">
        {monthLength.map((_, index) => (
          <InputHours
            defaultValue={dates[index] ? dates[index].value : 0}
            disabled={dates[index] ? dates[index].weekend : true}
            name={`day-${index + 1}`}
            key={index}
          />
        ))}
      </div>
      <TableCol className="w-10 text-sm text-center">0</TableCol>
    </TableRow>
  )
}
