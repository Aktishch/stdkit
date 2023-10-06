import React from 'react'
import { Button } from '../Button/Button'

const Tab = ({ item, onClick, activeIndex }) => {
  return (
    <Button color="second" size="sm" variant="contur" disabled={activeIndex} onClick={onClick}>
      {item}
    </Button>
  )
}

export { Tab }
