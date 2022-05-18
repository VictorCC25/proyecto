<template>
  <div class="contenidoestudio">
    <div class="izquierda">
      <figure class="izquierdafotop">
        <img v-bind:src="contenido.img" v-bind:alt="contenido.alt" />
      </figure>
    </div>
    <div class="derecha">
      <div class="derechacontenido">
        <h3>{{ contenido.Titulo }}</h3>
        <p>{{ contenido.Texto1 }}</p>
        <p>{{ contenido.Texto2 }}</p>
        <p>{{ contenido.Texto3 }}</p>
        <p>{{ contenido.Texto4 }}</p>
        <p>{{ contenido.Texto5 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IzquierdaGrande",
  props: ["contenido"],
};
</script>
<style>
.contenidoestudio {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.izquierda {
  width: 49%;
}
.derecha {
  width: 49%;
}
.izquierdafotop {
  width: 100%;
  margin: 0 auto;
  padding: 1em 2em;
  max-width: 300px;
}

.izquierdafoto>img{
  width: 100%;
}

.derechacontenido {
  padding:0 3em;
  margin: auto;
}
.derechacontenido>h3{
    font-size: 2em;
    color: #2e2e2e;
    text-align: center;
    margin: 0;
}
.derechacontenido>p{
    font-size: 1.3em;
    color: #000;
    font-weight: 300;
}

</style>
