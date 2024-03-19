import React from 'react'
import { Primal } from '../includes/Primal'
import { Articles } from '../includes/Articles'
import { ButtonsBlock } from '../includes/Buttons-block'
import { Documents } from '../includes/Documents'
import { Tabs } from '../includes/Tabs'

export const Index = (): React.JSX.Element => {
  return (
    <>
      <Primal />
      <Articles />
      <ButtonsBlock />
      <Documents />
      <Tabs />
    </>
  )
}
