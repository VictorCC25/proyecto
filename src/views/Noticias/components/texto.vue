<template>
  <div class="textolink">
    <p>{{ contenido.texto1 }}</p>
    <p>{{ contenido.texto2 }}</p>
    <p>{{ contenido.texto3 }}</p>
    <p>{{ contenido.texto4 }}</p>
  </div>
</template>
<script>
export default {
  name: "Texto-Link",
  props: ["contenido"],
};
</script>