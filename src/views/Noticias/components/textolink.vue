<template>
  <div class="textolink">
    <p>{{ contenido.texto1 }}</p>
    <p>{{ contenido.texto2 }}</p>
    <p>{{ contenido.texto3 }}</p>
    <p><el-link v-bind:href="contenido.link" type="danger">{{ contenido.texto4 }}</el-link></p>
  </div>
</template>
<script>
export default {
  name: "Texto-Link",
  props: ["contenido"],
};
</script>
<style>
.textolink{
    text-align: center;
    padding-bottom: 1em;
    font-size: 1.8em;
}
</style>
