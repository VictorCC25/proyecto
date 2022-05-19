<template>
<menu-navegacion/>
  <div class="fondonoticias"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <p>
       Con la fiesta de DonBosco en el horizonte, llega la Campaña Vocacional de #Salesianos Santiago el Mayor: “Se Buscan #Héroes”
      </p>
      <p>
       Este será el lema de la Campaña Vocacional para este mes de #DonBosco.
      </p>
      <section class="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/WuGBPMJCqKY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
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
import MenuNavegacion from "../components/nav.vue"

export default {
  data() {
    return {
      titulos: {
        Titulo1:
          "Se buscan héroes",
        Titulo2: "19 de enero de 2021",
      },
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
      noticia: {
        Texto1:
          "Presentamos un vídeo en el que hemos querido mostrar la personalidad de nuestro centro educativo.",
        Texto2:
          "Podrás ver testimonios de madres, padres, alumnas y alumnos que describen su experiencia en su paso por el centro y observar cuáles son los pilares en los que radica nuestra visión de trabajo.",
        Texto3:
          "Te descubrimos nuestros valores, nuestra propuesta educativa, la integración de metodologías activas, nuestros principales retos, los estudios que impartimos... en definitivo algunos de los principales elementos que hacen de nuestro centro, un centro de excelencia y de referencia en la zona.",
      },
    };
  },
  components: { Titulo, Redes, PiePagina, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.texto1 > p {
  padding-left: 1em;
  padding-right:1em ;
  font-weight: 300;
  color: #000;
  font-size: 1.8em;
}
.video{
  text-align: center;
}
</style>
