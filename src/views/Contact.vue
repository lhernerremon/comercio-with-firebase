<template>
  <div>
    <iframe
      class="mt-5"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7769.94243080153!2d-74.21762271484988!3d-13.164214914071955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91127df3a774ab1f%3A0xa8754afd6ff9a870!2sPlaza%20Mayor%20de%20Huamanga%2C%20Ayacucho!5e0!3m2!1ses-419!2spe!4v1639793478660!5m2!1ses-419!2spe"
      width="100%"
      height="500"
      frameborder="0"
      allowfullscreen="allowfullscreen"
      aria-hidden="false"
      tabindex="0"
      style="border: 0px; border-radius: 1rem; margin-bottom: 5rem;"
    />
    <div class="contact-container mx-auto d-flex justify-space-between">
      <div>
        <p class="contact-title">
          Envianos un mensaje
        </p>
        <p>Nosotros inmediatamente te responderemos</p>
        <form-contact class="mt-16" />
      </div>
      <div class="mx-16 px-16 mt-10">
        <v-img class="mx-16" src="@/assets/contact/contact00.png" max-width="400" />
      </div>
    </div>
  </div>
</template>

<script>
import FormContact from '@/components/forms/FormContact'
export default {
  components: {
    FormContact
  }
}
</script>

<style lang="scss" scoped>
.contact-container {
  width: 70%;
}
.contact-title {
  color: #61ce70;
  font-size: 30px;
  font-weight: bold;
}
</style>
