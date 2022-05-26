<template>
    <div v-for="(foto, id) in fotos" :key="id" class="contenidofd">
        <img v-bind:src="foto.src" v-bind:alt="foto.alt" v-bind:class="foto.class">
    </div>
</template>
<script lang="ts">
export default{
    name: 'Fotos',
    props: ['fotos']
}
</script>
<style>
.contenidofd{
    padding: 0 4.5em;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}

.normal{
    height: 110px;
}
.salesiano{
    height: 70px;
}
.europa{
    height: 70px;
}
@media screen and (max-width: 1024px){
  .contenidofd{
    display: none;
  }
}
</style>