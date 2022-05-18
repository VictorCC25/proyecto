<template>
<menu-navegacion/>
  <div class="fondoasir"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <izquierda :contenido="contenido1" />
    </div>
    <div class="zonasinfondo">
      <fila :fila="fila" />
    </div>
    <div class="lista1">
      <br />
      <lista :listas1="listas1" :listas2="listas2" :listas3="listas3" />
    </div>
    <div>
      <fotos :fotos="fotos" />
    </div>
    <div class="lista1">
      <modulos :modulos1="modulos1" :modulos2="modulos2" />
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
import Izquierda from "./components/izquierda.vue";
import Fila from "./components/fila.vue";
import Fotos from "./components/fotos.vue";
import Lista from "./components/lista.vue";
import Modulos from "./components/modulos.vue";
import Redes from "../components/redes.vue";
import PiePagina from "../components/footer.vue"
import MenuNavegacion from "../components/nav.vue"

export default {
  data() {
    return {
      titulos: {
        Titulo1: "Administración de Sistemas Informáticos en Red",
        Titulo2: "Formación Profesional de Grado Superior",
      },
      contenido1: {
        Titulo: "¿Por qué estudiar este ciclo?",
        Texto1:
          "La alta demanda de profesionales en las tecnologías relacionadas con la gestión de computadoras, redes, bases de datos y sistemas operativos, así como el desarrollo y administración de aplicaciones de todo tipo, hace de estos estudios, unos de los más solicitados a nivel laboral.",
        Texto2:
          "El ciclo permite conseguir las capacidades y habilidades que se requieren a un técnico superior en administración de sistemas, redes y tecnologías relacionadas con Internet",
        Texto3:
          "Se recorren, durante los dos años de duración del ciclo, el funcionamiento de las redes, tanto locales como de área global (especialmente Internet), el diseño, manejo y administración de sistemas de bases de datos, la administración de sistemas operativos de servidor, virtualización de sistemas, desarrollo e implementación de aplicaciones web, seguridad de sistemas, gestión y administración de servicios de red, etc.",
        img: "../src/img/ciclos/asir01.jpg",
        alt: "ASIR",
      },
      fila: {
        Titulo: "RAMAS PROFESIONALES",
        fotos: [
          {
            img: "M 480 160 H 32 c -17.673 0 -32 -14.327 -32 -32 V 64 c 0 -17.673 14.327 -32 32 -32 h 448 c 17.673 0 32 14.327 32 32 v 64 c 0 17.673 -14.327 32 -32 32 Z m -48 -88 c -13.255 0 -24 10.745 -24 24 s 10.745 24 24 24 s 24 -10.745 24 -24 s -10.745 -24 -24 -24 Z m -64 0 c -13.255 0 -24 10.745 -24 24 s 10.745 24 24 24 s 24 -10.745 24 -24 s -10.745 -24 -24 -24 Z m 112 248 H 32 c -17.673 0 -32 -14.327 -32 -32 v -64 c 0 -17.673 14.327 -32 32 -32 h 448 c 17.673 0 32 14.327 32 32 v 64 c 0 17.673 -14.327 32 -32 32 Z m -48 -88 c -13.255 0 -24 10.745 -24 24 s 10.745 24 24 24 s 24 -10.745 24 -24 s -10.745 -24 -24 -24 Z m -64 0 c -13.255 0 -24 10.745 -24 24 s 10.745 24 24 24 s 24 -10.745 24 -24 s -10.745 -24 -24 -24 Z m 112 248 H 32 c -17.673 0 -32 -14.327 -32 -32 v -64 c 0 -17.673 14.327 -32 32 -32 h 448 c 17.673 0 32 14.327 32 32 v 64 c 0 17.673 -14.327 32 -32 32 Z m -48 -88 c -13.255 0 -24 10.745 -24 24 s 10.745 24 24 24 s 24 -10.745 24 -24 s -10.745 -24 -24 -24 Z m -64 0 c -13.255 0 -24 10.745 -24 24 s 10.745 24 24 24 s 24 -10.745 24 -24 s -10.745 -24 -24 -24 Z",
            Titulo: "Administración de Sistemas",
          },
          {
            img: "M 448 73.143 v 45.714 C 448 159.143 347.667 192 224 192 S 0 159.143 0 118.857 V 73.143 C 0 32.857 100.333 0 224 0 s 224 32.857 224 73.143 Z M 448 176 v 102.857 C 448 319.143 347.667 352 224 352 S 0 319.143 0 278.857 V 176 c 48.125 33.143 136.208 48.572 224 48.572 S 399.874 209.143 448 176 Z m 0 160 v 102.857 C 448 479.143 347.667 512 224 512 S 0 479.143 0 438.857 V 336 c 48.125 33.143 136.208 48.572 224 48.572 S 399.874 369.143 448 336 Z",
            Titulo: "Gestión y Administración de Bases de Datos",
          },
          {
            img: "M 640 264 v -16 c 0 -8.84 -7.16 -16 -16 -16 H 344 v -40 h 72 c 17.67 0 32 -14.33 32 -32 V 32 c 0 -17.67 -14.33 -32 -32 -32 H 224 c -17.67 0 -32 14.33 -32 32 v 128 c 0 17.67 14.33 32 32 32 h 72 v 40 H 16 c -8.84 0 -16 7.16 -16 16 v 16 c 0 8.84 7.16 16 16 16 h 104 v 40 H 64 c -17.67 0 -32 14.33 -32 32 v 128 c 0 17.67 14.33 32 32 32 h 160 c 17.67 0 32 -14.33 32 -32 V 352 c 0 -17.67 -14.33 -32 -32 -32 h -56 v -40 h 304 v 40 h -56 c -17.67 0 -32 14.33 -32 32 v 128 c 0 17.67 14.33 32 32 32 h 160 c 17.67 0 32 -14.33 32 -32 V 352 c 0 -17.67 -14.33 -32 -32 -32 h -56 v -40 h 104 c 8.84 0 16 -7.16 16 -16 Z M 256 128 V 64 h 128 v 64 H 256 Z m -64 320 H 96 v -64 h 96 v 64 Z m 352 0 h -96 v -64 h 96 v 64 Z",
            Titulo: "Gestión y Administración de Redes",
          },
          {
            img: "M 400 224 h -24 v -72 C 376 68.2 307.8 0 224 0 S 72 68.2 72 152 v 72 H 48 c -26.5 0 -48 21.5 -48 48 v 192 c 0 26.5 21.5 48 48 48 h 352 c 26.5 0 48 -21.5 48 -48 V 272 c 0 -26.5 -21.5 -48 -48 -48 Z m -104 0 H 152 v -72 c 0 -39.7 32.3 -72 72 -72 s 72 32.3 72 72 v 72 Z",
            Titulo: "Seguridad de Sistemas y Redes",
          },
          {
            img: "M 336.5 160 C 322 70.7 287.8 8 248 8 s -74 62.7 -88.5 152 h 177 Z M 152 256 c 0 22.2 1.2 43.5 3.3 64 h 185.3 c 2.1 -20.5 3.3 -41.8 3.3 -64 s -1.2 -43.5 -3.3 -64 H 155.3 c -2.1 20.5 -3.3 41.8 -3.3 64 Z m 324.7 -96 c -28.6 -67.9 -86.5 -120.4 -158 -141.6 c 24.4 33.8 41.2 84.7 50 141.6 h 108 Z M 177.2 18.4 C 105.8 39.6 47.8 92.1 19.3 160 h 108 c 8.7 -56.9 25.5 -107.8 49.9 -141.6 Z M 487.4 192 H 372.7 c 2.1 21 3.3 42.5 3.3 64 s -1.2 43 -3.3 64 h 114.6 c 5.5 -20.5 8.6 -41.8 8.6 -64 s -3.1 -43.5 -8.5 -64 Z M 120 256 c 0 -21.5 1.2 -43 3.3 -64 H 8.6 C 3.2 212.5 0 233.8 0 256 s 3.2 43.5 8.6 64 h 114.6 c -2 -21 -3.2 -42.5 -3.2 -64 Z m 39.5 96 c 14.5 89.3 48.7 152 88.5 152 s 74 -62.7 88.5 -152 h -177 Z m 159.3 141.6 c 71.4 -21.2 129.4 -73.7 158 -141.6 h -108 c -8.8 56.9 -25.6 107.8 -50 141.6 Z M 19.3 352 c 28.6 67.9 86.5 120.4 158 141.6 c -24.4 -33.8 -41.2 -84.7 -50 -141.6 h -108 Z",
            Titulo: "Desarrollo e Implementación de Aplicaciones Web",
          },
        ],
      },
      fotos: [
        { img: "../src/img/ciclos/asir/asir01.jpg", alt: "ASIR1" },
        { img: "../src/img/ciclos/asir/asir02.jpg", alt: "ASIR2" },
        { img: "../src/img/ciclos/asir/asir03.jpg", alt: "ASIR3" },
        { img: "../src/img/ciclos/asir/asir04.jpg", alt: "ASIR4" },
      ],
      listas1: [
        { Texto: "Título de Bachillerato" },
        {
          Texto:
            "Título de técnico especialista (FP de Grado Medio) o de técnico superior (FP de Grado Superior)",
        },
        {
          Texto:
            "Título universitario o haber superado la prueba de acceso a la universidad para mayores de 25 años",
        },
      ],
      listas2: [
        { Texto: "Acceso a carreras universitarias: Ingeniería Informática." },
        { Texto: "Acceso a otros grados superiores" },
      ],
      listas3: [
        { Texto: "Técnico en administración de redes" },
        { Texto: "Técnico en administración de sistemas" },
        { Texto: "Técnico en administración en bases de datos" },
        { Texto: "Técnico en seguridad de sistemas" },
        {
          Texto:
            "Técnico en desarrollo e implementación de aplicaciones web front-end y back-end",
        },
        { Texto: "Técnico en servicios de comunicaciones" },
        { Texto: "Responsable de servicio de informática" },
        { Texto: "Servicios de soporte a usuarios" },
        { Texto: "Personal de apoyo técnico" },
      ],
      modulos1: [
        { Texto: "Implantación de Sistemas Operativos" },
        { Texto: "Planificación y Administración de Redes" },
        { Texto: "Gestión de Bases de Datos" },
        { Texto: "Fundamentos de Hardware" },
        { Texto: "Lenguaje de Marcas y Sistemas de Gestión de Información" },
        { Texto: "Formación y orientación laboral" },
      ],
      modulos2: [
        { Texto: "Administración de Sistemas Operativos" },
        { Texto: "Servicios de Red e Internet" },
        { Texto: "Implantación de Aplicaciones Web" },
        { Texto: "Administración de Sistemas Gestores de Bases de Datos" },
        { Texto: "Seguridad y Alta Disponibilidad" },
        { Texto: "Empresa e iniciativa emprendedora" },
        { Texto: "Proyecto final de ciclo" },
        { Texto: "Formación en Centros de Trabajo" },
      ],
      redes: [
        {
          img: "../src/img/iconos/facebook.svg",
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: "../src/img/iconos/twitter.svg",
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: "../src/img/iconos/flickr.svg",
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: "../src/img/iconos/instagram.svg",
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: "../src/img/iconos/youtube.svg",
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf:{
        foto1:"../src/img/mapa.jpg",
        foto2:"../src/img/logos/tic5.png",
        foto3:"../src/img/logos/excelencia-marco.svg",
        foto4:"../src/img/logos/calidad.png",
        foto5:"../src/img/logos/cisco.png",
        foto6:"../src/img/logos/ms-reverse.png",
        foto7:"../src/img/logos/oracle-reverse.png",
        foto8:"../src/img/logos/vmware.png",
      }
    };
  },
  components: { Titulo, Izquierda, Fila, Fotos, Lista, Modulos, Redes ,PiePagina, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
Modulost>
<style>
.fondoasir {
  background-image: url("../src/img/ciclos/fondo-asir.jpg");
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
