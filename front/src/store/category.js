import { getCategory, getCategories } from '@/services/categories.service'

const mutations = {
  getCategory(state, category) {
    state.category = category
  },

  setCategories(state, categories) {
    state.categories = categories
  },
  setCategoryError(state, err) {
    state.categoryError = err
  },
}

const getters = {
  category: ({ category }) => category,
  categories: ({ categories }) => categories,
  categoryError: ({ categoryError }) => categoryError,
}

const actions = {
  async fetchCategory({ commit }, id) {
    try {
      const category = await getCategory(id)
      commit('setCategory', category)
    } catch (err) {
      commit('setError', err)
    }
  },
  async fetchCategories({ commit }) {
    try {
      const categories = await getCategories()
      commit('setCategories', categories)
    } catch (err) {
      commit('setError', err)
    }
  },
}

const state = () => ({
  category: {},
  categories: [],
  categoryError: null,
})

export default {
  mutations,
  getters,
  actions,
  state,
}
