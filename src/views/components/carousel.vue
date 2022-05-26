<template>
  <el-carousel :interval="4000" type="card" height="300px" trigger="click" class="carouselgrande">
    <el-carousel-item
      v-for="(noticia, id) in noticias"
      :key="id"
      class="carouselportada"
    >
      <router-link v-bind:to="noticia.link">
      <h1 class="titulonoticia">{{ noticia.Titulo }}</h1>
      <div class="tarjetas">
        <div class="carouselimg">
          <img v-bind:src="noticia.img" v-bind:alt="noticia.alt" />
        </div>
        <div class="carouseltexto">
          <p class="tarjeta-texto">{{ noticia.Texto }}</p>
        </div>
      </div>
      </router-link>
    </el-carousel-item>
  </el-carousel>
  <el-carousel :interval="4000" type="card" height="375px" trigger="click" class="carouselmediano">
    <el-carousel-item
      v-for="(noticia, id) in noticias"
      :key="id"
      class="carouselportada"
    >
      <router-link v-bind:to="noticia.link">
      <h1 class="titulonoticia">{{ noticia.Titulo }}</h1>
      <div class="tarjetas">
        <div class="carouselimg">
          <img v-bind:src="noticia.img" v-bind:alt="noticia.alt" />
        </div>
        <div class="carouseltexto">
          <p class="tarjeta-texto">{{ noticia.Texto }}</p>
        </div>
      </div>
      </router-link>
    </el-carousel-item>
  </el-carousel>
  <el-carousel :interval="4000" type="card" height="325px" trigger="click" class="carouselpequeño">
    <el-carousel-item
      v-for="(noticia, id) in noticias"
      :key="id"
      class="carouselportada"
    >
      <router-link v-bind:to="noticia.link">
      <h1 class="titulonoticia">{{ noticia.Titulo }}</h1>
      <div class="tarjetas">
        <div class="carouselimg">
          <img v-bind:src="noticia.img" v-bind:alt="noticia.alt" />
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
  justify-content: space-around;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 5px;
}

.tarjeta-texto {
  color: black;
  font-size: 20px;
}

.carouselmediano{
  display: none;
}
.carouselpequeño{
    display: none;
  }
@media screen and (max-width: 768px) {
  .carouselgrande{
    display: none;
  }
  .carouselmediano{
    display: block;
  }
  .titulonoticia{
    font-size: 1.5em;
  }
  .carouselimg{
    width: 98%;
  }
  .carouseltexto{
    width: 90%;
  }
}
@media screen and (max-width: 425px) {
  .carouselmediano{
    display: none;
  }
  .carouselpequeño{
    display: block;
  }
  .titulonoticia{
    font-size: 1.2em;
  }
  .carouselimg{
    width: 98%;
  }
  .carouseltexto{
    width: 90%;
  }
  .carouselimg > img {
  max-height: 75px;
  }
  .tarjeta-texto {
  font-size: 15px;
}
}
</style>
