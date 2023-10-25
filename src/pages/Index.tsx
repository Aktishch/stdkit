import React from 'react'
import { Container } from '../components/Container'
import { Picture } from '../components/Picture'
import { Loader } from '../components/Loader'
import { Pack } from '../components/Pack'
import { Switch } from '../components/Switch'

export const Index = () => {
  return (
    <Container className="flex flex-col items-center justify-center bg-white dark:bg-black min-h-[500px] xl:min-h-[600px] h-[3000px]">
      <Picture webp={false} src="img/pictures/logo" format="svg" className="block mb-10" loading="eager"></Picture>
      <Pack size="lg" className="bg-grey rounded-4 w-56">
        <Loader />
      </Pack>
      <div>
        <Switch color="green" variant="checkbox" type="checkbox" />
        <Switch color="green" variant="radio" type="radio" />
        <Switch color="green" variant="toggle" type="checkbox" />
      </div>
    </Container>
    // <section className="container h-[3000px] pt-72">
    //   <Pack size="lg" className="bg-grey rounded-4 w-56">
    //     <Loader />
    //   </Pack>
    //   <div>
    //     <Switch color="green" variant="checkbox" type="checkbox" />
    //     <Switch color="green" variant="radio" type="radio" />
    //     <Switch color="green" variant="toggle" type="checkbox" />
    //   </div>
    // </section>
  )
}
