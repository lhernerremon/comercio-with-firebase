<template>
  <div>
    <v-form v-if="!messageSend" ref="form" @submit.prevent="sendContact">
      <div class="d-flex">
        <v-text-field
          v-model="contact.nombre"
          label="Nombres"
          :rules="[rules.required]"
        />
        <v-text-field
          v-model="contact.apellido"
          class="ml-3"
          label="Apellidos"
          :rules="[rules.required]"
        />
      </div>
      <v-text-field
        v-model="contact.email"
        label="E-mail"
        :rules="[rules.required, rules.email]"
      />
      <v-textarea
        v-model="contact.asunto"
        name="input-7-4"
        label="Asunto"
      />
      <div v-if="formError" class="pa-0 ma-0">
        <p class="error--text my-0 text-center" style="font-size: 13px;">
          Wrong send contact
        </p>
      </div>

      <div class="text-center mt-10">
        <alilab-button :height="50" type="submit" :loading="loadingButton">
          Enviar
        </alilab-button>
      </div>
    </v-form>
    <div v-else>
      Mensaje enviado
    </div>
  </div>
</template>

<script>
import AlilabButton from '@/components/buttons/AlilabButton'
import { email, required } from '@/utils/rules'
import { mapActions } from 'vuex'

export default {
  components: {
    AlilabButton
  },
  data () {
    return {
      contact: {
        nombre: '',
        apellido: '',
        email: '',
        asunto: ''
      },
      rules: {
        required,
        email
      },
      loadingButton: false,
      formError: false,
      messageSend: false
    }
  },
  methods: {
    ...mapActions('firebase', ['setContact']),
    async sendContact () {
      if (this.$refs.form.validate()) {
        this.loadingButton = true
        try {
          await this.setContact(this.contact)
        } catch (e) {
          this.formError = true
        } finally {
          this.loadingButton = false
          this.messageSend = true
        }
      } else {
        this.formError = true
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
