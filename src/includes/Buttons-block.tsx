import React from 'react'
import { useBubbles } from '../hooks/useBubbles'
import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
import { Button } from '../components/Button'
import { Waved } from '../components/Waved'

export const ButtonsBlock = (): React.JSX.Element => {
  const { classNames, createBubbles } = useBubbles()

  return (
    <section className="container container-xs flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden">
      <Title className="mb-3">Buttons</Title>
      <Subtitle className="mb-5 md:mb-10">Buttons standard</Subtitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-5 md:mb-10">
        <Button color="primary" variant={null}>
          btn-primary
        </Button>
        <Button color="primary" variant="contur">
          btn-primary btn-contur
        </Button>
        <Button color="primary" variant="fade">
          btn-primary btn-fade
        </Button>
        <Button color="primary" variant="contur" className="btn-fade">
          btn-primary btn-contur btn-fade
        </Button>
        <Button color="primary">btn-primary btn-fill</Button>
        <Button color="primary" variant="light">
          btn-primary btn-light
        </Button>
      </div>
      <Subtitle className="mb-5 md:mb-10">Buttons size</Subtitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-5 md:mb-10">
        <Button color="primary" size="xxl">
          btn-xxl
        </Button>
        <Button color="primary" size="xl">
          btn-xl
        </Button>
        <Button color="primary" size="lg">
          btn-lg
        </Button>
        <Button color="primary" size="md">
          btn-md
        </Button>
        <Button color="primary" size="sm">
          btn-sm
        </Button>
        <Button color="primary" size="xs">
          btn-xs
        </Button>
      </div>
      <Subtitle className="mb-5 md:mb-10">Buttons effects</Subtitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-5 md:mb-10">
        <Button color="primary" variant="contur" effect="swipe">
          btn-swipe
        </Button>
        <Button color="primary" effect="glow">
          btn-glow
        </Button>
      </div>
      <Subtitle className="mb-5 md:mb-10">Buttons click</Subtitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-5 md:mb-10">
        <Button color="primary">
          <Waved />
          waved light
        </Button>
        <Button color="primary">
          <Waved variant="dark" />
          waved dark
        </Button>
        <Button color="primary" className={classNames} onClick={createBubbles}>
          bubbles
        </Button>
      </div>
    </section>
  )
}
