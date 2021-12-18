export default {
  getProduct: (state) => (slug) => {
    return state.products.find(obj => obj.slug === slug)
  }
}
