<template>
<menu-navegacion/>
  <div class="fondocentro"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <vertical :contenidos="contenidos" />
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
import Redes from "../components/redes.vue";
import Vertical from "./components/vertical.vue";
import PiePagina from "../components/footer.vue"
import MenuNavegacion from "../components/nav.vue"

export default {
  data() {
    return {
      titulos: {
        Titulo1: "Apasionados por la vida",
        Titulo2: "Lema del curso 2021-22",
      },
      contenidos: [
        [
          {
            img: "/src/assets/pastoral/encuentro.jpg",
            alt: "Encuentro",
            texto: [
              {
                texto:
                  "APASIONADOS POR LA VIDA es el lema de nuestro curso 2021-22",
              },
              {
                texto:
                  "Este vivir apasionados por la vida se llama ENCUENTRO, es decir: familia, comunidad, fraternidad, amistad…",
              },
            ],
          },
          {
            img: "/src/assets/pastoral/cuidado.jpg",
            alt: "Cuidado",
            texto: [
              {
                texto:
                  "Esta actitud se traduce en CUIDADO de las personas, de la vida, de sus opciones específicas y vocacionales. Por eso se nos invita a “arriesgar la vida”, quien no arriesga es un perdedor, “a cuidar la vida” del planeta, de la familia, del propio corazón…, porque Dios piensa en nosotros, “apasionados por la vida”, como bálsamo para este mundo herido por tantas contradicciones y desencuentros.",
              },
            ],
          },
        ],
        [
          {
            img: "/src/assets/pastoral/esperanza.jpg",
            alt: "Esperanza",
            texto: [
              {
                texto:
                  "De la mano de la esperanza, caminamos adivinando el futuro en cada huella. La vida es el origen de la vida. Eso es lo que descubren, todos los días y en todas las circunstancias, los “apasionados por la vida”. Es hora de construir puentes, de reactivar patios, de recuperar la sonrisa oculta tras infinidad de “mascarillas”, porque estamos llamados a llenar la vida de Vida",
              },
            ],
          },
          {
            img: "/src/assets/pastoral/apasionados.png",
            alt: "Vida",
            texto: [
              {
                texto:
                  "He aquí la historia del presente curso. Vacunados contra la nostalgia y contra el pesimismo, alcanzaremos la inmunidad de grupo contra todo lo que no sea vida. “Apasionados por la vida”, la vida es nuestra opción, nuestra tarea, nuestra determinación, nuestro reto: vívela, siéntela, ama, ríe, llora, juega, gana, pierde, tropieza, pero sobre todo, levántate siempre,… y sigue. ¡Vive la vida!",
              },
            ],
          },
        ],
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
  components: { Titulo, Redes, Vertical , PiePagina, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.fondocentro{
  background-image: url("/src/assets/textura1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
