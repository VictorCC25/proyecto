<template>
  <el-carousel :interval="4000" type="card" height="300px" trigger="click">
    <el-carousel-item
      v-for="(noticia, id) in noticias"
      :key="id"
      class="carouselportada"
    >
      <router-link v-bind:to="noticia.link">
      <h1>{{ noticia.Titulo }}</h1>
      <div class="tarjetas">
        <div class="carouselimg">
          <img v-bind:src=noticia.img v-bind:alt="noticia.alt" />
        </div>
        <div class="carouseltexto">
          <p class="tarjeta-texto">{{ noticia.Texto }}</p>
        </div>
      </div>
      </router-link>
    </el-carousel-item>
  </el-carousel>
  <div class="todas">
    <router-link to="/noticias"><span class="todas-noticias">VER TODAS LAS NOTICIAS</span></router-link>
  </div>
</template>

<script>
export default {
  name: "AllNews",
  props: ["noticias"],
};
</script>

<style>
.el-carousel {
  margin-top: 7%;
  padding: auto;
}

.carouselimg {
  width: 49%;
}

.carouseltexto {
  width: 49%;
  text-align: left;
}

.carouselportada {
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.75);
  padding: 0;
  color: #456d72;
}

.carouselportada:hover {
  background-color: rgba(255, 255, 255, 1);
}

.carouselimg > img {
  width: 100%;
  height: auto;
  max-height: 150px;
  object-fit: contain;
}

.tarjetas {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5px;
}

.tarjeta-texto {
  color: black;
  font-size: 20px;
}
</style>
