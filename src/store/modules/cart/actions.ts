export const cartActions = {
  add: 'cart/add',
  remove: 'cart/remove',
  clear: 'cart/clear',
}

export const addCart = (payload) => ({ type: cartActions.add, payload })
export const removeCart = (payload) => ({ type: cartActions.remove, payload })
export const clearCart = () => ({ type: cartActions.clear })
