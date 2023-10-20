// import { createStore } from '../customStore/store/store'
import { createStore, combineReducers } from 'redux'
import { cartReducer } from './modules/cart/cart'

const rootReducer = combineReducers({
  cart: cartReducer,
})

const store = createStore(rootReducer)

export { store }
