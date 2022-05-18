<template>
  <h1 class="titulolista">{{titulo}}</h1>
  <div v-for="(documento, id) in documentos" :key="id" class="pdf">
    <a v-bind:href="documento.ruta">
      <div >
        <img v-bind:src="documento.foto" alt="PDF" />
      </div>
      <div>{{ documento.nombre }}</div>
    </a>
  </div>
</template>
<script>
export default {
  name: "Secretaria",
  props: ["documentos","titulo"],
};
</script>
<style scoped>
.pdf {
  display: inline-block;
  position: relative;
  text-align: center;
  padding: 0 1em 1em 1em;
}
</style>
