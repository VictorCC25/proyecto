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
        En una sociedad cada vez más compleja que avanza a pasos agigantados hacia el mundo digital y las nuevas tecnologías. Nuestro centro apuesta por un aprendizaje que desarrolla habilidades y competencias indispensables para la sociedad del S.XXI, con una visión creativa, social e inclusiva.
      </p>
      <p>
       La Innovación Educativa forma parte de los grandes planes de acción que estamos desarrollando en nuestro centro, coherentes con los valores de nuestra Propuesta Educativa.
      </p>
      <p>
          Poseemos un amplio recorrido en la integración de nuevas metodologías y en la incorporación de las TICs (reconocimiento Codice TIC con nivel máximo) a nuestro proceso de enseñanza-aprendizaje. Además, este curso la Junta de Castilla y León nos ha seleccionado como único centro de secundaria en la provincia de Palencia para formar parte del proyecto de innovación educativa: Espacios Flexibles de Formación y aprendizaje que promueve la transformación de la enseñanza para que el alumno sea protagonista de su propio aprendizaje.
      </p>
      <p>Apostamos por el aprendizaje individualizado y adaptado a las necesidades de cada alumno, lo que permite alcanzar los máximos niveles de aprendizaje.</p>
      <p>Somos un centro con proyección profesional. Nuestra oferta educativa ofrece Ciclos formativos de grado medio y superior y FPB. Contamos con programas <router-link to="/centro/erasmus-plus"> Erasmus+ </router-link> y <router-link to="/centro/fpdual"> FP Dual </router-link> y poseemos reconocimiento como <router-link to="/centro/excelencia"> Centro de excelencia profesional de alto nivel . </router-link></p>
      <p>Si quieres saber más puedes descargar nuestro <el-link href="https://www.centrodonbosco.es/docs/Folleto-ESO.pdf" type="info"> folleto informativo </el-link></p>
      <section class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cHdEr7stxIQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/g0BcBoIaFAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PuBQIsGe180" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cCW1TKsfSjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default {
  data() {
    return {
      titulos: {
        Titulo1:
          "Jornada de Puertas Abiertas, ESO",
        Titulo2: "",
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
.texto1 > p > a:hover{
  color: #fff;
}
</style>
