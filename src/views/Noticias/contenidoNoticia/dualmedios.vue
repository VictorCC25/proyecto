<template>
<menu-navegacion/>
  <div class="fondonoticias"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <texto :contenido="noticia"/>
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
import Texto from "../components/texto.vue";
import MenuNavegacion from "../components/nav.vue"

export default {
  data() {
    return {
      titulos: {
        Titulo1: "FP Dual en nuestros Ciclos de Grado Medio y FP básica",
        Titulo2: "31 de enero de 2021",
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
      noticia:{
          texto1:"Hoy, nuestros alumnos de los Ciclos Formativos de Telecomunicaciones, Electrónica, Carrocería y Formación Profesional Básica en Mantenimiento de Vehículos comienzan su periodo de FP Dual.",
          texto2:"",
          texto3:"",
          texto4:"",
          link:""
      }
    };
  },
  components: {
    Titulo,
    Redes,
    PiePagina,
    Texto,
    MenuNavegacion
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.noticialarga {
  font-weight: 300;
  color: #000;
  font-size: 1.8em;
  padding:0 0 1em 1em;
}
</style>
