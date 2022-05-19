<template>
<menu-navegacion/>
  <div class="fondoteleco"></div>
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
        Titulo1: "Instalaciones de Telecomunicaciones",
        Titulo2: "Formación Profesional de Grado Medio",
      },
      contenido1: {
        Titulo: "¿Por qué estudiar este ciclo?",
        Texto1:
          "Los estudios de telecomunicaciones permiten formarse en un área de alta demanda laboral. Se trata de una formación para personal muy polifacético capaz de cubrir las necesidades de un gran número de puestos de trabajo relacionados con la tecnología.",
        Texto2:
          "El ciclo permite conseguir las capacidades y habilidades que se requieren a un técnico en instalaciones de telecomunicaciones.",
        Texto3:
          "En los dos años de duración del ciclo aprenderás lo relativo a:",
        img: "/src/assets/ciclos/teleco01.jpg",
        alt: "Telecomunicaciones",
      },
      fila: {
        Titulo: "RAMAS PROFESIONALES",
        fotos: [
          {
            img: "M 255.03 261.65 c 6.25 6.25 16.38 6.25 22.63 0 l 11.31 -11.31 c 6.25 -6.25 6.25 -16.38 0 -22.63 L 253.25 192 l 35.71 -35.72 c 6.25 -6.25 6.25 -16.38 0 -22.63 l -11.31 -11.31 c -6.25 -6.25 -16.38 -6.25 -22.63 0 l -58.34 58.34 c -6.25 6.25 -6.25 16.38 0 22.63 l 58.35 58.34 Z m 96.01 -11.3 l 11.31 11.31 c 6.25 6.25 16.38 6.25 22.63 0 l 58.34 -58.34 c 6.25 -6.25 6.25 -16.38 0 -22.63 l -58.34 -58.34 c -6.25 -6.25 -16.38 -6.25 -22.63 0 l -11.31 11.31 c -6.25 6.25 -6.25 16.38 0 22.63 L 386.75 192 l -35.71 35.72 c -6.25 6.25 -6.25 16.38 0 22.63 Z M 624 416 H 381.54 c -0.74 19.81 -14.71 32 -32.74 32 H 288 c -18.69 0 -33.02 -17.47 -32.77 -32 H 16 c -8.8 0 -16 7.2 -16 16 v 16 c 0 35.2 28.8 64 64 64 h 512 c 35.2 0 64 -28.8 64 -64 v -16 c 0 -8.8 -7.2 -16 -16 -16 Z M 576 48 c 0 -26.4 -21.6 -48 -48 -48 H 112 C 85.6 0 64 21.6 64 48 v 336 h 512 V 48 Z m -64 272 H 128 V 64 h 384 v 256 Z",
            Titulo: "Sistemas y Equipos Informáticos",
          },
          {
            img: "M 288 114.96 L 69.47 307.71 c -1.62 1.46 -3.69 2.14 -5.47 3.35 V 496 c 0 8.84 7.16 16 16 16 h 149.23 L 192 439.19 l 104.11 -64 l -60.16 -119.22 L 384 392.75 l -104.11 64 L 319.81 512 H 496 c 8.84 0 16 -7.16 16 -16 V 311.1 c -1.7 -1.16 -3.72 -1.82 -5.26 -3.2 L 288 114.96 Z m 282.69 121.32 L 512 184.45 V 48 c 0 -8.84 -7.16 -16 -16 -16 h -64 c -8.84 0 -16 7.16 -16 16 v 51.69 L 314.75 10.31 C 307.12 3.45 297.56 0.01 288 0 s -19.1 3.41 -26.7 10.27 L 5.31 236.28 c -6.57 5.91 -7.12 16.02 -1.21 22.6 l 21.4 23.82 c 5.9 6.57 16.02 7.12 22.6 1.21 L 277.42 81.63 c 6.05 -5.33 15.12 -5.33 21.17 0 L 527.91 283.9 c 6.57 5.9 16.69 5.36 22.6 -1.21 l 21.4 -23.82 c 5.9 -6.57 5.36 -16.69 -1.22 -22.59 Z",
            Titulo: "Domótica",
          },
          {
            img: "M 160 288 h -16 c -35.35 0 -64 28.7 -64 64.12 v 63.76 c 0 35.41 28.65 64.12 64 64.12 h 16 c 17.67 0 32 -14.36 32 -32.06 V 320.06 c 0 -17.71 -14.33 -32.06 -32 -32.06 Z m 208 0 h -16 c -17.67 0 -32 14.35 -32 32.06 v 127.88 c 0 17.7 14.33 32.06 32 32.06 h 16 c 35.35 0 64 -28.71 64 -64.12 v -63.76 c 0 -35.41 -28.65 -64.12 -64 -64.12 Z M 256 32 C 112.91 32 4.57 151.13 0 288 v 112 c 0 8.84 7.16 16 16 16 h 16 c 8.84 0 16 -7.16 16 -16 V 288 c 0 -114.67 93.33 -207.8 208 -207.82 c 114.67 0.02 208 93.15 208 207.82 v 112 c 0 8.84 7.16 16 16 16 h 16 c 8.84 0 16 -7.16 16 -16 V 288 C 507.43 151.13 399.09 32 256 32 Z",
            Titulo: "Sistemas de audio y video",
          },
          {
            img: "M 305.45 462.59 c 7.39157 7.29792 6.18829 20.0966 -3.00038 25.0036 c -77.713 41.8028 -176.726 29.9105 -242.343 -35.7082 C -5.49624 386.282 -17.404 287.362 24.4138 209.554 c 4.89125 -9.095 17.6898 -10.2983 25.0032 -3.00043 L 166.229 323.367 l 27.3941 -27.3945 c -0.68759 -2.60974 -1.594 -5.00071 -1.594 -7.81361 a 32.0041 32.0041 0 1 1 32.0041 32.0046 c -2.79723 0 -5.20378 -0.89075 -7.79786 -1.594 l -27.4097 27.4102 Z M 511.976 303.067 a 16.1034 16.1034 0 0 1 -16.002 17.0024 H 463.86 a 15.9696 15.9696 0 0 1 -15.8926 -15.0021 C 440.467 175.549 336.453 70.5343 207.031 63.5333 a 15.8449 15.8449 0 0 1 -15.0019 -15.9085 V 16.0265 A 16.0939 16.0939 0 0 1 209.031 0.02425 C 372.255 8.61922 503.475 139.841 511.976 303.067 Z m -96.0122 -0.29692 a 16.2109 16.2109 0 0 1 -16.1114 17.2993 H 367.645 a 16.0686 16.0686 0 0 1 -15.8926 -14.7052 c -6.90712 -77.0109 -68.118 -138.91 -144.925 -145.224 a 15.94 15.94 0 0 1 -14.7988 -15.8929 V 112.134 a 16.134 16.134 0 0 1 17.2991 -16.096 C 319.451 104.539 407.556 192.645 415.964 302.77 Z",
            Titulo: "Infrastructuras de telecomunicaciones",
          },
        ],
      },
      fotos: [
        {
          img: "/src/assets/ciclos/telecomunicaciones/teleco01.jpg",
          alt: "Teleco1",
        },
        {
          img: "/src/assets/ciclos/telecomunicaciones/teleco02.jpg",
          alt: "Teleco2",
        },
        {
          img: "/src/assets/ciclos/telecomunicaciones/teleco03.jpg",
          alt: "Teleco3",
        },
        {
          img: "/src/assets/ciclos/telecomunicaciones/teleco04.jpg",
          alt: "Teleco4",
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
        { Texto: "Instalación de seguridad" },
        { Texto: "Instalación y mantenimiento de sistemas informáticos" },
        {
          Texto:
            "Instalación de telecomunicaciones en en edificios de viviendas",
        },
        { Texto: "Instalación de antenas" },
        { Texto: "Instalación de telefonía" },
        { Texto: "Mantenimiento en instalaciones de sonido" },
        { Texto: "Instalación de sistemas de megafonía" },
        { Texto: "Mantenimiento de sistemas domóticos" },
        { Texto: "Instalación y mantenimiento de sistemas de radio difusión" },
      ],
      modulos1: [
        { Texto: "Electrónica aplicada" },
        { Texto: "Equipos microinformáticos" },
        { Texto: "Infraestructuras de redes de datos y sistemas de telefonía" },
        { Texto: "Instalaciones eléctricas básicas" },
        { Texto: "Instalaciones de radiocomunicaciones" },
        { Texto: "Formación y orientación laboral" },
      ],
      modulos2: [
        {
          Texto:
            "Infraestructuras comunes de telecomunicación en viviendas y edificios",
        },
        { Texto: "Instalaciones domóticas" },
        { Texto: "Instalaciones de megafonía y sonorización" },
        { Texto: "Circuito cerrado de televisión y seguridad electrónica" },
        { Texto: "Empresa e iniciativa emprendedora" },
        { Texto: "Formación en Centros de Trabajo" },
      ],
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
    };
  },
  components: { Titulo, Izquierda, Fila, Fotos, Lista, Modulos, Redes , PiePagina, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
Modulost>
<style>
.fondoteleco {
  background-image: url("/src/assets/ciclos/fondo-teleco.jpg");
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
