import { useState, useCallback } from 'react'

export const useAccordion = ({ initialization = false } = {}) => {
  const [status, setStatus] = useState(initialization)
  const toggle = useCallback((): void => {
    switch (status) {
    case true: {
      setStatus(false)
      break
    }

    case false: {
      setStatus(true)
      break
    }
    }
  })

  return { status, toggle }
}
