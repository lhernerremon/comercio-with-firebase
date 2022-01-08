import { getProducts, db } from '@/plugins/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export default {
  fetchProducts: async ({ state, commit }) => {
    const listProducts = await getProducts()
    commit('SET_PRODUCTS', listProducts)
  },
  setContact: async ({ commit }, payload) => {
    const data = payload
    data.date = Timestamp.fromDate(new Date())
    await addDoc(collection(db, 'contacts'), data)
  },
  setPedido: async ({ commit }, payload) => {
    const data = payload
    data.date = Timestamp.fromDate(new Date())
    await addDoc(collection(db, 'pedidos'), data)
  }
}
