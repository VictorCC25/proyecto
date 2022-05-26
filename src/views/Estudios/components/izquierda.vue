<template>
  <div class="contenidoestudio">
    <div class="izquierda">
      <figure class="izquierdafoto">
        <img v-bind:src="contenido.img" v-bind:alt="contenido.alt" />
      </figure>
    </div>
    <div class="derecha">
      <div class="derechacontenido">
        <h3>{{ contenido.Titulo }}</h3>
        <p>{{ contenido.Texto1 }}</p>
        <p>{{ contenido.Texto2 }}</p>
        <p>{{ contenido.Texto3 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Izquierda",
  props: ["contenido"],
};
</script>
<style>
.contenidoestudio {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
.izquierda {
  width: 48%;
}
.derecha {
  width: 48%;
}
.izquierdafoto {
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 1em 2em;
}
.izquierdafoto > img {
  width: 100%;
}
.derechacontenido {
  padding: 0 3em;
  margin: auto;
}
.derechacontenido > h3 {
  font-size: 2em;
  color: #2e2e2e;
  text-align: center;
}
.derechacontenido > p {
  font-size: 1.3em;
  color: #000;
  font-weight: 300;
}
@media screen and (max-width: 1024px) {
  .izquierda {
    width: 98%;
  }
  .derecha {
    width: 98%;
  }
  .izquierdafoto {
    width: 85%;
  }
  .izquierdafoto > img {
    width: 60%;
  }
}
</style>
