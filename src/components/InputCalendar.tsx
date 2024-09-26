import React, { useState, useEffect, forwardRef } from 'react'
import Calendar from 'react-calendar'
import { UseFormSetValue } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { DataForm } from '@utils'
import { Menu, MenuButton, MenuItems, Icon } from '@components'

type DatePiece = Date | null
type Dates = DatePiece | [DatePiece, DatePiece]

export interface InputCalendarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  date?: Dates
  setValue?: UseFormSetValue<DataForm>
}

const dateFormat = (dates: Dates): string => {
  return dates !== null &&
    typeof dates === 'object' &&
    'toLocaleDateString' in dates
    ? dates.toLocaleDateString()
    : ''
}

const InputCalendarComponent = (
  { className, date = null, setValue, ...props }: InputCalendarProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const style: string = twMerge('pr-12', className)
  const [dates, setDates] = useState<Dates>(date)

  useEffect((): void => setValue?.('date', dateFormat(dates)), [dates])

  return (
    <Menu className="relative">
      <MenuButton className="relative w-full">
        <input
          className={style}
          type="text"
          placeholder="00.00.0000"
          value={dateFormat(dates)}
          {...props}
          ref={ref}
        />
        <span className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 h-full pointer-events-none">
          <Icon className="text-2xl opacity-50" id="calendar" />
        </span>
      </MenuButton>
      <MenuItems className="absolute left-0 right-0 z-10 top-full">
        <Calendar
          className="w-full overflow-hidden bg-white border border-solid calendar dark:bg-dark font-base border-gray rounded-xl"
          value={dates}
          onChange={setDates}
        />
      </MenuItems>
    </Menu>
  )
}

export const InputCalendar = forwardRef(InputCalendarComponent)
