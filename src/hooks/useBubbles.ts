import { useCallback } from 'react'
import { useToggle } from '../hooks/useToggle'
import classnames from 'classnames'

export const useBubbles = () => {
  const { value, on, off } = useToggle({ status: false })

  const createBubbles = useCallback((): void => {
    on()
    setTimeout((): void => off(), 600)
  }, [])

  const classNames: string = classnames(value ? 'btn-bubbles pointer-events-none' : '')

  return { classNames, createBubbles }
}
