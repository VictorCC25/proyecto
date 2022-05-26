<template>
  <br />
  <h1 class="titulolista">MÓDULOS DEL CICLO</h1>
  <div class="contenedorlistas">
    <div class="contenidomodulos">
      <div class="elementoslistas">
        <h3>Primer Curso</h3>
        <ul>
          <li v-for="(lista, id) in modulos1" :key="id" class="listas">
            <span class="circulo"></span>
            {{ lista.Texto }}
          </li>
        </ul>
      </div>
    </div>
    <div class="contenidomodulos">
      <div class="elementoslistas">
        <h3>Segundo Curso</h3>
        <ul>
          <li v-for="(lista, id) in modulos2" :key="id" class="listas">
            <span class="circulo"></span>
            {{ lista.Texto }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modulos",
  props: ["modulos1", "modulos2"],
};
</script>
<style>
.contenidomodulos {
  width: 50%;
}
@media screen and (max-width: 768px){
  .contenidomodulos{
      width: 98%;
  }
  .titulolista{
    font-size: 2em;
}
}
</style>
