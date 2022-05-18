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
}
.normal{
    height: 120px;
}
.salesiano{
    height: 80px;
}
.europa{
    height: 80px;
}
</style>