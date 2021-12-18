import { getProducts } from '@/plugins/firebase'

export default {
  fetchProducts: async ({ state, commit }) => {
    const listProducts = await getProducts()
    commit('SET_PRODUCTS', listProducts)
  }
}
