<template>
  <div>
    <p class="text-h5 text-center">
      Detalle de facturación
    </p>
    <v-form>
      <div class="d-flex">
        <v-text-field
          v-model="formulario.nombre"
          label="Nombres"
          required
        />
        <v-text-field
          v-model="formulario.apellido"
          class="ml-3"
          label="Apellidos"
          required
        />
      </div>
      <v-text-field
        v-model="formulario.email"
        label="E-mail"
        required
      />
      <v-text-field
        v-model="formulario.celular"
        label="Celular"
        required
      />
      <v-text-field
        v-model="formulario.pais"
        label="País"
        disabled
      />
      <v-select
        :items="ciudades"
        label="Ciudad"
      />
      <div class="d-flex">
        <v-text-field
          v-model="formulario.direccion"
          label="Dirección"
          required
        />
        <v-text-field
          v-model="formulario.zip"
          class="ml-3"
          style="width:10%;"
          label="Código postal"
          required
        />
      </div>
    </v-form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      formulario: {
        pais: 'Perú'
      },
      ciudades: ['Ayacucho', 'Lima']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
