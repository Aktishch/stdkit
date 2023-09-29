import React from 'react'
import { useReducer } from 'react'

const defaultFormValue = {
  name: '',
  text: '',
  rating: 5,
}

const reducer = (state, action) => {
  switch (action.type) {
  case 'changeName': {
    return {
      ...defaultFormValue,
      name: action.payload,
    }
  }

  case 'changeText': {
    return {
      ...state,
      text: action.payload,
    }
  }

  case 'changeRating': {
    return {
      ...state,
      rating: action.payload,
    }
  }

  default: {
    return state
  }
  }
}

const ReviewForm = ({}) => {
  const [formValue, dispatch] = useReducer(reducer, defaultFormValue)

  return (
    <div>
      <svg className="icon text-primary">
        <use xlinkHref="img/icons.svg#star"></use>
      </svg>
      <label className="form-label mb-5">
        <span className="text-20 mb-3">Name</span>
        <div className="form-wrapper">
          <div className="input-cover">
            <input
              className="input input-gray input-lg"
              type="text"
              value={formValue.name}
              onChange={(event) => dispatch({ type: 'changeName', payload: event.target.value })}
            />
          </div>
        </div>
      </label>
      <label className="form-label mb-5">
        <span className="text-20 mb-3">Text</span>
        <div className="form-wrapper">
          <div className="input-cover">
            <input
              className="input input-gray input-lg"
              type="text"
              value={formValue.text}
              onChange={(event) => dispatch({ type: 'changeText', payload: event.target.value })}
            />
          </div>
        </div>
      </label>
      <label className="form-label mb-5">
        <span className="text-20 mb-3">Rating</span>
        <div className="form-wrapper">
          <div className="input-cover">
            <input
              className="input input-gray input-lg"
              type="number"
              value={formValue.rating}
              onChange={(event) => dispatch({ type: 'changeRating', payload: event.target.value })}
            />
          </div>
        </div>
      </label>
    </div>
  )
}

export { ReviewForm }
