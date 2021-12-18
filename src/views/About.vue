<template>
  <div>
    <div class="w-nv mx-auto px-16 my-10">
      <v-img class="mx-16" src="@/assets/about/about00.png" />
    </div>
    <div class="w-oc mx-auto px-16 my-10">
      <v-img class="mx-16" src="@/assets/about/about01.png" />
    </div>
    <div class="w-oc mx-auto px-16 my-10">
      <v-img class="mx-16" src="@/assets/about/about02.png" />
    </div>
    <div class="w-oc mx-auto px-16 my-10">
      <router-link to="/contact">
        <v-img class="mx-16" src="@/assets/about/about03.png" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.w-nv {
  width: 90%;
}
.w-oc {
  width: 80%;
}
</style>
