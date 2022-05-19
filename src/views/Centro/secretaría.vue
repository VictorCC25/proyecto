<template>
<menu-navegacion/>
  <div class="fondodocumentos"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <documentos :documentos="documentos" :titulo="documentost" />
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
import documentos from "./components/documentos.vue";
import Redes from "../components/redes.vue";
import PiePagina from "../components/footer.vue"
import MenuNavegacion from "../components/nav.vue"

export default {
  data() {
    return {
      titulos: {
        Titulo1: "SECRETARÍA DEL CENTRO",
        Titulo2: "",
      },
      documentost: "DOCUMENTOS PARA MATRICULACIÓN",
      documentos: [
          {ruta:"https://drive.google.com/file/d/12w9DDifSo-EKhy10MJTcX_IKlxsSeO1Z/view?usp=drive_web",
          foto:"/src/assets/img/documentos/FP-2021-online.png",
          nombre:"FP-2021-online.pdf"},
      ],
      redes: [
        {
          img: "/src/assets/img/iconos/facebook.svg",
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: "/src/assets/img/iconos/twitter.svg",
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: "/src/assets/img/iconos/flickr.svg",
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: "/src/assets/img/iconos/instagram.svg",
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: "/src/assets/img/iconos/youtube.svg",
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf:{
        foto1:"/src/assets/img/mapa.jpg",
        foto2:"/src/assets/img/logos/tic5.png",
        foto3:"/src/assets/img/logos/excelencia-marco.svg",
        foto4:"/src/assets/img/logos/calidad.png",
        foto5:"/src/assets/img/logos/cisco.png",
        foto6:"/src/assets/img/logos/ms-reverse.png",
        foto7:"/src/assets/img/logos/oracle-reverse.png",
        foto8:"/src/assets/img/logos/vmware.png",
      }
    };
  },
  components: { Titulo, documentos, Redes, PiePagina, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style >
.fondodocumentos{
  background-image: url("/src/assets/img/escuela/documentos.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
