<template>
<menu-navegacion/>
  <div class="fondoerasmus"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <derecha-link :contenido="contenido" />
    </div>
    <div class="redes">
      <redes :redes="redes" />
    </div>
    <div class="footer">
      <pie-pagina :fotos="fotosf" />
    </div>
  </div>
</template>
<script>
import Titulo from "./components/titulo.vue";
import Redes from "../components/redes.vue";
import DerechaLink from "./components/derechalink.vue";
import PiePagina from "../components/footer.vue";
import MenuNavegacion from "../components/nav.vue"
export default {
  data() {
    return {
      titulos: {
        Titulo1: "Servicio Erasmus+",
        Titulo2: "Fomento de la educación en Europa",
      },
      contenido: {
        Titulo: "¿Qué es Erasmus+?",
        Texto1: "El ",
        Texto2: "Servicio Español para la Internacionalización de la Educación",
        Texto3: "nos concede para este curso el programa ",
        Texto4: " ErasmusPlus",
        Texto5:
          ", el programa de la Unión Europea para apoyar la educación, la formación, la juventud y el deporte en Europa",
        link1: "http://sepie.es/",
        link2: "https://erasmus-plus.ec.europa.eu/es",
        img: "/src/img/escuela/Erasmus_SEPIe.jpeg",
        alt: "ERASMUS +",
      },
      redes: [
        {
          img: "/src/img/iconos/facebook.svg",
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: "/src/img/iconos/twitter.svg",
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: "/src/img/iconos/flickr.svg",
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: "/src/img/iconos/instagram.svg",
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: "/src/img/iconos/youtube.svg",
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf: {
        foto1: "/src/img/mapa.jpg",
        foto2: "/src/img/logos/tic5.png",
        foto3: "/src/img/logos/excelencia-marco.svg",
        foto4: "/src/img/logos/calidad.png",
        foto5: "/src/img/logos/cisco.png",
        foto6: "/src/img/logos/ms-reverse.png",
        foto7: "/src/img/logos/oracle-reverse.png",
        foto8: "/src/img/logos/vmware.png",
      },
    };
  },
  components: { Titulo, Redes, DerechaLink, PiePagina, MenuNavegacion },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.fondoerasmus {
  background-image: url("/src/img/escuela/europa.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
