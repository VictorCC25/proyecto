<template>
<menu-navegacion/>
  <div class="fondonoticias"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <div class="contenedorframe">
        <div class="frame">
        <iframe frameborder="0" width="1200" height="675"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        src="https://view.genial.ly/60369a65e1a03e0d978ac9a3" type="text/html" allowscriptaccess="always"
        allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe>
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
import Titulo from "../components/titulo.vue";
import Redes from "../components/redes.vue";
import PiePagina from "../components/footer.vue";
import MenuNavegacion from "../components/nav.vue"

export default {
  data() {
    return {
      titulos: {
        Titulo1: "Jornada de puertas abiertas",
        Titulo2: "Del 19 de marzo al 6 de abril",
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

</style>
