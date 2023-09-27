import React from 'react'
import { useState } from 'react'
import { compositions } from './costants/compositions'
import { Composition } from './components/Composition/Composition'
import { Tabs } from './components/Tabs/Tabs'

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  console.log(activeIndex)

  return (
    <section className="container bg-white">
      <div className="flex items-center gap-4 mb-10">
        <Tabs onClick={setActiveIndex} items={compositions} activeIndex={activeIndex} />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <Composition composition={compositions[activeIndex]} />
      </div>
    </section>
  )
}

export { App }
