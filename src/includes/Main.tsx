import React from 'react'
import { Picture } from '../components/Picture'
import { Title } from '../components/Title'
import { Button } from '../components/Button'
import { Movement } from '../components/Movement'
import { Waved } from '../components/Waved'

export const Main = (): React.JSX.Element => {
  return (
    <section className="container flex flex-col items-center justify-center bg-white dark:bg-black min-h-[500px] xl:min-h-[600px]">
      <Picture src="img/pictures/logo.svg" className="block mb-10" loading="eager" />
      <Movement variant="blend" className="mb-5 md:mb-10">
        <Title as="h1">Main block</Title>
      </Movement>
      <Button as="a" color="primary" effect="glow" className="w-full max-w-[200px] mx-auto" href="#block">
        <Waved />
        Show more
      </Button>
    </section>
  )
}
