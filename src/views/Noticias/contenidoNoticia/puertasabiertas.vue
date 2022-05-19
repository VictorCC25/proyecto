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
          img: "./assets/iconos/facebook.svg",
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: "./assets/iconos/twitter.svg",
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: "./assets/iconos/flickr.svg",
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: "./assets/iconos/instagram.svg",
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: "./assets/iconos/youtube.svg",
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf:{
        foto1:"./assets/mapa.jpg",
        foto2:"./assets/logos/tic5.png",
        foto3:"./assets/logos/excelencia-marco.svg",
        foto4:"./assets/logos/calidad.png",
        foto5:"./assets/logos/cisco.png",
        foto6:"./assets/logos/ms-reverse.png",
        foto7:"./assets/logos/oracle-reverse.png",
        foto8:"./assets/logos/vmware.png",
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
