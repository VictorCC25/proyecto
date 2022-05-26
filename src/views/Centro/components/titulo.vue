<template>
<div class="tituloposicion">
  <h1>{{ titulos.Titulo1 }}</h1>
  <h2>{{ titulos.Titulo2 }}</h2>
</div>
</template>
<script>
export default {
  name: "ESO",
  props: ["titulos"],
};
</script>
<style>
.tituloposicion {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 2em;
}
@media screen and (max-width: 425px){
  .tituloposicion > h1{
    font-size: 1em;
  }
  .tituloposicion > h2{
    font-size: .75em;
  }
}
</style>
