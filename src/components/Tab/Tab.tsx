import React from 'react'
import { Button } from '../Button/Button'

const Tab = ({ item, onClick, activeIndex }) => {
  return (
    <Button onClick={onClick} disabled={activeIndex}>
      {item}
    </Button>
  )
}

export { Tab }
