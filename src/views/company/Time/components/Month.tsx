import { ButtonSubmit, Icon } from '@components'
import { useToggle } from '@hooks'
import { DataForm, Props } from '@utils'
import { TableCol, TableRow } from '@views/company/components'
import { InputHours } from '@views/company/Time/components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

export interface MonthProps extends Props {
  theme: string
  month: string
  monthLength: number[]
  editing: boolean
  item: {
    name: string
    dates: {
      value: number
      weekend: boolean
    }[]
  }
}

export const Month = ({ className, theme, month, monthLength, editing, item }: MonthProps) => {
  const { register, handleSubmit } = useForm<DataForm>()
  const [loadingValue, loadingOn, loadingOff] = useToggle()
  const style: string = twMerge(editing ? 'pointer-events-none' : null, className)
  const { name, dates } = item

  const submitHandler: SubmitHandler<DataForm> = async (data: DataForm) => {
    loadingOn()
    console.log(data)

    setTimeout(() => {
      loadingOff()
    }, 3000)
  }

  const getResult = (): number => {
    let result: number = 0

    dates.forEach((date: { value: number; weekend: boolean }): void => {
      if (date.value && typeof date.value === 'number') result += date.value
    })

    return result
  }

  return (
    <form className={style} onSubmit={handleSubmit(submitHandler)}>
      <input type="hidden" value={theme} {...register('form')} />
      <input type="hidden" value={month} {...register('month')} />
      <input type="hidden" value={name} {...register('name')} />
      <TableRow className="px-4">
        <TableCol className="w-40 text-sm truncate">{name}</TableCol>
        <div className="flex items-center gap-1">
          {monthLength.map((_, index) => (
            <InputHours
              defaultValue={dates[index] ? dates[index].value : 0}
              disabled={dates[index] ? dates[index].weekend : true}
              {...register(`day-${index + 1}`)}
              key={index}
            />
          ))}
        </div>
        <TableCol className="w-10 text-sm text-center">{getResult()}</TableCol>
        {editing ? null : (
          <ButtonSubmit className="rounded-full btn btn-primary btn-fill size-10 shrink-0" load={loadingValue}>
            <Icon className="text-2xl" id="success" />
          </ButtonSubmit>
        )}
      </TableRow>
    </form>
  )
}
