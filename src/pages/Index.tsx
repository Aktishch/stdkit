import React from 'react'
import { Button } from '../components/Button'

export const Index = (): HTMLElement => {
  return (
    <div>
      <Button
        Tag="a"
        color="primary"
        size="sm"
        variant="contur"
        href="fdsfdsfsd"
        onClick={(): void => console.log('fdfdfd')}
      >
        btn
      </Button>
    </div>
  )
}
