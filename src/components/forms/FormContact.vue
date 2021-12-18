<template>
  <div>
    <v-form v-model="valid">
      <div class="d-flex">
        <v-text-field
          v-model="nombre"
          label="Nombres"
          required
        />
        <v-text-field
          v-model="apellido"
          class="ml-3"
          label="Apellidos"
          required
        />
      </div>
      <v-text-field
        v-model="email"
        label="E-mail"
        required
      />
      <v-textarea
        name="input-7-4"
        label="Asunto"
      />
      <div class="text-center mt-10">
        <alilab-button :height="50">
          Enviar
        </alilab-button>
      </div>
    </v-form>
  </div>
</template>

<script>
import AlilabButton from '@/components/buttons/AlilabButton'
export default {
  components: {
    AlilabButton
  }
}
</script>

<style lang="scss" scoped>

</style>
