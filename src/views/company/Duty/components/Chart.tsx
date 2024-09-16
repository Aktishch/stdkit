import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Props } from '@utils'
import { Avatar } from '@components'
import { TableRow, TableCol } from '@views/company/components'
import { ButtonRating } from '@views/company/Duty/components'

export interface ChartProps extends Props {
  item: {
    src?: string | undefined
    name: string
    work: string
    period: string
    estimation?: number
    active: boolean
  }
}

export const Chart = ({ className, item }: ChartProps) => {
  const { src, name, work, period, estimation, active } = item
  const style: string = twMerge(
    active ? 'bg-grey/50 print:bg-transparent' : null,
    className
  )
  const [rating, setRating] = useState(estimation || 0)

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
      <TableCol className="w-32 text-center print:hidden">
        {active ? (
          'Дежурный'
        ) : (
          <div
            className={`flex flex-row-reverse items-center justify-center w-full gap-2 ${(estimation && estimation > 0) || (estimation === undefined && !active) ? 'pointer-events-none' : null}`}
          >
            <input type="hidden" defaultValue={`Оценка: ${rating}`} />
            <ButtonRating
              value={5}
              rating={rating}
              onClick={(): void => setRating(5)}
            />
            <ButtonRating
              value={4}
              rating={rating}
              onClick={(): void => setRating(4)}
            />
            <ButtonRating
              value={3}
              rating={rating}
              onClick={(): void => setRating(3)}
            />
            <ButtonRating
              value={2}
              rating={rating}
              onClick={(): void => setRating(2)}
            />
            <ButtonRating
              value={1}
              rating={rating}
              onClick={(): void => setRating(1)}
            />
          </div>
        )}
      </TableCol>
    </TableRow>
  )
}
