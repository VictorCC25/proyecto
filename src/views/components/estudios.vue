<template>
  <div v-for="(curso, id) in cursos" :key="id" class="cursos">
    <router-link v-bind:to="curso.route">
      <div class="curso">
        <img v-bind:src="curso.img" v-bind:alt="curso.alt" />
        <h2>{{ curso.Titulo }}</h2>
        <p>{{ curso.Texto }}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Estudios",
  props: ["cursos"],
};
</script>
<style>
.cursos {
  display: inline-block;
}
.curso {
  width: 350px !important;
  padding: 15px;
  border-radius: 10px;
  margin: 40px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.75);
  color: #406b71;
}

.curso img {
  border-radius: 10px 10px 0 0;
  width: 100%;
}

.curso p {
  color: #828483;
}
.curso:hover{
  background-color: rgba(255, 255, 255, 1);
}
</style>
