<template>
    <div class="contenidoestudio">
    <div class="izquierda">
      <div class="izquierdacontenido">
        <h3>{{ contenido.Titulo }}</h3>
        <p>{{ contenido.Texto1 }}</p>
        <p>{{ contenido.Texto2 }}</p>
        <p>{{ contenido.Texto3 }}<el-link v-bind:href="contenido.link" type="primary">{{contenido.Texto4}}</el-link></p>
      </div>
    </div>
    <div class="derechac">
      <figure class="derechafotoc">
        <img v-bind:src="contenido.img" v-bind:alt="contenido.alt" />
      </figure>
    </div>
  </div>
</template>
<script>
export default {
    name:"Derecha",
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
.derechac{
  background-color: rgb(220, 0, 27);
  width: 50%;
}
.derechafotoc {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 1em 1.7em 1em 0em;
}

.derechafotoc>img{
  width: 100%;
}

.el-link{
  font-size: 1em;
}
</style>