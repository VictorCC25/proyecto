<template>
<menu-navegacion/>
  <div class="fondonoticias"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <derecha-link :contenido="noticia"/>
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
import Titulo from "../components/titulo.vue";
import Redes from "../../components/redes.vue";
import PiePagina from "../../components/footer.vue";
import DerechaLink from '../components/derechalink.vue'
import MenuNavegacion from "../../components/nav.vue"

export default {
  data() {
    return {
      titulos: {
        Titulo1: "Nuevo plazo de admisión en Ciclos de FP: del 07 al 10 de septiembre",
        Titulo2: "Curso 2021/2022",
      },
      redes: [
        {
          img: "../../src/img/iconos/facebook.svg",
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: "../../src/img/iconos/twitter.svg",
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: "../../src/img/iconos/flickr.svg",
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: "../../src/img/iconos/instagram.svg",
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: "../../src/img/iconos/youtube.svg",
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf: {
        foto1: "../../src/img/mapa.jpg",
        foto2: "../../src/img/logos/tic5.png",
        foto3: "../../src/img/logos/excelencia-marco.svg",
        foto4: "../../src/img/logos/calidad.png",
        foto5: "../../src/img/logos/cisco.png",
        foto6: "../../src/img/logos/ms-reverse.png",
        foto7: "../../src/img/logos/oracle-reverse.png",
        foto8: "../../src/img/logos/vmware.png",
      },
      noticia: {
        img:"../../src/img/noticias/2021/06/fp-online.jpg",alt:"Plazo adimsion",
        Texto1:"Comenzamos curso y no solo mantenemos nuestra ilusión, sino que este año estamos aun más emocionados por el inicio.",
        Texto2:"",
        Texto3:"",
        Texto4:"Documento con instrucciones para la admisión en FP, curso 2021/22",
        link:"https://drive.google.com/file/d/12w9DDifSo-EKhy10MJTcX_IKlxsSeO1Z/view",
      },
    };
  },
  components: { Titulo, Redes, PiePagina, DerechaLink, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
