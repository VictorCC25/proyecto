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
        Titulo1: "Inicio curso 2021/22",
        Titulo2: "Bienvenida e instrucciones",
      },
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
      fotosf: {
        foto1: "/src/assets/img/mapa.jpg",
        foto2: "/src/assets/img/logos/tic5.png",
        foto3: "/src/assets/img/logos/excelencia-marco.svg",
        foto4: "/src/assets/img/logos/calidad.png",
        foto5: "/src/assets/img/logos/cisco.png",
        foto6: "/src/assets/img/logos/ms-reverse.png",
        foto7: "/src/assets/img/logos/oracle-reverse.png",
        foto8: "/src/assets/img/logos/vmware.png",
      },
      noticia: {
        img:"/src/assets/img/noticias/2021/09/inicio-curso-blur.jpg",alt:"Inicio Curso",
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
