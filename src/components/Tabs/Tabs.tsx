import React from 'react'
import { Tab } from '../Tab/Tab'

const Tabs = ({ items, onClick, activeIndex }) => {
  return items.map(({ song }, index) => (
    <Tab item={song} onClick={() => onClick(index)} activeIndex={index === activeIndex} />
  ))
}

export { Tabs }
