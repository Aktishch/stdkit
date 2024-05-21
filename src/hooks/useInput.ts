import { useRef, useEffect } from 'react'

export const useInput = () => {
  const inputText = useRef<HTMLSpanElement>(null)

  useEffect((): (() => void) | undefined => {
    const currentInputText = inputText.current as HTMLSpanElement
  }, [])
  // const input = useRef<HTMLInputElement>(null)

  // useEffect((): (() => void) | undefined => {
  //   const currentInput = input.current as HTMLInputElement

  //   const inputHandler = (): void => {
  //     switch (currentInput.value !== '') {
  //     case true: {
  //       console.log('has')
  //       break
  //     }

  //     case false: {
  //       console.log('empty')
  //       break
  //     }
  //     }
  //   }

  //   inputHandler()

  //   currentInput.addEventListener('input', inputHandler as EventListener)

  //   return (): void => currentInput.removeEventListener('input', inputHandler as EventListener)
  // }, [])

  // return { input }
}
