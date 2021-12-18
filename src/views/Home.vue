<template>
  <div>
    <v-img src="@/assets/home/home00.png" />
    <div class="mx-16 px-16 mt-n16 mb-16">
      <v-img src="@/assets/home/home01.png" />
    </div>
    <div class="mx-16 px-16 mt-10">
      <v-img class="mx-16" src="@/assets/home/home02.png" />
    </div>
    <div class="mx-16 px-16 mt-10">
      <v-img class="mx-16" src="@/assets/home/home03.png" />
    </div>
    <div class="my-10" />
    <p class="home-title text-center pt-10">
      Nuestros clientes felices!
    </p>
    <comments class="clients mx-auto d-flex justify-space-around mt-10" />
  </div>
</template>

<script>
import Comments from '@/components/absolute/Comment'

export default {
  name: 'Home',
  components: {
    Comments
  }
}
</script>

<style lang="scss" scoped>
.home-title {
  font-size: 50px;
  font-weight: 900;
  line-height: 60px;
}
</style>
