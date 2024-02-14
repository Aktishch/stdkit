import React from 'react'
import { useBubbles } from '../hooks/useBubbles'
import { Title } from '../components/Title'
import { Subtitle } from '../components/Subtitle'
import { Button } from '../components/Button'
import { Movement } from '../components/Movement'
import { Waved } from '../components/Waved'

export const ButtonsBlock = (): React.JSX.Element => {
  const { classNames, createBubbles } = useBubbles()

  return (
    <section className="container flex flex-col items-center justify-center overflow-hidden bg-white container-xs dark:bg-black">
      <Movement variant="blend" className="mb-3">
        <Title>Buttons</Title>
      </Movement>
      <Movement variant="blend" className="mb-5 md:mb-10">
        <Subtitle>Buttons standard</Subtitle>
      </Movement>
      <div className="grid w-full gap-5 mb-5 md:grid-cols-2 lg:grid-cols-3 md:mb-10">
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
      <Movement variant="blend" className="mb-5 md:mb-10">
        <Subtitle>Buttons size</Subtitle>
      </Movement>
      <div className="grid w-full gap-5 mb-5 md:grid-cols-2 lg:grid-cols-3 md:mb-10">
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
      <Movement variant="blend" className="mb-5 md:mb-10">
        <Subtitle>Buttons effects</Subtitle>
      </Movement>
      <div className="grid w-full gap-5 mb-5 md:grid-cols-2 lg:grid-cols-3 md:mb-10">
        <Button color="primary" variant="contur" effect="swipe">
          btn-swipe
        </Button>
        <Button color="primary" effect="glow">
          btn-glow
        </Button>
      </div>
      <Movement variant="blend" className="mb-5 md:mb-10">
        <Subtitle>Buttons click</Subtitle>
      </Movement>
      <div className="grid w-full gap-5 mb-5 md:grid-cols-2 lg:grid-cols-3 md:mb-10">
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
