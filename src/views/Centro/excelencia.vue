<template>
<menu-navegacion/>
  <div class="fondocentro"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <derecha :contenido="contenido" />
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
import Derecha from "./components/derecha.vue";
import PiePagina from "../components/footer.vue"
import MenuNavegacion from "../components/nav.vue"
export default {
  data() {
    return {
      titulos: {
        Titulo1: "Somos centro de excelencia de alto nivel",
        Titulo2: "El reconocimiento más alto como centro de excelencia en FP",
      },
      contenido: {
        Titulo: "",
        Texto1:
          "La Junta de Castilla y León nos ha reconocido como centro de excelencia de alto nivel en su orden de 13 de Octubre de 2020",
        Texto2:
          "Este reconocimiento supone un espaldarazo a nuerstra labor por intentar hacer de nuestro centro un centro especial y nos motiva a continuar en los años venideros por este camino.",
        Texto3: "",
        img: "../src/img/noticias/2020/11/FP_excelencia.jpeg",
        alt: "Excelencia",
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
      }
    };
  },
  components: { Titulo, Redes, Derecha , PiePagina, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>

</style>
