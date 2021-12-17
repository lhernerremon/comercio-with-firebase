<template>
  <v-app>
    <comercio-header />
    <v-fade-transition>
      <router-view />
    </v-fade-transition>
    <comercio-footer />
  </v-app>
</template>

<script>
import ComercioHeader from '@/components/absolute/ComercioHeader'
import ComercioFooter from '@/components/absolute/ComercioFooter'

export default {
  name: 'App',
  components: {
    ComercioHeader,
    ComercioFooter
  },
  data: () => ({
    //
  })
}
</script>
