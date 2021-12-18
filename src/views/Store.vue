<template>
  <div>
    <div class="store-container mx-auto d-flex justify-space-around my-10 align-center">
      <div class="d-flex input-container">
        <input v-model="search" class="input-search" autocomplete="off" type="text" placeholder="Ingrese un producto a buscar...">
        <button class="input-button">
          <v-icon class="input-icon" color="white">
            mdi-magnify
          </v-icon>
        </button>
      </div>
    </div>
    <div class="store-container mx-auto">
      <v-row>
        <v-col
          v-for="product in productsFiltered"
          :key="product.id"
          class="d-flex justify-center"
          cols="12"
          sm="6"
          lg="4"
        >
          <product-card :producto="product" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/cards/ProductCard'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    ProductCard
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState('firebase', ['products']),
    productsFiltered () {
      if (this.search) {
        return this.products.filter(p => {
          return p.name.toLowerCase().includes(this.search.toLowerCase()) ||
          p.slug.toLowerCase().includes(this.search.toLowerCase()) ||
          p.description.toLowerCase().includes(this.search.toLowerCase())
        })
      } else {
        return this.products
      }
    }
  },
  created () {
    this.fetchProducts()
  },
  methods: {
    ...mapActions('firebase', ['fetchProducts'])
  }
}
</script>

<style lang="scss" scoped>
.store-container {
  width: 70%;
}
.input-container {
  width: 40%;
}
.input-search {
    background: white;
    width: 100%;
    height: 40px;
    border: solid 1px #61ce70;
    border-radius: 15px 0 0 15px;
    padding: 5px 5px 5px 20px;
    font-size: 15px;
}
.input-search:focus{
    outline:none;
}
.input-button {
  height: 40px;
  width: 40px;
  background: #61ce70;
  border-radius: 0 15px 15px 0;
}
.input-button:hover {
  background: #61ce70;
}
.myrelative {
  position: absolute;
  z-index: 3;
  top: 100px;
  left: 100px;
  color: white;
}
</style>
