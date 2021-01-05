const mutations = {
  addToCart(state, product) {
    const productInCart = state.cartItems.find(({ _id }) => product._id === _id)
    if (productInCart) {
      const currentProductsInCart = state.cartItems
      state.cartItems = currentProductsInCart.filter(
        ({ _id }) => product._id != _id
      )
    } else {
      state.cartItems.push(product)
    }
  },
}
const actions = {}
const getters = {
  cartCount: ({ cartItems }) => cartItems.length,
  cart: ({ cart }) => cart,
  totalPrice: ({ cartItems }) =>
    cartItems.reduce(function(sum, current) {
      let price = current.price
        .split('')
        .filter((c) => c != '$')
        .join('')

      return sum + Number(price)
    }, 0),
  cartItems: ({ cartItems }) => cartItems,
}
const state = () => ({
  cartCount: 0,
  cart: { total: 0 },
  cartItems: [],
})

export default {
  mutations,
  getters,
  actions,
  state,
}
