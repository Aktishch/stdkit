import React, { useState, useEffect, forwardRef } from 'react'
import Calendar from 'react-calendar'
import { UseFormSetValue } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { useToggle } from '@hooks'
import { Icon } from '@components'

type DatePiece = Date | null
type Dates = DatePiece | [DatePiece, DatePiece]

export interface InputCalendarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  date?: Dates
  setValue?: UseFormSetValue<{
    form: string
    image: string | File | undefined
    office: boolean
    login: string
    surname: string
    name: string
    patronymic: string
    work: string
    tel: string
    email: string
    date: string
    password: string
  }>
}

const dateFormat = (dates: Dates): string => {
  return dates !== null &&
    typeof dates === 'object' &&
    'toLocaleDateString' in dates
    ? dates.toLocaleDateString()
    : ''
}

const InputCalendarComponent = (
  { className, date = null, setValue, onClick, ...props }: InputCalendarProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const style: string = twMerge('pr-12', className)
  const [dates, setDates] = useState<Dates>(date)
  const [calendarValue, calendarOn, calendarOff] = useToggle()
  const closeCalendar = (): void => calendarOff()

  const onClickHandler = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void => {
    calendarOn()
    onClick?.(event)
  }

  useEffect((): void => {
    setValue?.('date', dateFormat(dates))
    calendarOff()
  }, [dates])

  useEffect((): (() => void) | undefined => {
    if (!calendarValue) return

    document.addEventListener('click', closeCalendar as EventListener)

    return (): void =>
      document.removeEventListener('click', closeCalendar as EventListener)
  }, [calendarValue])

  return (
    <div
      className="relative"
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void =>
        event.stopPropagation()
      }
    >
      <input
        className={style}
        type="text"
        placeholder="00.00.0000"
        value={dateFormat(dates)}
        onClick={onClickHandler}
        {...props}
        ref={ref}
      />
      <span className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 h-full pointer-events-none">
        <Icon className="text-2xl opacity-50" id="calendar" />
      </span>
      {calendarValue ? (
        <Calendar
          className={`calendar bg-white dark:bg-dark absolute z-10 top-full left-0 right-0 font-base border border-solid border-gray rounded-xl overflow-hidden w-full`}
          value={dates}
          onChange={setDates}
        />
      ) : null}
    </div>
  )
}

export const InputCalendar = forwardRef(InputCalendarComponent)
