<template>
  <div class="mycontainer d-flex">
    <div class="width-media">
      <form-fact />
    </div>
    <!-- table -->
    <div class="width-media rr mx-16 pt-4">
      <p class="text-h5 text-center">
        Tu orden
      </p>
      <v-simple-table class="py-5 px-10">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Producto
              </th>
              <th class="text-right">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in shoppingCar"
              :key="item.id"
            >
              <td class="text-left">
                {{ item.name }}&nbsp;x{{ item.amount }}
              </td>
              <td class="text-right">
                <div>
                  <span v-if="item.discount">
                    S/. {{ item.discount }}
                  </span>
                  <span v-else>
                    PS/. {{ item.price }}
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="text-left">
                <strong>Total</strong>
              </td>
              <td class="text-right">
                <strong>S/ {{ subTotal }}</strong>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <!-- tarjeta -->
      <v-form class="pa-10 rr mt-16 mx-16">
        <span class="text-h6">
          Tarjeta de crédito
        </span>
        <v-divider />
        <span class="my-3">Pagar con tu tarjeta de crédito MODO DE PRUEBA HABILITADO. En el modo de prueba, puede usar el número de tarjeta 4242424242424242 con cualquier CVC y una fecha de vencimiento válida o consulte la documentación de Testing Stripe para obtener más números de tarjeta.</span>
        <v-text-field
          v-model="tarjeta.numero"
          label="Número de tarjeta"
          outlined
          required
          append-icon="mdi-credit-card-outline"
          hint="1234 1234 1234 1234"
        />
        <div class="d-flex">
          <v-text-field
            v-model="tarjeta.fecha"
            label="Fecha de caducidad"
            outlined
            required
            hint="MM / AA"
          /><v-text-field
            v-model="tarjeta.code"
            class="ml-3"
            outlined
            label="Código de tarjeta (CVC)"
            hint="CVC"
            required
          />
        </div>
        <div class="text-center mt-10">
          <alilab-button :height="40">
            Realizar pedido
          </alilab-button>
        </div>
      </v-form>
      <!-- paypal -->
      <div class="d-flex justify-center my-5">
        <div class="button-paypal">
          <v-img class="button-paypal__image" height="60" contain src="@/assets/paypal.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormFact from '@/components/forms/FormFact'
import AlilabButton from '@/components/buttons/AlilabButton'
import { mapState } from 'vuex'

export default {
  components: {
    FormFact,
    AlilabButton
  },
  data () {
    return {
      tarjeta: {}
    }
  },
  computed: {
    ...mapState('shop', ['shoppingCar']),
    subTotal () {
      return this.shoppingCar.reduce((partialSum, item) => {
        const price = item.discount ? item.discount : item.price
        return partialSum + price * item.amount
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.width-media {
  width: 50%;
}
.rr {
  border: 1px solid grey;
}
.mycontainer {
  width: 70%;
}
.button-paypal {
  background: #ffcd05;
  width: 70%;
  height: 60px;
  border-radius: 5px;
}
</style>
