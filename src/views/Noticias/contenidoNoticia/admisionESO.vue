<template>
<menu-navegacion/>
  <div class="fondonoticias"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <derecha :contenido="noticia" />
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
import Derecha from '../components/derecha.vue';
import MenuNavegacion from "../../components/nav.vue"

export default {
  data() {
    return {
      titulos: {
        Titulo1: "Periodo de admisiones para estudiantes ESO",
        Titulo2: "¿Quieres estudiar con nosotros?",
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
        img: "../../src/img/noticias/2022/03/admisiones-ESO.jpeg",
        alt: "Admisiones",
        Texto1:
          "Hemos abierto el periodo de admisiones para la ESO. El plazo es del 18 marzo al 6 de abril, en la Secretaría del Centro Don Bosco de 9:30h a 13:30h. Si quieres más información puedes llamar al teléfono 979777270",
      },
    };
  },
  components: { Titulo, Redes, PiePagina, Derecha, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
