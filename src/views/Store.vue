<template>
  <div>
    <div class="store-container mx-auto d-flex justify-space-around my-10 align-center">
      <p class="text-caption">
        9 de 10 productos
      </p>
      <div class="d-flex input-container">
        <input v-model="txtbuscadorproducto" class="input-search" autocomplete="off" type="text" placeholder="Ingrese un producto a buscar...">
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
          v-for="i in 9"
          :key="i"
          class="d-flex justify-center"
          cols="12"
          sm="6"
          lg="4"
        >
          <product-card />
        </v-col>
      </v-row>
    </div>
    <div class="text-center mt-5">
      <v-pagination
        v-model="page"
        :length="3"
        :total-visible="5"
        :disabled="disablePagination"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/cards/ProductCard'

export default {
  components: {
    ProductCard
  },
  data () {
    return {
      page: 1
    }
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
