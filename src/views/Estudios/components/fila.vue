<template>
  <h1 class="filah1">{{ fila.Titulo }}</h1>
  <div class="filaiconos">
    <div class="cajaicono" v-for="(foto, id) in fila.fotos" :key="id">
      <svg width="80" height="80" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="#dc9869">
        <path v-bind:d="foto.img"></path>
      </svg>
      <p>{{ foto.Titulo }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "fila",
  props: ["fila"],
};
</script>
<style>
.filaiconos {
  display: flex;
  text-align: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 92%;
  padding: 1em;
  color: #fff;
  max-width: 1200px;
  margin: auto;
}
.cajaicono{
    width: 16%;
    min-width: 175px;
    background-color: rgba(46,46,46,.65);
    padding: 0.8em;
    border-radius: 0.5em;
    fill: #dc9869;
    margin: 0 0 1em;
}
.filah1 {
  margin: 1.5em 0;
  font-family: sans-serif;
  font-weight: 300;
  font-size: 4em;
  color: #fff;
  text-align: center;
}
@media screen and (max-width: 1024px) {
  .filaiconos{
    width: 90%;
  }
}
@media screen and (max-width: 425px) {
  .filah1{
    font-size: 2em;
  }
}
</style>
