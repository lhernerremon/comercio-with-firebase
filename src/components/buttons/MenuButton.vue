<template>
  <v-btn
    v-bind="$attrs"
    class="mobile-menu"
    height="50"
    width="50"
    min-width="50"
    v-on="$listeners"
  >
    <v-icon :color="iconColor" :size="iconSize">
      <slot />
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'MenuButton',
  props: {
    iconColor: {
      type: String,
      default: 'primary'
    },
    iconSize: {
      type: String,
      default: '45'
    }
  }

}
</script>

<style lang="scss" scoped>
.mobile-menu {
  display: none;
  position: absolute;
  background: linear-gradient(105.26deg, rgba(255, 255, 255, 0.3) 6.14%, rgba(255, 255, 255, 0.2) 69.39%);
  background-color: rgba(255, 255, 255, 0.2) !important;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  z-index: 999;
}

@media screen and (max-width: 736px) {
  .mobile-menu {
    display: flex;
  }
}
</style>
