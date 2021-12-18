<template>
  <div>
    <vueper-slides
      ref="vueperslides1"
      class="myheight"
      :autoplay="false"
      :bullets="false"
      :arrows-outside="true"
      :breakpoints="bigbreakpoints"
      fixed-height="450px"
      @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
    >
      <vueper-slide
        v-for="(imagen, i) in imagenes"
        :key="i"
      >
        <template #content>
          <div class="img-container text-center">
            <inner-image-zoom :src="imagen" />
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>

    <vueper-slides
      ref="vueperslides2"
      class="no-shadow thumbnails"
      :visible-slides="imagenes.length"
      fixed-height="100px"
      :bullets="false"
      :touchable="false"
      :breakpoints="minibreakpoints"
      :gap="2.5"
      :arrows="false"
      @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
    >
      <vueper-slide
        v-for="(imagen, i) in imagenes"
        :key="i"
        :image="imagen"
        @click.native="$refs.vueperslides2.goToSlide(i)"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import InnerImageZoom from 'vue-inner-image-zoom'
import 'vueperslides/dist/vueperslides.css'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'

export default {
  name: 'DetailProductCard',
  components: {
    VueperSlides,
    VueperSlide,
    InnerImageZoom
  },
  props: {
    imagenes: {
      type: Array,
      default: () => ['https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png', 'https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing-1024x538.png']
    }
  },
  data () {
    return {
      bigbreakpoints: {
        960: {
          arrowsOutside: false,
          arrows: true
        }
      },
      minibreakpoints: {
        500: {
          touchable: true,
          visibleSlides: 2
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.img-container {
  max-height: 450px;
  max-width: 600px;
  margin: 1px auto;
  object-fit: cover;
}

.thumbnails {
  margin: auto;
}
.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #f00;
}
@media screen and (max-width: 600px) {
  .myheight {
  height: 350px !important;
  }
}
@media screen and (max-width: 400px) {
  .myheight {
  height: 250px !important;
  }
}
</style>
