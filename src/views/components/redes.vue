<template>
  <el-aside v-for="(red, id) in redes" :key="id" class="iconos">
    <el-link :underline="false" type="info" v-bind:href="red.link">
      <img v-bind:src="red.img" v-bind:alt="red.alt" v-bind:class="red.class" />
    </el-link>
  </el-aside>
</template>
<script>
export default {
  name: "Redes",
  props: ["redes"],
};
</script>
<style>
.iconos {
  display: inline;
}
.iconos img {
  width: 40px;
}
.Facebook:hover {
  cursor: pointer;
  width: 70px;
  transition: 0.5s;
  content: url("../src/img/iconos/facebook2.svg");
}
.Twitter:hover {
  cursor: pointer;
  width: 70px;
  transition: 0.5s;
  content: url("../src/img/iconos/twitter2.svg");
}
.Flickr:hover {
  cursor: pointer;
  width: 70px;
  transition: 0.5s;
  content: url("../src/img/iconos/flickr2.svg");
}
.Instagram:hover {
  cursor: pointer;
  width: 70px;
  transition: 0.5s;
  content: url("../src/img/iconos/instagram2.svg");
}
.YouTube:hover {
  cursor: pointer;
  width: 70px;
  transition: 0.5s;
  content: url("../src/img/iconos/youtube2.svg");
}
</style>
