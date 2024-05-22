import { useRef, useEffect } from 'react'

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

const onInput = (event: InputEvent): '' | undefined => {
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

const onKeyDown = (event: KeyboardEvent): void => {
  const input = event.target as HTMLInputElement
  const value: string = getValue(input)

  if (event.code === 'Backspace' && value.length === 1) input.value = ''
}

const onPaste = (event: ClipboardEvent): void => {
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

export const usePhoneMask = () => {
  const tel = useRef<HTMLInputElement>(null)

  useEffect((): (() => void) | undefined => {
    const currentTel = tel.current as HTMLInputElement

    currentTel.addEventListener('input', onInput as EventListener)
    currentTel.addEventListener('keydown', onKeyDown as EventListener)
    currentTel.addEventListener('paste', onPaste as EventListener)

    return (): void => {
      currentTel.removeEventListener('input', onInput as EventListener)
      currentTel.removeEventListener('keydown', onKeyDown as EventListener)
      currentTel.removeEventListener('paste', onPaste as EventListener)
    }
  }, [])

  return { tel }
}
