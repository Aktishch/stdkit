import React from 'react'
// import { useSelector } from '../../customStore/hooks/useSelector'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../Button/Button'
import { clearCart } from '../../store/modules/cart/actions'
import { selectCart } from '../../store/modules/cart/selectors'

const Cart = ({}) => {
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()
  const cartEntries = Object.entries(cart)

  return (
    <div>
      {cartEntries.length > 0 ? (
        <div>
          {Object.entries(cart).map(([name, count]) => (
            <div>
              {name} : {count}
            </div>
          ))}
          <Button color="primary" size="sm" variant="contur" disabled={false} onClick={() => dispatch(clearCart())}>
            Clear
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export { Cart }
