<template>
  <div class="contenidoestudio">
    <div class="izquierda pequeña">
      <figure class="izquierdafotop">
        <img v-bind:src="contenido.img" v-bind:alt="contenido.alt" />
      </figure>
    </div>
    <div class="derecha">
      <div class="derechacontenido">
        <h3>{{ contenido.Titulo }}</h3>
        <p>{{ contenido.Texto1 }}</p>
        <p>{{ contenido.Texto2 }}</p>
        <p>{{ contenido.Texto3 }}</p>
        <p>{{ contenido.Texto4 }}</p>
        <p>{{ contenido.Texto5 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IzquierdaGrande",
  props: ["contenido"],
};
</script>
<style>
.pequeña{
  text-align: center;
}
</style>
