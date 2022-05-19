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
import foto87 from "/src/assets/pastoral/encuentro.jpg";
import foto88 from "/src/assets/pastoral/cuidado.jpg";
import foto89 from "/src/assets/pastoral/esperanza.jpg";
import foto90 from "/src/assets/pastoral/apasionados.png";

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
            img: foto87,
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
            img: foto88,
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
            img: foto89,
            alt: "Esperanza",
            texto: [
              {
                texto:
                  "De la mano de la esperanza, caminamos adivinando el futuro en cada huella. La vida es el origen de la vida. Eso es lo que descubren, todos los días y en todas las circunstancias, los “apasionados por la vida”. Es hora de construir puentes, de reactivar patios, de recuperar la sonrisa oculta tras infinidad de “mascarillas”, porque estamos llamados a llenar la vida de Vida",
              },
            ],
          },
          {
            img: foto90,
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
