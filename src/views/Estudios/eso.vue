<template>
<menu-navegacion/>
  <div class="fondoeso"></div>
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
    <div class="texto1">
      <br />
      <izquierda :contenido="contenido2" />
      <derecha :contenido="contenido3" />
      <izquierda :contenido="contenido4" />
    </div>
    <div class="fotos">
      <fotos :fotos="fotos" />
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
import Derecha from "./components/derecha.vue";
import Fila from "./components/fila.vue";
import Fotos from "./components/fotos.vue";
import Redes from "../components/redes.vue";
import PiePagina from "../components/footer.vue"
import MenuNavegacion from "../components/nav.vue"

export default {
  data() {
    return {
      titulos: { Titulo1: "Educación Secundaria Obligatoria", Titulo2: "ESO" },
      contenido1: {
        Titulo: "Los Estudios de Educación Secundaria",
        Texto1:
          "Desde el centro Don Bosco entendemos la importancia que tiene esta etapa en la formación de la persona a todos los niveles. Por ello trabajamos en esta etapa desde la consciencia de la importancia de la motivación personal y la implicación del alumnado en su propio conocimiento",
        Texto2:
          "La Educación Secundaria Obligatoria (ESO) cubre la etapa en la cual los alumnos y alumnas tomarán las primeras decisiones importantes sobre su futuro personal y profesional en un camino en el que nuestro acompañamiento busca la mayor calidad educativa.",
        Texto3:
          "No nos quedamos solo en los contenidos académicos, queremos ir más allá. Trabajamos por una enseñanza en valores con el objetivo de que nuestro alumnado se convierta en personas seguras, felices e implicadas en la mejora de su entorno social, cultural y ecológico.",
        img: "/src/assets/oferta/info/eso.jpg",
        alt: "Info ESO",
      },
      fila: {
        Titulo: "CLAVES",
        fotos: [
          {
            img: "M 496 128 v 16 a 8 8 0 0 1 -8 8 h -24 v 12 c 0 6.627 -5.373 12 -12 12 H 60 c -6.627 0 -12 -5.373 -12 -12 v -12 H 24 a 8 8 0 0 1 -8 -8 v -16 a 8 8 0 0 1 4.941 -7.392 l 232 -88 a 7.996 7.996 0 0 1 6.118 0 l 232 88 A 8 8 0 0 1 496 128 Z m -24 304 H 40 c -13.255 0 -24 10.745 -24 24 v 16 a 8 8 0 0 0 8 8 h 464 a 8 8 0 0 0 8 -8 v -16 c 0 -13.255 -10.745 -24 -24 -24 Z M 96 192 v 192 H 60 c -6.627 0 -12 5.373 -12 12 v 20 h 416 v -20 c 0 -6.627 -5.373 -12 -12 -12 h -36 V 192 h -64 v 192 h -64 V 192 h -64 v 192 h -64 V 192 H 96 Z",
            Titulo: "Excelencia Educatica",
          },
          {
            img: "M 208 352 c -2.39 0 -4.78 0.35 -7.06 1.09 C 187.98 357.3 174.35 360 160 360 c -14.35 0 -27.98 -2.7 -40.95 -6.91 c -2.28 -0.74 -4.66 -1.09 -7.05 -1.09 C 49.94 352 -0.33 402.48 0 464.62 C 0.14 490.88 21.73 512 48 512 h 224 c 26.27 0 47.86 -21.12 48 -47.38 c 0.33 -62.14 -49.94 -112.62 -112 -112.62 Z m -48 -32 c 53.02 0 96 -42.98 96 -96 s -42.98 -96 -96 -96 s -96 42.98 -96 96 s 42.98 96 96 96 Z M 592 0 H 208 c -26.47 0 -48 22.25 -48 49.59 V 96 c 23.42 0 45.1 6.78 64 17.8 V 64 h 352 v 288 h -64 v -64 H 384 v 64 h -76.24 c 19.1 16.69 33.12 38.73 39.69 64 H 592 c 26.47 0 48 -22.25 48 -49.59 V 49.59 C 640 22.25 618.47 0 592 0 Z",
            Titulo: "Acompañamiento",
          },
          {
            img: "M 96 224 c 35.3 0 64 -28.7 64 -64 s -28.7 -64 -64 -64 s -64 28.7 -64 64 s 28.7 64 64 64 Z m 448 0 c 35.3 0 64 -28.7 64 -64 s -28.7 -64 -64 -64 s -64 28.7 -64 64 s 28.7 64 64 64 Z m 32 32 h -64 c -17.6 0 -33.5 7.1 -45.1 18.6 c 40.3 22.1 68.9 62 75.1 109.4 h 66 c 17.7 0 32 -14.3 32 -32 v -32 c 0 -35.3 -28.7 -64 -64 -64 Z m -256 0 c 61.9 0 112 -50.1 112 -112 S 381.9 32 320 32 S 208 82.1 208 144 s 50.1 112 112 112 Z m 76.8 32 h -8.3 c -20.8 10 -43.9 16 -68.5 16 s -47.6 -6 -68.5 -16 h -8.3 C 179.6 288 128 339.6 128 403.2 V 432 c 0 26.5 21.5 48 48 48 h 288 c 26.5 0 48 -21.5 48 -48 v -28.8 c 0 -63.6 -51.6 -115.2 -115.2 -115.2 Z m -223.7 -13.4 C 161.5 263.1 145.6 256 128 256 H 64 c -35.3 0 -64 28.7 -64 64 v 32 c 0 17.7 14.3 32 32 32 h 65.9 c 6.3 -47.4 34.9 -87.3 75.2 -109.4 Z",
            Titulo: "Aprendizaje Colaborativo",
          },
          {
            img: "M 256 48 c 114.953 0 208 93.029 208 208 c 0 114.953 -93.029 208 -208 208 c -114.953 0 -208 -93.029 -208 -208 c 0 -114.953 93.029 -208 208 -208 m 0 -40 C 119.033 8 8 119.033 8 256 s 111.033 248 248 248 s 248 -111.033 248 -248 S 392.967 8 256 8 Z m 0 56 C 149.961 64 64 149.961 64 256 s 85.961 192 192 192 s 192 -85.961 192 -192 S 362.039 64 256 64 Z m 0 44 c 19.882 0 36 16.118 36 36 s -16.118 36 -36 36 s -36 -16.118 -36 -36 s 16.118 -36 36 -36 Z m 117.741 98.023 c -28.712 6.779 -55.511 12.748 -82.14 15.807 c 0.851 101.023 12.306 123.052 25.037 155.621 c 3.617 9.26 -0.957 19.698 -10.217 23.315 c -9.261 3.617 -19.699 -0.957 -23.316 -10.217 c -8.705 -22.308 -17.086 -40.636 -22.261 -78.549 h -9.686 c -5.167 37.851 -13.534 56.208 -22.262 78.549 c -3.615 9.255 -14.05 13.836 -23.315 10.217 c -9.26 -3.617 -13.834 -14.056 -10.217 -23.315 c 12.713 -32.541 24.185 -54.541 25.037 -155.621 c -26.629 -3.058 -53.428 -9.027 -82.141 -15.807 c -8.6 -2.031 -13.926 -10.648 -11.895 -19.249 s 10.647 -13.926 19.249 -11.895 c 96.686 22.829 124.283 22.783 220.775 0 c 8.599 -2.03 17.218 3.294 19.249 11.895 c 2.029 8.601 -3.297 17.219 -11.897 19.249 Z",
            Titulo: "Atención a la diversidad",
          },
          {
            img: "M 275.3 250.5 c 7 7.4 18.4 7.4 25.5 0 l 108.9 -114.2 c 31.6 -33.2 29.8 -88.2 -5.6 -118.8 c -30.8 -26.7 -76.7 -21.9 -104.9 7.7 L 288 36.9 l -11.1 -11.6 C 248.7 -4.4 202.8 -9.2 172 17.5 c -35.3 30.6 -37.2 85.6 -5.6 118.8 l 108.9 114.2 Z m 290 77.6 c -11.8 -10.7 -30.2 -10 -42.6 0 L 430.3 402 c -11.3 9.1 -25.4 14 -40 14 H 272 c -8.8 0 -16 -7.2 -16 -16 s 7.2 -16 16 -16 h 78.3 c 15.9 0 30.7 -10.9 33.3 -26.6 c 3.3 -20 -12.1 -37.4 -31.6 -37.4 H 192 c -27 0 -53.1 9.3 -74.1 26.3 L 71.4 384 H 16 c -8.8 0 -16 7.2 -16 16 v 96 c 0 8.8 7.2 16 16 16 h 356.8 c 14.5 0 28.6 -4.9 40 -14 L 564 377 c 15.2 -12.1 16.4 -35.3 1.3 -48.9 Z",
            Titulo: "Enseñanza en valores",
          },
        ],
      },
      contenido2: {
        Titulo: "Nos gustan los proyectos",
        Texto1:
          "El aprendizaje basado en proyectos y retos es motivante, presenta resultados inmediatamente aplicables en el mundo real y facilita un aprendizaje autónomo y colaborativo.",
        Texto2:
          "Buscamos un aprendizaje significativo, que tenga en cuenta la diversidad de nuestro alumnado y la realidad del entorno en el que se encuentran. Por ello los proyectos nos encantan, porque apuntalan nuestro método educativo.",
        Texto3: " ",
        img: "/src/assets/ciclos/eso/coches.jpg",
        alt: "Coches ESO",
      },
      contenido3: {
        Titulo: "Usamos la tecnología en apoyo de nuestro método educativo",
        Texto1:
          "Somos un centro de excelencia TIC, reconocido con nivel 5 (el máximo). Tenemos una larga tradición de uso de la tecnología en el aula para favorecer el conocimiento.",
        Texto2:
          "Actualmente mantenemos una estrategia 1 a 1 (un dispositivo por alumno) que en secundaria se basa en que cada alumno dispone de un Chromebook, portátil en el que los contenidos son exclusivamente educativos.",
        Texto3:
          "Usamos la tecnología en pro de aplicar métodos activos de enseñanza. La tecnología facilita la participación de los alumnos en proyectos motivantes impulsados por las últimas tecnologías.",
        img: "/src/assets/ciclos/eso/croma.jpg",
      },
      contenido4: {
        Titulo: "Educando en valores",
        Texto1:
          "Siempre miramos mas allá de los contenidos académicos. Trabajamos valores en nuestros alumnos, nos implicamos en nuestro entorno, somos sensibles a los problemas que nos rodean y realizamos acciones y proyectos para reflexionar y mejorar nuestra realidad.",
        Texto2:
          "Nuestro centro se inspira en los valores salesianos que fomentan un método preventivo de educación. La educación en valores es la base de nuestro trabajo para conseguir personas cuyos valores sean inspiradores.",
        Texto3:
          "Trabajamos en conjunto con las familias para conseguir un apoyo educativo constante y un mejor acompañamiento de nuestro alumnado.",
        img: "/src/assets/ciclos/eso/valores.jpg",
      },
      fotos: [
        { img: "/src/assets/ciclos/eso/eso01.jpg", alt: "ESO1" },
        { img: "/src/assets/ciclos/eso/eso02.jpg", alt: "ESO2" },
        { img: "/src/assets/ciclos/eso/eso03.jpg", alt: "ESO3" },
        { img: "/src/assets/ciclos/eso/eso04.jpg", alt: "ESO4" },
        { img: "/src/assets/ciclos/eso/eso05.jpg", alt: "ESO5" },
        { img: "/src/assets/ciclos/eso/eso06.jpg", alt: "ESO6" },
        { img: "/src/assets/ciclos/eso/eso07.jpg", alt: "ESO7" },
        { img: "/src/assets/ciclos/eso/eso08.jpg", alt: "ESO8" },
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
      fotosf:{
        foto1:"/src/assets/mapa.jpg",
        foto2:"/src/assets/logos/tic5.png",
        foto3:"/src/assets/logos/excelencia-marco.svg",
        foto4:"/src/assets/logos/calidad.png",
        foto5:"/src/assets/logos/cisco.png",
        foto6:"/src/assets/logos/ms-reverse.png",
        foto7:"/src/assets/logos/oracle-reverse.png",
        foto8:"/src/assets/logos/vmware.png",
      }
    };
  },
  components: { Titulo, Izquierda, Derecha, Fila, Fotos, Redes, PiePagina,MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.fondoeso {
  background-image: url("/src/assets/ciclos/fondo-eso.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.total {
  position: relative;
  width: 100%;
  top: 100px;
  
}

.titulo {
  position: relative;
  height: 70vh;
}

.texto1 {
  position: relative;
  background-color: rgb(217, 217, 217);
}
.zonasinfondo > h1 {
  margin: 1.5em 0;
  font-family: sans-serif;
  font-weight: 300;
  font-size: 4em;
  color: #fff;
  text-align: center;
}
</style>
