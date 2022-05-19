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
import foto92 from "/src/assets/logos/tic5-grande.png";

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
        img: foto92,
        alt: "TIC 5",
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
  components: { Titulo, Redes, DerechaLista, PiePagina, MenuNavegacion },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.fondotic5 {
  background-image: url("/src/assets/escuela/tic.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
