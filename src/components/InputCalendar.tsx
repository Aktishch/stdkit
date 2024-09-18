import React, { useState, useEffect, forwardRef } from 'react'
import Calendar from 'react-calendar'
import { twMerge } from 'tailwind-merge'
import { useToggle } from '@hooks'
import { Icon, InputNumber } from '@components'

export interface InputCalendarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  date?: Date | null
}

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const InputCalendarComponent = (
  { className, date = null, ...props }: InputCalendarProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const style: string = twMerge('pr-12', className)
  const [value, setValue] = useState<Value>(date)
  const [calendarValue, , calendarOff, calendarToggle] = useToggle()
  const onScrollHandler = (): void => calendarOff()

  useEffect((): (() => void) | undefined => {
    if (!calendarValue) return

    document.addEventListener('scroll', onScrollHandler as EventListener)

    return (): void =>
      document.removeEventListener('scroll', onScrollHandler as EventListener)
  }, [calendarValue])

  return (
    <>
      <InputNumber
        className={style}
        type="text"
        placeholder="00.00.0000"
        // value={value.toLocaleDateString()}
        ref={ref}
        {...props}
      />
      <button
        className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 h-full cursor-pointer"
        type="button"
        onClick={calendarToggle}
      >
        <Icon className="text-2xl opacity-50" id="calendar" />
      </button>
      {calendarValue ? (
        <Calendar
          className={`absolute z-10 top-full left-0 right-0 w-full`}
          value={value}
          onChange={setValue}
        />
      ) : null}
    </>
  )
}

export const InputCalendar = forwardRef(InputCalendarComponent)
