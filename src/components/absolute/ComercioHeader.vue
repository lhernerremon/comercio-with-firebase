<template>
  <div class="d-flex align-center flex-column mt-10">
    <div class="header">
      <div>
        <router-link class="header__secondary-title" to="/">
          Inicio
        </router-link>
        <div :class="{ 'is-home': isPageHome }" />
      </div>
      <div>
        <router-link class="header__secondary-title" to="/store">
          Tienda
        </router-link>
        <div :class="{ 'is-store': isPageStore }" />
      </div>
      <div>
        <router-link class="header__secondary-title" to="/about">
          ¿Quiénes somos?
        </router-link>
        <div :class="{ 'is-about': isPageAbout }" />
      </div>
      <div>
        <router-link class="header__secondary-title" to="/contact">
          Contacto
        </router-link>
        <div :class="{ 'is-contact': isPageContact }" />
      </div>
      <v-badge
        class="cart-badge"
        color="primary"
        :content="servicesInCar.toString()"
      >
        <shop-modal :is-shop="isPageStore" />
      </v-badge>
    </div>
    <v-img src="@/assets/lgo.png" max-width="200" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ShopModal from '@/components/modal/ShopModal'

export default {
  name: 'AlilabHeader',
  components: {
    ShopModal
  },
  props: {
    allWhite: {
      type: Boolean,
      default: false
    },
    tittleHeader: {
      type: Boolean,
      default: false
    },
    allGreen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      shopdrawer: false
    }
  },
  computed: {
    ...mapState('shop', ['shoppingCar']),
    isPageHome () {
      return this.$route.name === 'Home'
    },
    isPageStore () {
      return this.$route.name === 'Store'
    },
    isPageAbout () {
      return this.$route.name === 'About'
    },
    isPageContact () {
      return this.$route.name === 'Contact'
    },
    servicesInCar () {
      return this.shoppingCar.length
    }
  }
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
@mixin magic-border($width, $color, $duration, $direction){
  position:relative;
    &:before{
      content:'';
      position:absolute;
      width:calc(100% + #{$width * 2});
      height:3px;
      bottom: -3px;
      left:calc(#{$width}/-1);
      background:linear-gradient(to right, $color 0%, $color 100%), linear-gradient(to left, $color 0%, $color 100%);
      background-size:100% $width, $width 200%, $width 200%, 0% $width, 0% $width;
      background-position:50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
      background-repeat:no-repeat, no-repeat;
      transition:transform $duration ease-in-out, background-position $duration ease-in-out, background-size $duration ease-in-out;
      transform:scaleX(0) rotate(180deg * $direction);
    }
    &:hover{
      &:before{
        background-size:200% $width, $width 400%, $width 400%, 55% $width, 55% $width;
        background-position:50% 100%, 0 100%, 100% 100%, 100% 0, 0 0;
        transform:scaleX(1) rotate(180deg * $direction);
        transition-delay:0s, $duration, $duration*2;
      }
    }
}
.green---text {
  color: #61ce70;
}
.main-container {
  width: 100%;
}
.text-title {
  position: relative;
  top: 120px;
  font-size: 36px;
  font-weight: 800;
  line-height: 50px;
}
.header {
  height: 57px;
  font-weight: 700;
  background: linear-gradient(
      105.26deg, rgba(255, 255, 255, 0.3) 6.14%, rgba(255, 255, 255, 0.2) 69.39%);
  box-shadow: 2px 4px 8px rgb(0 0 0 / 10%);
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 20px;
  width: 807px;

  &__title {
    color: white;
    text-decoration: none;
    @include magic-border(3px, white, 0.3s, 0);
  }

  &__secondary-title {
    color: #61ce70;
    @include magic-border(3px, #61ce70, 0.3s, 0);
  }

  .nuxt-link-active {
    &:before {
      background-size: 200% 3px, 3px 400%, 3px 400%, 55% 3px, 55% 3px;
      background-position: 50% 100%, 0 100%, 100% 100%, 100% 0, 0 0;
      transform: scaleX(1) rotate(180deg * 0);
      transition-delay: 0.6s;
    }
  }
}

.is-home {
  position: relative;
  top: -3px;
  right: 3px;
  width: 45px;
  border-bottom: 3px solid #61ce70;
}
.is-store {
  position: relative;
  top: -3px;
  right: 3px;
  width: 57px;
  border-bottom: 3px solid #61ce70;
}
.is-about {
  position: relative;
  top: -3px;
  right: 3px;
  width: 133px;
  border-bottom: 3px solid #61ce70;
}
.is-contact {
  position: relative;
  top: -3px;
  right: 3px;
  width: 72px;
  border-bottom: 3px solid #61ce70;
}

.logo {
  position: absolute;
  top: 5px;
  right: 5px;
}

@media screen and (max-width: 736px) {
  .main-container {
    display: none;
  }
  .logo {
    display: none;
  }
  .text-title {
    display: block !important;
    position: relative;
    top: 53px;
    font-size: 18px;
    font-weight: 800;
  }
  .theme--light.v-btn {
    color: white !important;
  }
}

</style>
