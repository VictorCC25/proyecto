<template>
    <div class="contenidoestudio">
    <div class="izquierda">
      <div class="izquierdacontenido">
        <p>{{ contenido.Texto1 }}</p>
        <p>{{ contenido.Texto2 }}</p>
        <p>{{ contenido.Texto3 }}</p>
        <p><el-link v-bind:href="contenido.link" type="danger">{{ contenido.Texto4 }}</el-link></p>
      </div>
    </div>
    <div class="derecha">
      <figure class="derechafoto">
        <img v-bind:src="contenido.img" v-bind:alt="contenido.alt" />
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
.izquierdacontenido {
  padding:0 3em;
  margin: auto;
}
.izquierdacontenido>h3{
    font-size: 2em;
    color: #2e2e2e;
    text-align: center;
    margin: 0;
}
.izquierdacontenido>p{
    font-size: 1.3em;
    color: #000;
    font-weight: 300;
}

</style>