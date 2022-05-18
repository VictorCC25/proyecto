<template>
  <div class="fila2">
    <el-link class="servicio" v-for="(servicio, id) in servicios" :key="id"
    v-bind:href="servicio.link">
      <div>
        <img v-bind:src="servicio.img" v-bind:alt="servicio.alt" />
        <p class="serviciotexto">
          {{ servicio.Titulo }}
        </p>
      </div>
    </el-link>
  </div>
</template>
<script>
export default {
  name: "Servicios",
  props: ["servicios"],
};
</script>
<style>
.servicios {
  width: 48%;
  text-align: center;
}
.el_link {
  width: 1%;
}
.servicio img {
  width: 80px;
  margin-top: 10px;
}

.servicio {
  width: 33%;
  margin-right: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 5px;
  border: 1px solid #516260;
  border-radius: 5px;
}
.servicio:hover {
  background-color: rgba(255, 255, 255, 1);
}
</style>
