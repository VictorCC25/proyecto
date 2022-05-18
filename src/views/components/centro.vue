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
