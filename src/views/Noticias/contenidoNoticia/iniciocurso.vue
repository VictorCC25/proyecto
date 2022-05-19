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
import foto30 from "/src/assets/iconos/facebook.svg";
import foto31 from "/src/assets/iconos/twitter.svg";
import foto32 from "/src/assets/iconos/flickr.svg";
import foto33 from "/src/assets/iconos/instagram.svg";
import foto34 from "/src/assets/iconos/youtube.svg";
import foto35 from "/src/assets/mapa.jpg";
import foto36 from "/src/assets/logos/tic5.png";
import foto37 from "/src/assets/logos/excelencia-marco.svg";
import foto38 from "/src/assets/logos/calidad.png";
import foto39 from "/src/assets/logos/cisco.png";
import foto40 from "/src/assets/logos/ms-reverse.png";
import foto41 from "/src/assets/logos/oracle-reverse.png";
import foto42 from "/src/assets/logos/vmware.png";
import foto7 from "/src/assets/noticias/2021/09/inicio-curso-blur.jpg";

export default {
  data() {
    return {
      titulos: {
        Titulo1: "Inicio curso 2021/22",
        Titulo2: "Bienvenida e instrucciones",
      },
      redes: [
        {
          img: foto30,
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: foto31,
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: foto32,
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: foto33,
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: foto34,
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf: {
        foto1: foto35,
        foto2: foto36,
        foto3: foto37,
        foto4: foto38,
        foto5: foto39,
        foto6: foto40,
        foto7: foto41,
        foto8: foto42,
      },
      noticia: {
        img:foto7,alt:"Inicio Curso",
        Texto1:"Comenzamos curso y no solo mantenemos nuestra ilusión, sino que este año estamos aun más emocionados por el inicio.",
        Texto2:"En el documento que acompaña a esta noticia damos la bienvenida a nuestras alumnas, alumnos y familias. Además es muy importante leerlo ya que contiene instrucciones muy a tener en cuenta para comenzar este curso.",
        Texto3:"Estamos totalmente convencidos de que llevaremos a buen puerto todas las vicisitudes que surgen en este curso que ¡estamos deseando empezar!",
        Texto4:"Leer documento de bienvenida e instrucciones",
        link:"https://drive.google.com/file/d/1aDjukIBrk_jar4L4d0eBUv514cU4JKKt/view",
      },
    };
  },
  components: { Titulo, Redes, PiePagina, DerechaLink, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
