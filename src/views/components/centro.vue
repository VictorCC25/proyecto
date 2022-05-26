<template>
  <div class="fila" v-for="(row, id) in filas" :key="id">
    <div class="fototexto">
      <div class="fila-texto-i">
        <p>{{ row.Texto11 }}</p>
        <p>{{ row.Texto12 }}</p>
        <p>{{ row.Texto13 }}</p>
      </div>
      <img v-bind:src="row.img1" v-bind:alt="row.alt1" />
    </div>
    <div class="fototexto">
      <img v-bind:src="row.img2" v-bind:alt="row.alt2" />
      <div class="fila-texto-d">
        <p>{{ row.Texto21 }}</p>
        <p>{{ row.Texto22 }}</p>
        <p>{{ row.Texto23 }}</p>
      </div>
    </div>
  </div>
  <router-link to="/centro/metodo">
    <div class="vermas">
      <span>VER MÁS SOBRE NUESTRO MÉTODO EDUCATIVO</span>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "Escuela",
  props: ["filas"],
};
</script>
<style>
.fila {
  padding-top: 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.fototexto {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.fototexto img {
  width: 150px;
  height: 150px;
  margin: 30px;
}

.fila-texto-i {
  text-align: right;
  font-size: 1em;
  font-weight: 300;
}

.fila-texto-d {
  text-align: left;
  font-size: 1em;
  font-weight: 300;
}

.vermas {
  margin: 20px;
}

.vermas > span {
  text-align: center;
  background-color: #51626f;
  padding: 1em;
  border-radius: 20px;
  color: #fff;
}
@media screen and (max-width: 426px) {
  .fila-texto-d{
    text-align: center;
  }
  .fila-texto-i{
    text-align: center;
  }
  .fototexto{
    text-align: center;
    width: 98%;
    justify-content: space-around;
  }
  .vermas > span{
    font-size: .65em;
  }
}
</style>