import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const getValue = (input: HTMLInputElement): string => {
  return input.value.replace(/\D/g, '')
}

const formatterValue = (value: string): string => {
  if (value[0] === '9') value = '7' + value

  const firstVal = '+7'
  let formatted: string

  formatted = firstVal + ' '

  if (value.length > 1) formatted += '(' + value.substring(1, 4)
  if (value.length >= 5) formatted += ') ' + value.substring(4, 7)
  if (value.length >= 8) formatted += '-' + value.substring(7, 9)
  if (value.length >= 10) formatted += '-' + value.substring(9, 11)

  return formatted
}

const InputTelComponent = (
  {
    className,
    onInput,
    onKeyDown,
    onPaste,
    children,
    ...props
  }: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  const style: string = twMerge(className)

  const onInputHandler = (
    event: React.CompositionEvent<HTMLInputElement>
  ): '' | undefined => {
    const input = event.target as HTMLInputElement
    const selection: number | null = input.selectionStart
    const value: string = getValue(input)

    if (!value) {
      input.value = ''
      return
    }

    if (input.value.length !== selection) {
      if (event.data) input.value = formatterValue(value)

      return
    }

    input.value = formatterValue(value)
    onInput?.(event)
  }

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const input = event.target as HTMLInputElement
    const value: string = getValue(input)

    if (event.code === 'Backspace' && value.length === 1) input.value = ''

    onKeyDown?.(event)
  }

  const onPasteHandler = (
    event: React.ClipboardEvent<HTMLInputElement>
  ): void => {
    const input = event.target as HTMLInputElement
    const value: string = getValue(input)
    const pasted: DataTransfer | null = event.clipboardData

    if (pasted) {
      if (/\D/g.test(pasted.getData('Text'))) {
        input.value = value
        return
      }
    }

    onPaste?.(event)
  }

  return (
    <input
      className={style}
      type="tel"
      placeholder="+7 (___) ___-__-__"
      onInput={onInputHandler}
      onKeyDown={onKeyDownHandler}
      onPaste={onPasteHandler}
      {...props}
      ref={ref}
    />
  )
}

export const InputTel = forwardRef(InputTelComponent)
