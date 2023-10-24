import React from 'react'
import { Loader } from '../components/Loader'
import { Pack } from '../components/Pack'
import { Switch } from '../components/Switch'

export const Index = () => {
  return (
    <section className="container h-[3000px] pt-72">
      <Pack size="lg" classes="bg-grey rounded-4 w-56">
        <Loader />
      </Pack>
      <div>
        <Switch color="green" variant="checkbox" type="checkbox" />
        <Switch color="green" variant="radio" type="radio" />
        <Switch color="green" variant="toggle" type="checkbox" />
      </div>
    </section>
  )
}
