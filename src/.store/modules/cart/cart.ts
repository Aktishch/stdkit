import { cartActions } from './actions'

const cartReducer = (state = {}, action) => {
  switch (action.type) {
  case cartActions.add: {
    return {
      ...state,
      [action.payload]: (state[action.payload] || 0) + 1,
    }
  }

  case cartActions.remove: {
    return {
      ...state,
      [action.payload]: (state[action.payload] || 1) - 1,
    }
  }

  case cartActions.clear: {
    return {}
  }

  default: {
    return state
  }
  }
}

export { cartReducer }
