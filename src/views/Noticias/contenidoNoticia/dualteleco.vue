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
      Os dejamos un vídeo sobre la <router-link to="/centro/fpdual"> FP Dual </router-link> protagonizado por algunos de nuestros alumnos del ciclo de <router-link to="/estudios/telecomunicaciones"> Telecomunicaciones </router-link>, que nos explican lo que les ha parecido la experiencia.
      </p>
      <p>
       Nuestra apuesta por la FP Dual es decidida y abarca ya a todos nuestros ciclos de Formación Profesional.
      </p>
      <p>El plazo de admisión para cursar FP con nosotros se abre en la última semana de junio</p>
      <section class="video">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/tXZcjOUSBiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
          "FP Dual en los ciclos de Telecomunicaciones e Informática",
        Titulo2: "Próximo plazo de matrícula",
      },
      redes: [
        {
          img: "/src/assets/img/iconos/facebook.svg",
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: "/src/assets/img/iconos/twitter.svg",
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: "/src/assets/img/iconos/flickr.svg",
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: "/src/assets/img/iconos/instagram.svg",
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: "/src/assets/img/iconos/youtube.svg",
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf: {
        foto1: "/src/assets/img/mapa.jpg",
        foto2: "/src/assets/img/logos/tic5.png",
        foto3: "/src/assets/img/logos/excelencia-marco.svg",
        foto4: "/src/assets/img/logos/calidad.png",
        foto5: "/src/assets/img/logos/cisco.png",
        foto6: "/src/assets/img/logos/ms-reverse.png",
        foto7: "/src/assets/img/logos/oracle-reverse.png",
        foto8: "/src/assets/img/logos/vmware.png",
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
  components: { Titulo, Redes, PiePagina, MenuNavegacion },
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
