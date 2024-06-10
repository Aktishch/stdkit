import React from 'react'
import { twMerge } from 'tailwind-merge'
import { InputProps } from '@ui/Input'
import { InputDefault } from '@components/InputDefault'

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

export const InputTel = ({
  size = 'lg',
  value,
  name,
  className,
  maxLength,
  placeholder,
  onInput,
  onKeyDown,
  onPaste,
  children,
}: InputProps) => {
  const style: string = twMerge(className)

  const onInputHandler = (
    event: React.CompositionEvent<HTMLInputElement>
  ): '' | undefined => {
    if (onInput !== undefined) onInput(event)

    const input = event.target as HTMLInputElement
    const selection: number | null = input.selectionStart
    const value: string = getValue(input)

    if (!value) return (input.value = '')

    if (input.value.length !== selection) {
      if (event.data) input.value = formatterValue(value)

      return
    }

    input.value = formatterValue(value)
  }

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (onKeyDown !== undefined) onKeyDown(event)

    const input = event.target as HTMLInputElement
    const value: string = getValue(input)

    if (event.code === 'Backspace' && value.length === 1) input.value = ''
  }

  const onPasteHandler = (
    event: React.ClipboardEvent<HTMLInputElement>
  ): void => {
    if (onPaste !== undefined) onPaste(event)

    const input = event.target as HTMLInputElement
    const value: string = getValue(input)
    const pasted: DataTransfer | null = event.clipboardData

    if (pasted) {
      if (/\D/g.test(pasted.getData('Text'))) {
        input.value = value

        return
      }
    }
  }

  return (
    <InputDefault
      className={style}
      size={size}
      type="tel"
      value={value}
      maxLength={maxLength}
      name={name}
      placeholder={placeholder}
      onInput={onInputHandler}
      onKeyDown={onKeyDownHandler}
      onPaste={onPasteHandler}
    >
      {children}
    </InputDefault>
  )
}
