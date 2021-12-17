<template>
  <div id="container">
    <div id="contacts">
      <div id="contacts--contact">
        <p>{{ mail }}</p>
        <p>{{ phone }}</p>
      </div>
      <div id="contacts--social">
        <v-icon color="white">
          mdi-facebook
        </v-icon>
        <v-icon color="white">
          mdi-youtube
        </v-icon>
        <v-icon color="white">
          mdi-instagram
        </v-icon>
      </div>
    </div>
    <div id="mentions">
      <p>{{ mention }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mail: 'contacto@artesanos.net.pe',
      phone: '+51 933 584 884',
      mention: '2021 | UNSCH'
    }
  }
}
</script>

<style lang="scss" scoped>
#container{
  padding-top:20px;
  margin-top:20px;
  width:100vw;
  color:white;
  background-color:#000;
  display:flex;
  flex-direction:column;
  align-items:center;
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  text-align:right;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:30px;
  width:30px;
  background-color:white;
  border-radius:50%;
}
#mentions p {
  font-size:0.5em;
}
</style>
