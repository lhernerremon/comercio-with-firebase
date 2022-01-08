<template>
  <div>
    <div v-if="pedidoSend">
      <div class="mycontainer my-16">
        Pedido hecho correctamente <br>
        Lo validaremos y le harémos llegar un correo electrónico
      </div>
    </div>
    <div v-else class="mycontainer d-flex">
      <div class="width-media">
        <v-form ref="form">
          <div class="d-flex">
            <v-text-field
              v-model="formulario.nombre"
              label="Nombres"
              :rules="[rules.required]"
            />
            <v-text-field
              v-model="formulario.apellido"
              class="ml-3"
              label="Apellidos"
              :rules="[rules.required]"
            />
          </div>
          <v-text-field
            v-model="formulario.email"
            label="E-mail"
            :rules="[rules.required, rules.email]"
          />
          <v-text-field
            v-model="formulario.celular"
            label="Celular"
            :rules="[rules.required, rules.cellphone]"
          />
          <v-text-field
            v-model="formulario.pais"
            label="País"
            disabled
          />
          <v-select
            v-model="formulario.ciudad"
            :items="ciudades"
            label="Ciudad"
            :rules="[rules.required]"
          />
          <div class="d-flex">
            <v-text-field
              v-model="formulario.direccion"
              label="Dirección"
              :rules="[rules.required]"
            />
            <v-text-field
              v-model="formulario.zip"
              class="ml-3"
              style="width:10%;"
              label="Código postal"
            />
          </div>
        </v-form>
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
                      S/. {{ item.price }}
                    </span>
                  </div>
                </td>
              </tr>
              <tr v-if="formulario.ciudad != 'Ayacucho'">
                <td class="text-left">
                  Costo envío <span><strong>{{ formulario.ciudad }}</strong></span>
                </td>
                <td class="text-right">
                  S/. 15
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
        <v-form class="pa-10 rr my-16 mx-16">
          <span class="text-h6">
            Tarjeta de crédito
          </span>
          <v-divider />

          <form-card class="my-5" @input-card-number="cardNumber" @input-card-name="cardName" @input-card-cvv="cardCvv" />

          <div class="text-center mt-10">
            <alilab-button :height="40" :loading="loadingButton" @click="postPedido">
              Realizar pedido
            </alilab-button>
          </div>

          <!-- paypal -->
          <div class="d-flex justify-center my-5">
            <div class="button-paypal">
              <v-img class="button-paypal__image" height="60" contain src="@/assets/paypal.png" />
            </div>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import FormCard from '@/components/forms/FormCard'
import AlilabButton from '@/components/buttons/AlilabButton'
import { email, required, cellphone } from '@/utils/rules'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    AlilabButton,
    FormCard
  },
  data () {
    return {
      formulario: {

        pais: 'Perú',
        ciudad: ''
      },
      tarjeta: {
        name: '',
        number: '',
        cvv: ''
      },
      ciudades: ['Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca', 'Callao', 'Cusco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura', 'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'],
      rules: {
        required,
        email,
        cellphone
      },
      loadingButton: false,
      formError: false,
      pedidoSend: false
    }
  },
  computed: {
    ...mapState('shop', ['shoppingCar']),
    subTotal () {
      const plus = 15
      const subtotal = this.shoppingCar.reduce((partialSum, item) => {
        const price = item.discount ? item.discount : item.price
        return partialSum + price * item.amount
      }, 0)
      if (this.formulario.ciudad !== 'Ayacucho') {
        return subtotal + plus
      } else {
        return subtotal
      }
    }
  },
  methods: {
    ...mapActions('firebase', ['setPedido']),
    cardNumber (value) {
      this.tarjeta.number = value
    },
    cardName (value) {
      this.tarjeta.name = value
    },
    cardCvv (value) {
      this.tarjeta.cvv = value
    },
    async postPedido () {
      let pedidovalidate = false
      let tarjetavalidate = false
      if (this.shoppingCar.length === 0) {
        alert('El carrito no puede estar vacio')
      } else {
        pedidovalidate = true
      }

      if (this.tarjeta.number === '' || this.tarjeta.name === '' || this.tarjeta.cvv === '') {
        alert('Complete todos los datos de la tarjeta')
      } else {
        tarjetavalidate = true
      }

      if (this.$refs.form.validate() && pedidovalidate && tarjetavalidate) {
        this.loadingButton = true
        try {
          const pedido = {
            formulario: this.formulario,
            tarjeta: this.tarjeta,
            pedido: this.shoppingCar
          }
          await this.setPedido(pedido)
        } catch (e) {
          this.formError = true
        } finally {
          this.loadingButton = false
          this.pedidoSend = true
        }
      } else {
        this.formError = true
      }
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
  width: 90%;
}
.button-paypal {
  background: #ffcd05;
  width: 70%;
  height: 60px;
  border-radius: 5px;
}
</style>
