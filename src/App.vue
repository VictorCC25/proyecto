<template>

  <router-view />
</template>

<script>
import { ref } from "vue";

const activeIndex = ref("1");

</script>

<style>

.fondo {
  background-image: url("/src/assets/fondos/fondo3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 1000;
}

.naviagtion-menu {
  padding: 10px 4em 10px 10px;
  margin-right: 10%;
}

.logo {
  height: 90%;
  overflow: visible;
  margin: 0;
  padding: 0 0.5em 0 0;
}
a{
  text-decoration: none;
}
a:visited{
  color: #516260;
}

</style>
