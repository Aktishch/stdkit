import { Icon, Menu, MenuButton, MenuItems } from '@components'
import { CalendarDate, InputCalendarProps, TSXComponent } from '@utils'
import React, { forwardRef, useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { twMerge } from 'tailwind-merge'

const InputCalendarComponent = (
  { className, date = null, value, setValue, ...props }: InputCalendarProps,
  ref: React.ForwardedRef<HTMLInputElement>
): TSXComponent => {
  const style: string = twMerge('pr-12', className)
  const [dates, setDates] = useState<CalendarDate>(date)

  const dateFormat = (dates: CalendarDate): string => {
    if (dates !== null && typeof dates === 'object' && 'toLocaleDateString' in dates) {
      return dates.toLocaleDateString()
    } else if (value !== undefined) {
      return String(value)
    } else {
      return ''
    }
  }

  useEffect((): void => setValue?.('date', dateFormat(dates)), [dates])

  return (
    <Menu className="relative">
      <MenuButton className="relative w-full">
        <input className={style} type="text" placeholder="00.00.0000" value={dateFormat(dates)} {...props} ref={ref} />
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

export const InputCalendar = forwardRef(InputCalendarComponent) as React.ForwardRefExoticComponent<
  InputCalendarProps & React.RefAttributes<HTMLInputElement>
>
