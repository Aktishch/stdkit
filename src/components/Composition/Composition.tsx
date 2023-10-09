import React, { useMemo } from 'react'
// import { useCount } from '../../hooks/useCount'
import { Button } from '../Button/Button'
import { Cart } from '../Cart/Cart'
import { ReviewForm } from '../ReviewForm/ReviewForm'
import classnames from 'classnames'
// import { useSelector } from '../../customStore/hooks/useSelector'
// import { useDispatch } from '../../customStore/hooks/useDispatch'
import { useSelector, useDispatch } from 'react-redux'
import { addCart, removeCart } from '../../store/modules/cart/actions'
import { selectCompositionCountBySong } from '../../store/modules/cart/selectors'

const Composition = ({ composition }) => {
  // const { count, decrement, increment } = useCount({ value: 0, min: 0, max: 6 })
  const count = useSelector((state) => selectCompositionCountBySong(state, { compositionSong: composition.song }))
  const dispatch = useDispatch()
  const decrement = () => dispatch(removeCart(composition.song))
  const increment = () => dispatch(addCart(composition.song))
  const rating = useMemo(
    () => Math.round(composition.reviews.reduce((sum, review) => sum + review.rating, 0) / composition.reviews.length),
    [composition.reviews]
  )

  return (
    <div className="card">
      <div className="card-content p-5">
        <h2 className="font-alt font-semibold text-24 mb-4">{composition.song}</h2>
        <div
          className={classnames('bg-primary', {
            ['bg-opacity-50']: count > 4,
          })}
        >
          {rating}
        </div>
        <ul className="mb-10">
          {composition.artist.map((artist) => (
            <li>{artist}</li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-4 mb-5">
          <Button
            color="primary"
            size="sm"
            variant="contur"
            classes="w-10 h-10 px-0"
            disabled={count === 0}
            onClick={decrement}
          >
            -
          </Button>
          {count}
          <Button
            color="primary"
            size="sm"
            variant="contur"
            classes="w-10 h-10 px-0"
            disabled={count === 6}
            onClick={increment}
          >
            +
          </Button>
        </div>
        <ReviewForm></ReviewForm>
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
        <Cart />
      </div>
    </div>
  )
}

export { Composition }
