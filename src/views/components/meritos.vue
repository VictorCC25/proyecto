<template>
  <div class="fila2" v-for="(merito, id) in meritos" :key="id">
  <router-link v-bind:to="merito.link1" class="merito">
    <div >
      <img v-bind:src="merito.img1" v-bind:alt="merito.alt1" class="meritoimg" />
      <p>{{ merito.Titulo1 }}</p>
    </div>
  </router-link>
  <router-link v-bind:to="merito.link2" class="merito">
    <div >
      <img v-bind:src="merito.img2" v-bind:alt="merito.alt2" class="meritoimg"/>
      <p>{{ merito.Titulo2 }}</p>
    </div>
  </router-link>
  </div>
</template>
<script>
export default {
    name:"Meritos",
    props:['meritos']
};
</script>
<style>
.meritos{
    width: 48%;
    text-align: center;
}

.cajameritos{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.merito{
  background-color: rgba(255, 255, 255, 0.50);
  width: 49%;
  border: #516260 solid 1px;
  border-radius: 5px;
  color: black;
}
.merito:visited{
  color: black;
}

.merito:hover{
  background-color: rgba(255, 255, 255, 1);
  color:  #999;
}

.meritoimg{
  height: 100px;
  width: auto;
}
</style>
