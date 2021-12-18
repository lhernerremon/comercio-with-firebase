<template>
  <div class="pr-4">
    <div class="service d-flex align-center">
      <button class="service__btn-close d-flex justify-center align-center" @click="removeItemToCar(service)">
        <v-icon class="">
          mdi-close
        </v-icon>
      </button>
      <div class="service__contain pl-4">
        <div class="service__title">
          {{ service.name }}
        </div>
        <div class="service__price my-2">
          <div v-if="service.discount">
            Precio por : S/. {{ service.discount }}
          </div>
          <div v-else>
            Precio por : S/. {{ service.price }}
          </div>
        </div>
        <div class="service__buttons d-flex align-center justify-space-between">
          <v-btn small icon @click="reduceServiceAmount(service)">
            <span class="btn-color">-</span>
          </v-btn>
          <span>{{ service.amount.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}) }}</span>
          <v-btn small icon color="primary" @click="addServiceAmount(service)">
            <span class="btn-color">+</span>
          </v-btn>
        </div>
      </div>
    </div>
    <v-divider class="my-4" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ServiceShopCard',
  props: {
    service: {
      type: Object,
      default () {
        return {
          id: '',
          name: '',
          description: '',
          duration: '',
          price: '',
          image: '',
          priceType: '',
          additionalText: '',
          amount: 0
        }
      }
    }
  },
  data () {
    return {
      value: 1
    }
  },
  methods: {
    ...mapActions('shop', ['removeItemToShoppingCar', 'setServiceQuantity']),
    removeItemToCar (item) {
      this.removeItemToShoppingCar(item)
    },
    async addServiceAmount (item) {
      await this.setServiceQuantity({ amount: item.amount + 1, service: item })
    },
    async reduceServiceAmount (item) {
      if (item.amount - 1 > 0) {
        await this.setServiceQuantity({ amount: item.amount - 1, service: item })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.service {
  &__btn-close {
    border: 1px solid #727272;
    width: 30px;
    height: 30px;
  }

  &__contain {
    width: 80%;
  }

  &__title {
    color: #000;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }

  &__price {
    color: #61ce70;
    font-weight: 600;
    font-size: 14px;
    line-height: 25px;
  }

  &__buttons {
    border: 1px solid #949494;
    box-sizing: border-box;
    border-radius: 20px;
    width: 96px;
    height: 33px;
  }
}

.btn-color {
  color: #61ce70;
  font-weight: 600;
  font-size: 24px;
}
</style>
