import { useContext } from 'react'
import { StoreContext } from '../contexts/StoreContext'

const useDispatch = () => {
  const store = useContext(StoreContext)

  return store.dispatch.bind(store)
}

export { useDispatch }
