<template>
  <menu-navegacion />
  <div class="fondorecepcion"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <derecha :contenido="contenido1" />
    </div>
  </div>
  <div class="redes">
    <redes :redes="redes" />
  </div>
  <div class="footer">
    <pie-pagina :fotos="fotosf" />
  </div>
</template>
<script>
import Titulo from "./components/titulo.vue";
import Derecha from "./components/derecha.vue";
import Redes from "../components/redes.vue";
import PiePagina from "../components/footer.vue";
import MenuNavegacion from "../components/nav.vue";
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
import foto43 from "/src/assets/escuela/CV_salesianos_02.png";

export default {
  data() {
    return {
      titulos: {
        Titulo1: "Serivicio CuCo",
        Titulo2: "Recepción de Curriculum Vitae",
      },
      contenido1: {
        Titulo: "¿Qué es el Servicio CuCo?",
        Texto1: "Si quieres trabajar con nosotros, esta es tu sección.",
        Texto2:
          "Hemos creado una herramienta (CuCo, Currículos Comunes) para recoger los currículos de las personas interesadas en trabajar con nosotros.",
        Texto3:
          "Si quieres enviarnos tu currículo, puedes acceder a esta herramienta desde el siguiente enlace: ",
        Texto4:
          "Formulario de Bolsa de empleo, Inspectoría Salesiana Santiago el Mayor",
        link: "https://forms.gle/Bt6nvG97gxPiX9j48",
        img: foto43,
        alt: "Telecomunicaciones",
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
    };
  },
  components: { Titulo, Derecha, Redes, PiePagina, MenuNavegacion },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
Modulost>
<style>
.fondorecepcion {
  background-image: url("/src/assets/fondos/paper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.lista1 {
  position: relative;
  background-color: rgb(217, 217, 217);
}
.lista1 > h1 {
  text-align: center;
}
</style>
