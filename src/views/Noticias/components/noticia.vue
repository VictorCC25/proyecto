<template>
  <div class="contenedornoticias" v-for="(noticia, id) in noticias" :key="id">
    <router-link v-bind:to="noticia.link">
    <div class="tarjetanoticia">
      <figure v-if="noticia.img">
        <img
          v-bind:src="noticia.img"
          v-bind:alt="noticia.alt"
          class="noticiafoto"
        />
      </figure>
      <h3>{{ noticia.titulo }}</h3>
      <p class="noticiasubtitulo">{{ noticia.texto1 }}</p>
      <p>{{ noticia.texto2 }}</p>
      <p class="contenidocompleto">Contenido Completo</p>
    </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Noticia",
  props: ["noticias"],
};
</script>
<style>
.contenedornoticias {
  text-align: center;
  display: inline-block;
}
.tarjetanoticia {
  display: inline-block;
  width: 350px !important;
  padding: 15px;
  border-radius: 10px;
  margin: 40px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.80);
}
.tarjetanoticia:hover{
  background-color: rgba(255, 255, 255, 1);
}
.tarjetanoticia > figure {
  width: 350px;
  border-radius: 10px 10px 0 0;
  padding: 0;
  margin: 0 auto;
  overflow: hidden;
}
.noticiafoto {
  filter: saturate(100%);
  width: 350px;
}
.tarjetanoticia > h3 {
  margin: 1em 0 0;
  font-family: sans-serif;
  font-weight: 300;
  font-size: 2em;
  color: #51626f;
  text-align: center;
}
.noticiasubtitulo {
  font-family: sans-serif;
  font-size: 1.2em;
  color: #51626f;
  margin: 0.5em 0;
  text-align: center;
}
.tarjetanoticia > p {
  text-align: center;
}
.contenidocompleto {
  color: #4a8089;
}
@media screen and (max-width: 425px) {
  .tarjetanoticia {
  display: inline-block;
  width: 300px !important;
}
.tarjetanoticia > figure {
  width: 290px;
}
}
</style>
