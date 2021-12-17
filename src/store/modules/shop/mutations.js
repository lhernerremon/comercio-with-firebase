import { addItem, removeItem, set } from '@/utils/vuex'

export default {
  ADD_ITEM_TO_SHOPPING_CAR: addItem('shoppingCar'),
  REMOVE_ITEM_TO_SHOPPING_CAR: removeItem('shoppingCar'),
  SET_SHOW_SHOPPING_CAR: set('showShoppingCard'),
  SET_SHOPPING_CAR: set('shoppingCar'),

  SET_SERVICE_QUANTITY (state, { amount, service }) {
    const serviceIndex = state.shoppingCar.findIndex(item => item.id === service.id)
    if (serviceIndex !== -1) { state.shoppingCar[serviceIndex].amount = amount }
  }
}
