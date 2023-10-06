import { createStore } from '../customStore/store/store'

const rootReducer = (
  state = {
    cart: {},
  },
  action = {}
) => {
  switch (action.type) {
  case 'add': {
    return {
      ...state,
      cart: {
        ...state.cart,
        [action.payload]: (state.cart[action.payload] || 0) + 1,
      },
    }
  }

  case 'remove': {
    return {
      ...state,
      cart: {
        ...state.cart,
        [action.payload]: (state.cart[action.payload] || 1) - 1,
      },
    }
  }

  default: {
    return state
  }
  }
}

const store = createStore(rootReducer)

export { store }
