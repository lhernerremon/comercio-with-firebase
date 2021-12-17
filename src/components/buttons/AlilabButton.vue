<template>
  <v-btn
    :height="$vuetify.breakpoint.mobile ? mobileHeight: height"
    :width="$vuetify.breakpoint.mobile ? mobileWidth: width"
    class="alilab-button"
    v-bind="$attrs"
    :color="color"
    :disabled="disabled"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'AlilabButton',
  props: {
    height: {
      type: Number,
      default: 70
    },
    width: {
      type: Number,
      default: 250
    },
    mobileHeight: {
      type: Number,
      default: 50
    },
    mobileWidth: {
      type: Number,
      default: 150
    },
    color: {
      type: String,
      default: '#006E43'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

.alilab-button {
  letter-spacing: 0;
  text-transform: none;
  font-weight: 800;
  color: white;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 15%);
  border-radius: 50px;
  font-size: 18px;
  line-height: 50px;
}

@media screen and (max-width: 736px){
  .alilab-button {
    font-size: 14px;
  }
}

</style>
