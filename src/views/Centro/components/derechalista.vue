<template>
    <div class="contenidoestudio">
    <div class="izquierda">
      <div class="izquierdacontenido">
        <h3>{{ contenido.Titulo }}</h3>
        <p>{{ contenido.Texto }}</p>
        <p>{{ contenido.Texto4 }}</p>
        <p>{{ contenido.Texto3 }}</p>
        <ul v-for="(linea, id) in contenido.Texto2" :key="id">
            <li>{{linea.texto}}</li>
        </ul>
        <p>{{ contenido.Texto5 }}</p>
      </div>
    </div>
    <div class="derecha">
      <figure class="derechafotop">
        <img v-bind:src="contenido.img" v-bind:alt="contenido.alt" />
      </figure>
    </div>
  </div>
</template>
<script>
export default {
    name:"Derecha",
    props:['contenido']
}
</script>
<style>
.izquierdacontenido {
  padding:0 3em;
  margin: auto;
}
.izquierdacontenido>h3{
    font-size: 2em;
    color: #2e2e2e;
    text-align: center;
    margin: 0;
}
.izquierdacontenido>p{
    font-size: 1.3em;
    color: #000;
    font-weight: 300;
}

</style>