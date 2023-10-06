import React from 'react'
import { useSelector } from '../../customStore/hooks/useSelector'

const Cart = ({}) => {
  const cart = useSelector((state) => state.cart)

  return (
    <div>
      {Object.entries(cart).map(([name, count]) => (
        <div>
          {name} : {count}
        </div>
      ))}
    </div>
  )
}

export { Cart }
