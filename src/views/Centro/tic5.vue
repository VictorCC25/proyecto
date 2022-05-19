<template>
<menu-navegacion/>
  <div class="fondotic5"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <derecha-lista :contenido="contenido" />
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
import Titulo from "./components/titulo.vue";
import Redes from "../components/redes.vue";
import DerechaLista from "./components/derechalista.vue";
import PiePagina from "../components/footer.vue";
import MenuNavegacion from "../components/nav.vue"
export default {
  data() {
    return {
      titulos: {
        Titulo1: "Escuela de nivel 5 en TIC",
        Titulo2: "Máximo nivel de excelencia en aplicación de TIC",
      },
      contenido: {
        Titulo: "",
        Texto: "El centro Don Bosco de Villamuriel de Cerrato obtuvo el nivel de certificación TIC más alto, el Códice TIC de nivel 5. ",
        Texto4: "Este reconocimiento supone un espaldarazo a nuestra apuesta, desde hace muchos años, por el apoyo que la tecnología proporciona a nuestra metodología docente",
        Texto3: "La certificación verifica que:",
        Texto2:[
              {texto:"Existe una integración excelente de las TIC en el Centro en todas las etapas educativas."},
              {texto:"Los equipamientos informáticos cumplen con las fases de renovación y están integrados en el 100% de los procesos educativos."},
              {texto:"Los planes del centro asumen las herramientas como un proceso integrado, logrando mejoras continuas en los resultados"},
              {texto:"Se proporciona formación continua y asociada al uso y entorno TIC (aplicación de herramientas en formación)."},
              {texto:"La implicación y el conocimiento en TIC es muy alto y se aplican en la totalidad de los procesos."},
          ],
        Texto5:"Esto no significa un punto y final en nuestra estrategia de integración de la tecnología, sino una motivación extra para continuar buscando la excelencia en la aplicación de metodologías activas que impulsen la motivación y un alto grado de desempeño en todo nuestro alumnado.",
        img: "./assets/logos/tic5-grande.png",
        alt: "TIC 5",
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
    };
  },
  components: { Titulo, Redes, DerechaLista, PiePagina, MenuNavegacion },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.fondotic5 {
  background-image: url("./assets/escuela/tic.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
