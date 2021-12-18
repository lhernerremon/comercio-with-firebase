import { getProducts, newContactRef } from '@/plugins/firebase'
import { setDoc, Timestamp } from 'firebase/firestore'

export default {
  fetchProducts: async ({ state, commit }) => {
    const listProducts = await getProducts()
    commit('SET_PRODUCTS', listProducts)
  },
  setContact: async ({ commit }, payload) => {
    const data = payload
    data.date = Timestamp.fromDate(new Date())
    await setDoc(newContactRef, data)
  }
}
