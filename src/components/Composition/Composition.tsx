import React from 'react'
import { useMemo } from 'react'
import { useCount } from '../../hooks/useCount'
import { Button } from '../Button/Button'

const Composition = ({ composition }) => {
  const { count, decrement, increment } = useCount({ value: 0, min: 0, max: 6 })
  const rating = useMemo(
    () => Math.round(composition.reviews.reduce((sum, review) => sum + review.rating, 0) / composition.reviews.length),
    [composition.reviews]
  )

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="font-alt font-semibold text-24 mb-4">{composition.song}</h2>
        <div>{rating}</div>
        <ul className="mb-10">
          {composition.artist.map((artist) => (
            <li>{artist}</li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-4">
          <Button disabled={count === 0} onClick={decrement}>
            -
          </Button>
          {count}
          <Button disabled={count === 6} onClick={increment}>
            +
          </Button>
        </div>
        {count > 0 ? (
          <div>
            {composition.reviews.map((review) => (
              <ul>
                <li>{review.user}</li>
                <li>{review.rating}</li>
              </ul>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export { Composition }
