export const selectCart = (state) => state.cart

export const selectCompositionCountBySong = (state, { compositionSong }) => selectCart(state)[compositionSong] || 0
