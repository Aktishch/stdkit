import React from 'react'
import { Main } from '../includes/Main'
import { Articles } from '../includes/Articles'
import { ButtonsBlock } from '../includes/Buttons-block'
import { Documents } from '../includes/Documents'
import { Tabs } from '../includes/Tabs'

export const Index = (): React.JSX.Element => {
  return (
    <>
      <Main />
      <Articles />
      <ButtonsBlock />
      <Documents />
      <Tabs />
    </>
  )
}
