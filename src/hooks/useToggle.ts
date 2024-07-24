import { useState, useCallback } from 'react'

export const useToggle = (status = false) => {
  const [value, setValue] = useState(status)
  const on = useCallback((): void => setValue(true), [])
  const off = useCallback((): void => setValue(false), [])
  const toggle = useCallback((): void => setValue((prev) => !prev), [])

  return [value, on, off, toggle] as const
}
