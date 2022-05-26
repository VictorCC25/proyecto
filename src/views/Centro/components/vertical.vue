<template>
  <div>
    <br />
    <div class="filavertical" v-for="(contenido, id) in contenidos" :key="id">
      <div class="columnavertical" v-for="(columna, id) in contenido" :key="id">
        <figure class="imgvertical">
          <img v-bind:src="columna.img" v-bind:alt="columna.alt" />
        </figure>
        <div class="textovertical" v-for="(texto, id) in columna.texto" :key="id">
          <p>{{ texto.texto }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Lema",
  props: ["contenidos"],
};
</script>
<style>
.filavertical {
  display: flex;
  flex-wrap: wrap;
}
.columnavertical {
    width: 50%;;
}
.imgvertical {
  width: 100%;
  margin: 0 auto;
  padding: 1em 2em;
  max-width: 400px;
  min-width: 0px;
}
.imgvertical>img{
    width: 100%;
}
.textovertical {
  padding: 0 4.5em;
  margin: auto;
}
.textovertical>p{
    font-weight: 400;
    font-size: 1.4em;
}
@media screen and (max-width: 768px){
  .columnavertical{
    width: 100%;
  }
}
</style>
