import React from 'react'
import classnames from 'classnames'

const Rating = ({ value, onChange, maxRating = 5 }) => {
  return (
    <div className="flex items-center">
      {maxRating > 0 &&
        new Array(maxRating).fill(null).map((_, index) => (
          <svg
            className={classnames('icon text-second', {
              ['text-opacity-50']: index >= value,
            })}
            key={index}
            onClick={() => onChange(index + 1)}
          >
            <use xlinkHref="img/icons.svg#star"></use>
          </svg>
        ))}
    </div>
  )
}

export { Rating }
