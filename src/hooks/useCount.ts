import { useState, useCallback } from 'react'

const useCount = ({ value = 0, min = 0, max = 0 } = {}) => {
  const [count, setCount] = useState(value)
  const decrement = useCallback(() => setCount((prev) => (prev === min ? min : prev - 1)), [min])
  const increment = useCallback(() => setCount((prev) => (prev === max ? max : prev + 1)), [max])

  console.log(count)

  return { count, decrement, increment }
}

export { useCount }
