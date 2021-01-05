import { getProduct, getProducts } from '@/services/products.service'

const mutations = {
  getProduct(state, product) {
    state.product = product
  },

  setProducts(state, products) {
    state.products = products
  },
  setError(state, err) {
    state.productError = err
  },
}

const getters = {
  product: ({ product }) => product,
  products: ({ products }) => products,
  productError: ({ productError }) => productError,
}

const actions = {
  async fetchProduct({ commit }, id) {
    try {
      const product = await getProduct(id)
      commit('setProduct', product)
    } catch (err) {
      commit('setError', err)
    }
  },
  async fetchProducts({ commit }) {
    try {
      const products = await getProducts()
      commit('setProducts', products)
    } catch (err) {
      commit('setError', err)
    }
  },
}

const state = () => ({
  product: {},
  products: [],
  productError: null,
})

export default {
  mutations,
  getters,
  actions,
  state,
}
