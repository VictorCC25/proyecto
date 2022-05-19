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
import Redes from "../components/redes.vue";
import PiePagina from "../components/footer.vue";
import DerechaLink from '../components/derechalink.vue'
import MenuNavegacion from "../components/nav.vue"

export default {
  data() {
    return {
      titulos: {
        Titulo1: "Listado de empresas de FP Dual",
        Titulo2: "Fp Dual 2021/22",
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
      fotosf: {
        foto1: "./assets/mapa.jpg",
        foto2: "./assets/logos/tic5.png",
        foto3: "./assets/logos/excelencia-marco.svg",
        foto4: "./assets/logos/calidad.png",
        foto5: "./assets/logos/cisco.png",
        foto6: "./assets/logos/ms-reverse.png",
        foto7: "./assets/logos/oracle-reverse.png",
        foto8: "./assets/logos/vmware.png",
      },
      noticia: {
        img:"./assets/noticias/2021/11/listado-fpdual-blur.jpg",alt:"EmpresasFP",
        Texto1:"Documento con el listado de empresas colaboradores para este curso 2021-2022",
        Texto2:"Aprovechamos para agradecer su colaboración para que nuestroas alumnos obtengan una mejor formación práctica",
        Texto3:"",
        Texto4:"Documento con la lista de empresas",
        link:"https://drive.google.com/file/d/1pjxqO6s9EP_uT5Bqi9UO8KF80I_L-7fU/view",
      },
    };
  },
  components: { Titulo, Redes, PiePagina, DerechaLink, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
