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
        Titulo1: "Información sobre la FP Dual para Familias",
        Titulo2: "Fp Dual 2021/22",
      },
      redes: [
        {
          img: "/src/assets/iconos/facebook.svg",
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: "/src/assets/iconos/twitter.svg",
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: "/src/assets/iconos/flickr.svg",
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: "/src/assets/iconos/instagram.svg",
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: "/src/assets/iconos/youtube.svg",
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf: {
        foto1: "/src/assets/mapa.jpg",
        foto2: "/src/assets/logos/tic5.png",
        foto3: "/src/assets/logos/excelencia-marco.svg",
        foto4: "/src/assets/logos/calidad.png",
        foto5: "/src/assets/logos/cisco.png",
        foto6: "/src/assets/logos/ms-reverse.png",
        foto7: "/src/assets/logos/oracle-reverse.png",
        foto8: "/src/assets/logos/vmware.png",
      },
      noticia: {
        img:"/src/assets/noticias/2021/10/info-fpdual-blur.jpg",alt:"InfoFP",
        Texto1:"Publicamos un enlace que contiene un documento PDF con instrucciones a considerar para las familias en este curso 2021/22",
        Texto2:"",
        Texto3:"",
        Texto4:"Documento sobre la FP Dual para el curso 2021/22",
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
