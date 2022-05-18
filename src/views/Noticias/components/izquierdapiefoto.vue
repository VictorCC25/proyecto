<template>
  <div class="contenidoestudio">
    <div class="izquierda">
      <figure class="izquierdafoto">
        <img v-bind:src="contenido.img" v-bind:alt="contenido.alt" />
        <figcaption>{{ contenido.Texto3 }}</figcaption>
      </figure>
    </div>
    <div class="derecha">
      <div class="derechacontenido">
        <p>{{ contenido.Texto1 }}</p>
        <p>{{ contenido.Texto2 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Derecha-Link",
  props: ["contenido"],
};
</script>
<style>
figcaption {
  text-align: center;
}
</style>
