<template>
  <div class="mycontainer">
    <!-- Fin BreadCrumbs -->
    <v-row>
      <v-col cols="12" md="6" class="pl-5">
        <div class="mt-5 titulo-txt myupper" v-text="producto.name" />
        <div class="d-flex mt-5">
          <div>
            <v-img max-width="120" contain :src="producto.marcaUrl">
              <template #placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="primary"
                  />
                </v-row>
              </template>
            </v-img>
          </div>
          <div class="ml-5 d-flex flex-column justify-center">
            <div>Marca: <span class="font-weight-bold mygreen" v-text="producto.marcaName" /></div>
            <div>Stock: <span class="font-weight-bold mygreen" v-text="producto.stock" /></div>
          </div>
        </div>
        <div class="mt-6">
          <span><strong>Descripción:</strong></span><br>
          <div style="max-width: 650px;" class="text-justify" v-text="producto.description" />
        </div>
        <div class="mt-10">
          <!-- Price -->
          <div v-if="producto.discount">
            <div class="precio-txt mt-10">
              S/ {{ producto.discount }}
            </div>
            <div class="text-caption text-decoration-line-through mygrey">
              S/ {{ producto.price }}
            </div>
          </div>
          <div v-else>
            <div class="precio-txt mt-10">
              S/ {{ producto.price }}
            </div>
          </div>
          <div class="texto-igv">
            Precio incluye IGV
          </div>
        </div>
        <div class=" d-flex justify-center">
          <v-btn color="green" large dark class=" my-10 btn-consulta" elevation="20" @click="addToCart(producto)">
            <v-icon class="mr-2" size="30">
              mdi-cart-variant
            </v-icon>
            <span>Agregar al carrito</span>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <detail-product-card :imagenes="producto.images" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DetailProductCard from '@/components/cards/DetailProductCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    DetailProductCard
  },
  data: () => ({
    producto: {},
    productosrelacionados: [],
    breakpoints: {
      600: {
        visibleSlides: 2
      }
    }
  }),
  computed: {
    ...mapGetters('firebase', ['getProduct']),
    cellphonecompany () {
      return 'asdasd'
    },
    textLinkConsult () {
      const url = 'https://rrqq.me'
      const path = this.$route.fullPath
      const message = 'Hola, estoy interesado en este producto'
      return `${message} ${url}${path}`
    },
    route () {
      return this.$route
    }
  },
  created () {
    const slug = this.$route.params.slug
    this.producto = this.getProduct(slug)
  },
  methods: {
    ...mapActions('shop', ['addItemToShoppingCar']),
    addToCart (product) {
      this.addItemToShoppingCar(product)
    }
  }
}
</script>

<style lang="scss" scoped>
.marca {
  text-decoration: none;
  color: #f00;
}
.marca:hover {
  color: #d20606;
}
.titulo-txt {
  font-size: 25px;
  font-weight: bold;
}
.texto-igv {
  color: #f00;
  font-size: 15px;
}
.precio-txt {
  font-size: 55px;
  font-weight: bold;
}
.btn-consulta {
  width: 100%;
  max-width: 600px;
}
.btn-text {
  font-size: 18px;
  color: white;
  text-decoration: none;
}
.titulo {
  color: #f00;
  font-size: 22px;
  font-weight: bold;
}
.myupper {
  text-transform: uppercase !important;
}
.mygrey {
  color: grey;
}
@media screen and (max-width: 600px) {
  .precio-txt {
  font-size: 45px;
  font-weight: bold;
  }
}
</style>
