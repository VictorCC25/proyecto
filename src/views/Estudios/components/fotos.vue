<template>
  <el-carousel :interval="4000" type="card" height="300px" trigger="click" class="fotoscarousel">
    <el-carousel-item v-for="(foto, id) in fotos" :key="id" class="carouselestudios">
      <img v-bind:src="foto.img" v-bind:alt="foto.alt" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    name:"Fotos",
    props:['fotos']
}
</script>
<style>
.carouselestudios{
    text-align: center;
}
@media screen and (max-width: 425px){
  .fotoscarousel{
    display: none;
  }
}
</style>
