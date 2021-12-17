export default {
  addItemToShoppingCar ({ commit, state }, payload) {
    const serviceIndex = state.shoppingCar.findIndex(item => item.id === payload.id)
    if (serviceIndex !== -1) {
      commit('SET_SERVICE_QUANTITY', { amount: state.shoppingCar[serviceIndex].amount + 1, service: state.shoppingCar[serviceIndex] })
    } else {
      const service = {
        ...payload,
        amount: 1
      }
      commit('ADD_ITEM_TO_SHOPPING_CAR', service)
    }
  },
  removeItemToShoppingCar ({ commit }, payload) {
    commit('REMOVE_ITEM_TO_SHOPPING_CAR', payload)
  },
  setShowShoppingCar ({ commit }, payload) {
    commit('SET_SHOW_SHOPPING_CAR', payload)
  },
  setServiceQuantity ({ commit }, payload) {
    commit('SET_SERVICE_QUANTITY', payload)
  }
}
