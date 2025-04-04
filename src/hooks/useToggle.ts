import { useCallback, useState } from 'react'

export const useToggle = (status: boolean = false): readonly [boolean, () => void, () => void, () => void] => {
  const [value, setValue] = useState(status)
  const on = useCallback((): void => setValue(true), [])
  const off = useCallback((): void => setValue(false), [])
  const toggle = useCallback((): void => setValue((prev) => !prev), [])

  return [value, on, off, toggle] as const
}
