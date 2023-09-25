import React from 'react'
import { useCount } from '../../hooks/useCount'
import { Button } from '../Button/Button'

const Composition = ({ song, artist }) => {
  const { count, decrement, increment } = useCount()

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="font-alt font-semibold text-24 mb-4">{song}</h2>
        <ul className="mb-10">
          {artist.map((artist) => (
            <li>{artist}</li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-4">
          <Button disabled={count === 0} onClick={decrement}>
            -
          </Button>
          {count}
          <Button disabled={count === 5} onClick={increment}>
            +
          </Button>
        </div>
        {count > 0 ? <span>{song}</span> : ''}
      </div>
    </div>
  )
}

export { Composition }
