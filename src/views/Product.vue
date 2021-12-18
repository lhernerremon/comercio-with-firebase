<template>
  <div class="mycontainer">
    <!-- Inicio BreadCrumbs -->
    <div class="mybreadcrumbs">
      <span class="text--disabled myupper">producto.nombreCorto</span>
    </div>
    <!-- Fin BreadCrumbs -->
    <v-row>
      <v-col cols="12" md="6" class="pl-5">
        <div class="mt-5 titulo-txt myupper">
          producto.nombre
        </div>
        <div class="d-flex mt-5">
          <div>
            <v-img max-width="120" contain src="@/assets/logo.png">
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
            <div>Stock: <span class="font-weight-bold mygreen">producto.textoStock</span></div>
          </div>
        </div>
        <div class="mt-10">
          <div class="precio-txt mt-10">
            S/ 123
          </div>
          <div v-if="producto.oferta" class="text-caption text-decoration-line-through mygrey">
            S/123
          </div>
          <div class="texto-igv">
            Precio incluye IGV
          </div>
        </div>
        <div class=" d-flex justify-center">
          <v-btn color="green" large dark class=" my-10 btn-consulta" elevation="20">
            <v-icon class="mr-2" size="30">
              mdi-whatsapp
            </v-icon>
            <span>Agregar al carrito</span>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <detail-product-card />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import DetailProductCard from '@/components/cards/DetailProductCard'

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
    },
    rr: ''
  }),
  computed: {
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
