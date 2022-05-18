<template>
<menu-navegacion/>
  <div class="fondodual"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <h2 class="frametitulo">MATRICULACIÓN EN EDUCACIÓN SECUNDARIA (ESO)</h2>
      <div class="contenedorframe">
        <div class="frame">
        <iframe frameborder="0" width="1200" height="675" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://view.genial.ly/604f2b63d1a43d0d17b3820e" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all">
        </iframe> 
        </div>
        <br>
      </div>  
    </div>
    <div class="redes">
      <redes :redes="redes" />
    </div>
    <div class="footer">
      <pie-pagina :fotos="fotosf"/>
    </div>
  </div>
</template>
<script>
import Titulo from "./components/titulo.vue";
import Redes from "../components/redes.vue";
import PiePagina from "../components/footer.vue"
import MenuNavegacion from "../components/nav.vue"

export default {
  data() {
    return {
      titulos: {
        Titulo1: "",
        Titulo2: "INFORMACIÓN SOBRE LA MATRICULACIÓN EN EL CENTRO",
      },
      redes: [
        {
          img: "../src/img/iconos/facebook.svg",
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: "../src/img/iconos/twitter.svg",
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: "../src/img/iconos/flickr.svg",
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: "../src/img/iconos/instagram.svg",
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: "../src/img/iconos/youtube.svg",
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf:{
        foto1:"../src/img/mapa.jpg",
        foto2:"../src/img/logos/tic5.png",
        foto3:"../src/img/logos/excelencia-marco.svg",
        foto4:"../src/img/logos/calidad.png",
        foto5:"../src/img/logos/cisco.png",
        foto6:"../src/img/logos/ms-reverse.png",
        foto7:"../src/img/logos/oracle-reverse.png",
        foto8:"../src/img/logos/vmware.png",
      },
    };
  },
  components: { Titulo, Redes,  PiePagina, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.fondodual {
  background-image: url("../src/img/escuela/estudio-dual.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.frametitulo{
    font-family: sans-serif;
    font-weight: 300;
    font-size: 2.5em;
    color: #51626f;
    text-align: center;
}
.contenedorframe{
  width: 90%;
  height: auto; 
  max-width: 1000px; 
  margin: auto;
}
.frame{
  position: relative; 
  padding-bottom: 56.25%; 
  padding-top: 0px; 
  height: 0px;
}
</style>
