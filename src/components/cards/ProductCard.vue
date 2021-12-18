<template>
  <div class="minicard">
    <div class="minicard__img-container">
      <v-img width="240" max-height="180" contain class="mx-auto mb-2" :src="cPicture" @error="onImgError">
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
    <div class="text-center minicard__titulo pl-1 pr-1">
      <router-link :to="`/productos/asd/`" class="text-uppercase">
        producto.nombreCorto
      </router-link>
    </div>
    <div class="text-center">
      <alilab-button :width="180" :height="35">
        Agregar al carrito
      </alilab-button>
    </div>
    <div>
      <div class="text-body-2 text-center mt-2 mb-2">
        <v-icon size="19" color="primary">
          mdi-plus-box
        </v-icon>
        Stock: <span class="font-weight-bold mygreen">1</span>
      </div>
      <div class="minicard__precio text-body-1 d-flex justify-center align-center">
        S/ 100
      </div>
      <div class="minicard__precio-anterior text-caption text-decoration-line-through text-center">
        S/ 150
      </div>
    </div>
  </div>
</template>

<script>
import AlilabButton from '@/components/buttons/AlilabButton'

export default {
  name: 'ProductCard',
  components: {
    AlilabButton
  },
  props: {
    producto: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      failed_image: false
    }
  },
  computed: {
    cPicture () {
      return require('@/assets/producto/nodisponible.jpg')
    }
  },
  methods: {
    onImgError (event) {
      this.failed_image = true
    }
  }
}
</script>
<style scoped lang="scss">
.mywhite {
  background-color: white;
}
.myblack {
  color: black;
}
.minicard {
  height: 370px;
  width: 260px;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  &__img-container {
    height: 200px;
    width: 250px;
    padding: 0;
    margin: 0;
  }
  &__titulo {
    font-size: 12px;
    font-weight: bold;
    height: 36px;
    text-decoration: none;
  }
  &__titulo a{
    text-decoration: none;
  }
  &__titulo a:hover {
    color: #61ce70;
  }
  &__oferta {
    position: relative;
    z-index: 3;
    width: 90px;
    left: 5px;
    top: -210px;
  }
  &__nuevo {
    position:relative;
    z-index: 3;
    width: 60px;
    left: 90px;
    top: -210px;
  }
  &__marca {
    position: relative;
    z-index: 2;
    // width: 55px;
    height: 55px;
    left: 20px;
    top: -50px;
  }
  &__precio {
    height: 40px;
    width: 170px;
    background-color: #f0ae0e;
    border-radius: 10px;
    margin: 1px auto;
  }
  &__precio-anterior {
    color: grey;
  }
}
.minicard:hover {
  border: 2px solid #61ce70;
}
</style>
