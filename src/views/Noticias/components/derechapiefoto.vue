<template>
    <div class="contenidoestudio">
    <div class="izquierda">
      <div class="izquierdacontenido">
        <p>{{ contenido.Texto1 }}</p>
        <p>{{ contenido.Texto2 }}</p>
      </div>
    </div>
    <div class="derecha">
      <figure class="derechafoto">
        <img v-bind:src="contenido.img" v-bind:alt="contenido.alt" />
        <figcaption>{{contenido.Texto3}}</figcaption>
      </figure>
    </div>
  </div>
</template>
<script>
export default {
    name:"Derecha-Link",
    props:['contenido']
}
</script>
<style>
figcaption{
    text-align: center;
    color: #51626f;
}
</style>