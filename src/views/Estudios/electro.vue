<template>
<menu-navegacion/>
  <div class="fondofp"></div>
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
  name: "Electromecanica",
  data() {
    return {
      titulos: {
        Titulo1: "Electromecánica de Vehículos",
        Titulo2: "Formación Profesional de Grado Medio",
      },
      contenido1: {
        Titulo: "¿Por qué estudiar este ciclo?",
        Texto1:
          "Estos estudios te permitirán desarrollar una carrera como especialista en el mantenimiento de vehículos.",
        Texto2:
          "Se trata de un área muy práctica con alta demanda que te permitirá adquirir las destrezas y técnicas que permitan localizar y arreglar averías mecánicas, hidraúlicas, eléctricas y electrónicas.",
        Texto3:
          "Obtendrás las capacidades necesarias para la puesta a punto de todos los sistemas de los vehículos: motor, sistema eléctrico y electrónico, suspensión, dirección, frenos, etc.",
        img: "/src/img/ciclos/fpb01.jpg",
        alt: "Ciclo FP",
      },
      fila: {
        Titulo: "RAMAS PROFESIONALES",
        fotos: [
          {
            img: "M 143.25 220.81 l -12.42 46.37 c -3.01 11.25 -3.63 22.89 -2.41 34.39 l -35.2 28.98 c -6.57 5.41 -16.31 -0.43 -14.62 -8.77 l 15.44 -76.68 c 1.06 -5.26 -2.66 -10.28 -8 -10.79 l -77.86 -7.55 c -8.47 -0.82 -11.23 -11.83 -4.14 -16.54 l 65.15 -43.3 c 4.46 -2.97 5.38 -9.15 1.98 -13.29 L 21.46 93.22 c -5.41 -6.57 0.43 -16.3 8.78 -14.62 l 76.68 15.44 c 5.26 1.06 10.28 -2.66 10.8 -8 l 7.55 -77.86 c 0.82 -8.48 11.83 -11.23 16.55 -4.14 l 43.3 65.14 c 2.97 4.46 9.15 5.38 13.29 1.98 l 60.4 -49.71 c 6.57 -5.41 16.3 0.43 14.62 8.77 L 262.1 86.38 c -2.71 3.05 -5.43 6.09 -7.91 9.4 l -32.15 42.97 l -10.71 14.32 c -32.73 8.76 -59.18 34.53 -68.08 67.74 Z m 494.57 132.51 l -12.42 46.36 c -3.13 11.68 -9.38 21.61 -17.55 29.36 a 66.876 66.876 0 0 1 -8.76 7 l -13.99 52.23 c -1.14 4.27 -3.1 8.1 -5.65 11.38 c -7.67 9.84 -20.74 14.68 -33.54 11.25 L 515 502.62 c -17.07 -4.57 -27.2 -22.12 -22.63 -39.19 l 8.28 -30.91 l -247.28 -66.26 l -8.28 30.91 c -4.57 17.07 -22.12 27.2 -39.19 22.63 l -30.91 -8.28 c -12.8 -3.43 -21.7 -14.16 -23.42 -26.51 c -0.57 -4.12 -0.35 -8.42 0.79 -12.68 l 13.99 -52.23 a 66.62 66.62 0 0 1 -4.09 -10.45 c -3.2 -10.79 -3.65 -22.52 -0.52 -34.2 l 12.42 -46.37 c 5.31 -19.8 19.36 -34.83 36.89 -42.21 a 64.336 64.336 0 0 1 18.49 -4.72 l 18.13 -24.23 l 32.15 -42.97 c 3.45 -4.61 7.19 -8.9 11.2 -12.84 c 8 -7.89 17.03 -14.44 26.74 -19.51 c 4.86 -2.54 9.89 -4.71 15.05 -6.49 c 10.33 -3.58 21.19 -5.63 32.24 -6.04 c 11.05 -0.41 22.31 0.82 33.43 3.8 l 122.68 32.87 c 11.12 2.98 21.48 7.54 30.85 13.43 a 111.11 111.11 0 0 1 34.69 34.5 c 8.82 13.88 14.64 29.84 16.68 46.99 l 6.36 53.29 l 3.59 30.05 a 64.49 64.49 0 0 1 22.74 29.93 c 4.39 11.88 5.29 25.19 1.75 38.39 Z M 255.58 234.34 c -18.55 -4.97 -34.21 4.04 -39.17 22.53 c -4.96 18.49 4.11 34.12 22.65 39.09 c 18.55 4.97 45.54 15.51 50.49 -2.98 c 4.96 -18.49 -15.43 -53.67 -33.97 -58.64 Z m 290.61 28.17 l -6.36 -53.29 c -0.58 -4.87 -1.89 -9.53 -3.82 -13.86 c -5.8 -12.99 -17.2 -23.01 -31.42 -26.82 l -122.68 -32.87 a 48.008 48.008 0 0 0 -50.86 17.61 l -32.15 42.97 l 172 46.08 l 75.29 20.18 Z m 18.49 54.65 c -18.55 -4.97 -53.8 15.31 -58.75 33.79 c -4.95 18.49 23.69 22.86 42.24 27.83 c 18.55 4.97 34.21 -4.04 39.17 -22.53 c 4.95 -18.48 -4.11 -34.12 -22.66 -39.09 Z",
            Titulo: "Reparación de vehículos",
          },
          {
            img: "M 296 160 H 180.6 l 42.6 -129.8 C 227.2 15 215.7 0 200 0 H 56 C 44 0 33.8 8.9 32.2 20.8 l -32 240 C -1.7 275.2 9.5 288 24 288 h 118.7 L 96.6 482.5 c -3.6 15.2 8 29.5 23.3 29.5 c 8.4 0 16.4 -4.4 20.8 -12 l 176 -304 c 9.3 -15.9 -2.2 -36 -20.7 -36 Z",
            Titulo: "Electricidad",
          },
          {
            img: "M 512.1 191 l -8.2 14.3 c -3 5.3 -9.4 7.5 -15.1 5.4 c -11.8 -4.4 -22.6 -10.7 -32.1 -18.6 c -4.6 -3.8 -5.8 -10.5 -2.8 -15.7 l 8.2 -14.3 c -6.9 -8 -12.3 -17.3 -15.9 -27.4 h -16.5 c -6 0 -11.2 -4.3 -12.2 -10.3 c -2 -12 -2.1 -24.6 0 -37.1 c 1 -6 6.2 -10.4 12.2 -10.4 h 16.5 c 3.6 -10.1 9 -19.4 15.9 -27.4 l -8.2 -14.3 c -3 -5.2 -1.9 -11.9 2.8 -15.7 c 9.5 -7.9 20.4 -14.2 32.1 -18.6 c 5.7 -2.1 12.1 0.1 15.1 5.4 l 8.2 14.3 c 10.5 -1.9 21.2 -1.9 31.7 0 L 552 6.3 c 3 -5.3 9.4 -7.5 15.1 -5.4 c 11.8 4.4 22.6 10.7 32.1 18.6 c 4.6 3.8 5.8 10.5 2.8 15.7 l -8.2 14.3 c 6.9 8 12.3 17.3 15.9 27.4 h 16.5 c 6 0 11.2 4.3 12.2 10.3 c 2 12 2.1 24.6 0 37.1 c -1 6 -6.2 10.4 -12.2 10.4 h -16.5 c -3.6 10.1 -9 19.4 -15.9 27.4 l 8.2 14.3 c 3 5.2 1.9 11.9 -2.8 15.7 c -9.5 7.9 -20.4 14.2 -32.1 18.6 c -5.7 2.1 -12.1 -0.1 -15.1 -5.4 l -8.2 -14.3 c -10.4 1.9 -21.2 1.9 -31.7 0 Z m -10.5 -58.8 c 38.5 29.6 82.4 -14.3 52.8 -52.8 c -38.5 -29.7 -82.4 14.3 -52.8 52.8 Z M 386.3 286.1 l 33.7 16.8 c 10.1 5.8 14.5 18.1 10.5 29.1 c -8.9 24.2 -26.4 46.4 -42.6 65.8 c -7.4 8.9 -20.2 11.1 -30.3 5.3 l -29.1 -16.8 c -16 13.7 -34.6 24.6 -54.9 31.7 v 33.6 c 0 11.6 -8.3 21.6 -19.7 23.6 c -24.6 4.2 -50.4 4.4 -75.9 0 c -11.5 -2 -20 -11.9 -20 -23.6 V 418 c -20.3 -7.2 -38.9 -18 -54.9 -31.7 L 74 403 c -10 5.8 -22.9 3.6 -30.3 -5.3 c -16.2 -19.4 -33.3 -41.6 -42.2 -65.7 c -4 -10.9 0.4 -23.2 10.5 -29.1 l 33.3 -16.8 c -3.9 -20.9 -3.9 -42.4 0 -63.4 L 12 205.8 c -10.1 -5.8 -14.6 -18.1 -10.5 -29 c 8.9 -24.2 26 -46.4 42.2 -65.8 c 7.4 -8.9 20.2 -11.1 30.3 -5.3 l 29.1 16.8 c 16 -13.7 34.6 -24.6 54.9 -31.7 V 57.1 c 0 -11.5 8.2 -21.5 19.6 -23.5 c 24.6 -4.2 50.5 -4.4 76 -0.1 c 11.5 2 20 11.9 20 23.6 v 33.6 c 20.3 7.2 38.9 18 54.9 31.7 l 29.1 -16.8 c 10 -5.8 22.9 -3.6 30.3 5.3 c 16.2 19.4 33.2 41.6 42.1 65.8 c 4 10.9 0.1 23.2 -10 29.1 l -33.7 16.8 c 3.9 21 3.9 42.5 0 63.5 Z m -117.6 21.1 c 59.2 -77 -28.7 -164.9 -105.7 -105.7 c -59.2 77 28.7 164.9 105.7 105.7 Z m 243.4 182.7 l -8.2 14.3 c -3 5.3 -9.4 7.5 -15.1 5.4 c -11.8 -4.4 -22.6 -10.7 -32.1 -18.6 c -4.6 -3.8 -5.8 -10.5 -2.8 -15.7 l 8.2 -14.3 c -6.9 -8 -12.3 -17.3 -15.9 -27.4 h -16.5 c -6 0 -11.2 -4.3 -12.2 -10.3 c -2 -12 -2.1 -24.6 0 -37.1 c 1 -6 6.2 -10.4 12.2 -10.4 h 16.5 c 3.6 -10.1 9 -19.4 15.9 -27.4 l -8.2 -14.3 c -3 -5.2 -1.9 -11.9 2.8 -15.7 c 9.5 -7.9 20.4 -14.2 32.1 -18.6 c 5.7 -2.1 12.1 0.1 15.1 5.4 l 8.2 14.3 c 10.5 -1.9 21.2 -1.9 31.7 0 l 8.2 -14.3 c 3 -5.3 9.4 -7.5 15.1 -5.4 c 11.8 4.4 22.6 10.7 32.1 18.6 c 4.6 3.8 5.8 10.5 2.8 15.7 l -8.2 14.3 c 6.9 8 12.3 17.3 15.9 27.4 h 16.5 c 6 0 11.2 4.3 12.2 10.3 c 2 12 2.1 24.6 0 37.1 c -1 6 -6.2 10.4 -12.2 10.4 h -16.5 c -3.6 10.1 -9 19.4 -15.9 27.4 l 8.2 14.3 c 3 5.2 1.9 11.9 -2.8 15.7 c -9.5 7.9 -20.4 14.2 -32.1 18.6 c -5.7 2.1 -12.1 -0.1 -15.1 -5.4 l -8.2 -14.3 c -10.4 1.9 -21.2 1.9 -31.7 0 Z M 501.6 431 c 38.5 29.6 82.4 -14.3 52.8 -52.8 c -38.5 -29.6 -82.4 14.3 -52.8 52.8 Z",
            Titulo: "Mecánica",
          },
        ],
      },
      fotos: [
        {
          img: "/src/img/ciclos/electromecanica/electromecanica01.jpg",
          alt: "Electro1",
        },
        {
          img: "/src/img/ciclos/electromecanica/electromecanica02.jpg",
          alt: "Electro2",
        },
        {
          img: "/src/img/ciclos/electromecanica/electromecanica03.jpg",
          alt: "Electro3",
        },
        {
          img: "/src/img/ciclos/electromecanica/electromecanica04.jpg",
          alt: "Electro4",
        },
      ],
      listas1: [
        { Texto: "Título de Educación Secundaria Obligatoria" },
        { Texto: "Título de Formación Profesional Básica" },
        {
          Texto:
            "Título de Técnico o de Técnico Auxiliar o equivalente a efectos académicos",
        },
        {
          Texto:
            "Haber superado el segundo curso de Bachillerato Unificado y Polivalente (BUP)",
        },
        {
          Texto:
            "Haber superado la prueba de acceso a la Universidad para mayores de 25 años",
        },
        {
          Texto:
            "Haber superado la prueba de acceso a ciclos formativos de grado medio (se requerirá tener, al menos, diecisiete años, cumplidos en el año de realización de la prueba)",
        },
      ],
      listas2: [
        {
          Texto:
            "Acceso a otros ciclos de FP (incluido grado superior) con posibilidad de convalidar algunas materias",
        },
        { Texto: "Acceso a cursos de especialización profesional" },
        { Texto: "Acceso a cualquier modalidad de Bachillerato" },
      ],
      listas3: [
        { Texto: "Electricista de vehículos" },
        { Texto: "Mecánica del automóvil" },
        { Texto: "Electromecánica del automóvil" },
        { Texto: "Reparación de sistemas neumáticos e hidraúlicos" },
        { Texto: "Reparación de sistemas de transmisión y frenos" },
        { Texto: "Instalación de accesorios y recambios del automóvil" },
        { Texto: "Reparación de sistemas de dirección y suspensión" },
        { Texto: "Operador de ITV" },
        { Texto: "Venta de recambios y sistemas de diagnosis" },
      ],
      modulos1: [
        { Texto: "Motores" },
        { Texto: "Circuitos de fluidos. Suspensión y dirección" },
        { Texto: "Sistemas de transmisión y frenado" },
        { Texto: "Sistemas de carga y arranque" },
        { Texto: "Mecanizado básico" },
        { Texto: "Formación y orientación laboral" },
      ],
      modulos2: [
        { Texto: "Sistemas auxiliares del motor" },
        { Texto: "Circuitos eléctricos auxiliares del vehículo" },
        { Texto: "Sistemas de seguridad y confortabilidad" },
        { Texto: "Vehículos híbridos y eléctricos" },
        { Texto: "Empresa e iniciativa emprendedora" },
        { Texto: "Formación en Centros de Trabajo" },
      ],
      redes: [
        {
          img: "/src/img/iconos/facebook.svg",
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: "/src/img/iconos/twitter.svg",
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: "/src/img/iconos/flickr.svg",
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: "/src/img/iconos/instagram.svg",
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: "/src/img/iconos/youtube.svg",
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf:{
        foto1:"/src/img/mapa.jpg",
        foto2:"/src/img/logos/tic5.png",
        foto3:"/src/img/logos/excelencia-marco.svg",
        foto4:"/src/img/logos/calidad.png",
        foto5:"/src/img/logos/cisco.png",
        foto6:"/src/img/logos/ms-reverse.png",
        foto7:"/src/img/logos/oracle-reverse.png",
        foto8:"/src/img/logos/vmware.png",
      }
    };
  },
  components: {
    Titulo,
    Izquierda,
    Fila,
    Fotos,
    Lista,
    Modulos,
    Redes,
    PiePagina,
    MenuNavegacion
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
Modulost>
<style>
.fondofp {
  background-image: url("/src/img/ciclos/fondo-electromecanica.jpg");
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
