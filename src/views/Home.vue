<template>
  <div>
    <v-img src="@/assets/home/home00.png" />
    <div class="mx-16 px-16 mt-n16 mb-16">
      <v-img src="@/assets/home/home01.png" />
    </div>
    <div class="mx-16 px-16 mt-10">
      <v-img class="mx-16" src="@/assets/home/home02.png" />
    </div>
    <div class="my-10" />
    <p class="home-title text-center pt-10">
      Nuestros clientes felices!
    </p>
    <div class="clients mx-auto d-flex justify-space-around mt-10">
      <div class="clients-container pa-5">
        <div>
          Increíble tienda de artesania. Tuvimos la suerte de que nos atendieran, son unos expertos del Ayacucho y de la diversidad de artesanías que tiene este país.
        </div>
        <div class="d-flex align-center">
          <v-img class="img" src="https://artesanos.net.pe/wp-content/uploads/2021/11/paul.jpeg" max-width="50" />
          <p>Juvert Calle</p>
        </div>
      </div>
      <div class="clients-container pa-5">
        <div>
          Parece una galería de arte y tiene una variedad impresionante de obras ayacuchanas, altamente recomendable por la diversidad.
        </div>
        <div class="d-flex align-center">
          <v-img class="img" src="https://artesanos.net.pe/wp-content/uploads/2021/11/emm.jpg" max-width="50" />
          <p>Emma Velarde</p>
        </div>
      </div>
      <div class="clients-container pa-5">
        <div>
          La tienda de artesanías mas bella que vi, cada pieza admirable, me sentí como en un museo en que veo.
        </div>
        <div class="d-flex align-center">
          <v-img class="img" src="https://artesanos.net.pe/wp-content/uploads/2021/11/ssan.jpeg" max-width="50" />
          <p>Susan Tomairo</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home-title {
  font-size: 50px;
  font-weight: 900;
  line-height: 60px;
}
.clients {
  width: 80%;
}
.clients-container {
  width: 400px;
  border: 1px solid grey;
  border-radius: 10px;
}
.img {
  border-radius: 50%;
}
</style>
