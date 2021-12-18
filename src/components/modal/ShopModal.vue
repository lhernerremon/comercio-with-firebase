<template>
  <v-dialog
    v-model="showShoppingCard"
    width="375"
    class="dialog"
    :fullscreen="$vuetify.breakpoint.mobile"
    transition="slide-x-reverse-transition"
  >
    <template #activator="{ on, attrs }">
      <div class="is-shop-container" v-bind="attrs" v-on="on">
        <v-icon color="primary">
          mdi-cart-outline
        </v-icon>
        <div :class="{ 'is-shop': isShop }" />
      </div>
    </template>
    <v-card class="card">
      <v-card-title>
        <div class="dialog__title d-flex justify-center align-center">
          <span>Carrito de compras</span>
          <menu-button class="mobile-menu" @click="showShoppingCard=false">
            mdi-chevron-left
          </menu-button>
          <button class="dialog__btn-close d-flex justify-center align-center" @click="showShoppingCard=false">
            <v-icon class="">
              mdi-close
            </v-icon>
          </button>
        </div>
      </v-card-title>
      <v-card-text class="dialog__content">
        <div class="content pl-6">
          <service-shop-card v-for="(item, index) in shoppingCar" :key="index" :service="item" />
        </div>
        <div class="d-flex flex-column align-center px-6">
          <div class="shop d-flex justify-space-between align-center pt-3">
            <div class="shop__subtotal">
              Subtotal
            </div>
            <span class="shop__price">S./ {{ subTotal }}</span>
          </div>
          <alilab-button
            :height="50"
            :width="326"
            :mobile-width="335"
            class="shop__button my-4"
            @click="goTo('/cart/')"
          >
            Finalizar compra
          </alilab-button>
          <a class="shop__skip" @click="goTo('/store/')">Seguir comprando</a>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import MenuButton from '@/components/buttons/MenuButton'
import AlilabButton from '@/components/buttons/AlilabButton'
import ServiceShopCard from '@/components/cards/ServiceShopCard'

export default {
  name: 'ShopModal',
  components: {
    MenuButton,
    AlilabButton,
    ServiceShopCard
  },
  props: {
    allWhite: {
      type: Boolean,
      default: false
    },
    isShop: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapState('shop', ['shoppingCar']),
    ...mapGetters('shop', ['getShowShoppingCard']),
    showShoppingCard: {
      get () {
        return this.getShowShoppingCard
      },
      set (newValue) {
        this.setShowShoppingCar(newValue)
        return newValue
      }
    },
    subTotal () {
      return this.shoppingCar.reduce((partialSum, item) => {
        const price = item.discount ? item.discount : item.price
        return partialSum + price * item.amount
      }, 0)
    }
  },
  methods: {
    ...mapActions('shop', ['setShowShoppingCar']),
    goTo (url) {
      this.showShoppingCard = false
      this.$router.push(url)
    }
  }

}
</script>

<style lang="scss" scoped>
.v-dialog__content {
  justify-content: right;
  left: 25px;
  height: auto;
}

.v-dialog > .v-card > .v-card__text {
  padding: 0 5px 20px;
}

.mobile-menu {
  display: none;
  left: 20px;
}

.dialog {
  z-index: 1000;

  &__content {
    height: 100%;
  }

  &__title {
    width: 100%;
  }

  &__title span {
    color: #61ce70;
    font-weight: 800;
    font-size: 24px;
    line-height: 50px;
  }

  &__btn-close {
    border: 1px solid #727272;
    width: 30px;
    height: 30px;
    position: absolute !important;
    right: 10px;
  }
}

.is-shop-container {
  width: 28px;
}

.is-shop {
  position: relative;
  top: 3px;
  right: 3px;
  width: 34px;
  border-bottom: 3px solid #61ce70;
}

.content {
  height: 60%;
  overflow: auto;
}

.v-card {
  overflow: hidden;
  height: 100vh;
}

.shop {
  width: 100%;

  &__subtotal {
    color: #000;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
  }

  &__price {
    color: #61ce70;
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;
  }

  &__button {
    font-weight: 600;
    font-size: 16px;
    line-height: 50px;
  }

  &__skip {
    color: #61ce70;
    font-weight: 600;
    font-size: 16px;
    line-height: 50px;
  }
}

// scroll
.content::-webkit-scrollbar {
  -webkit-appearance: none;
}

.content::-webkit-scrollbar:vertical {
  width: 8px;
}

.content::-webkit-scrollbar-button:increment, .contenedor::-webkit-scrollbar-button {
  display: none;
}

.content::-webkit-scrollbar-thumb {
  background-color: #d6d6d6;
  border-radius: 4px;
  border: 2px solid #f1f2f3;
}

.content::-webkit-scrollbar-track {
  border-radius: 10px;
}

@media screen and (max-width: 736px) {
  .mobile-menu {
    display: flex;
  }
  .content {
    height: 390px;
  }
  .v-card {
    height: auto;
  }
  .dialog {
    &__title span {
      width: 211px;
      text-align: center;
      line-height: 25px;
      padding: 0 35px;
    }

    &__btn-close {
      display: none !important;
    }
  }
}

</style>
