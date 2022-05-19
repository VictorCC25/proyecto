<template>
<menu-navegacion/>
  <div class="fondocentro"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <derecha-pequeño :contenido="contenido1" />
      <izquierda-grande :contenido="contenido2"/>
      <derecha-lista :contenido="contenido3"/>
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
import DerechaPequeño from './components/derechapequeño.vue';
import IzquierdaGrande from './components/izquierda.vue'
import DerechaLista from './components/derechalista.vue'
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
import foto104 from "/src/assets/pastoral/n-mision.png";
import foto105 from "/src/assets/pastoral/n-vision.png";
import foto106 from "/src/assets/pastoral/n-valores.png";


export default {
  data() {
    return {
      titulos: {
        Titulo1: "",
        Titulo2: "Misión, Visión y Valores",
      },
      contenido1: {
          Titulo: "NUESTRA MISIÓN",
        Texto1:
          "Somos una Escuela Salesiana que mira al futuro con la responsabilidad de continuar el patrimonio pedagógico y carismático de Don Bosco y con la esperanza de dar una adecuada respuestas a niños y jóvenes de hoy.",
        Texto2:
          "",
        Texto3: "",
        img: foto104,
        alt: "Pastoral",
      },
      contenido2: {
          Titulo: "NUESTRA VISIÓN",
          Texto1:"Pretendemos ser una escuela inclusiva que acoge a todos y cada uno de nuestros alumnos, con un talante basado en la cercanía y en la creación de un ambiente educativo rico en valores evangélicos al estilo del Sistema Preventivo de Don Bosco.",
          Texto2:"Buscamos una educación integral que ayuda a crecer como persona y como cristiano soñando un mundo mejor.",
          Texto3:"Favorecemos una escuela a tiempo completo: tiempo libre educativo y conciliación familiar.",
          Texto4:"Apostamos por la innovación pedagógica: las nuevas metodologías, el plurilingüismo y las tecnologías como instrumentos pedagógicos.",
          Texto5:"Avalamos el protagonismo del alumnado en el proceso de enseñanza-aprendizaje, y aspiramos desde el sentido crítico a la construcción de un mundo mejor.",
          img:foto105,
          alt:"Vision"
      },
      contenido3:{
          Titulo:"NUESTROS VALORES",
          Texto:"Somos educadores comprometidos con el dersarrollo de los valores propios de nuestro patrimonio educativo.",
          Texto2:[
              {texto:"Acogida incondicional a la persona."},
              {texto:"Confianza en los jóvenes."},
              {texto:"Atención preferencial a los más necesitados."},
              {texto:"Respeto a la vida."},
              {texto:"Esfuerzo como instrumento de crecimiento."},
              {texto:"Construcción de un mundo más solidario justo y pacífico."},
              {texto:"Apertura a Dios."},
          ],
          Texto3:"",
          Texto4:"",
          Texto5:"",
          img:foto106,
          alt:"Valores",
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
  components: { Titulo, Redes, DerechaPequeño ,IzquierdaGrande,DerechaLista , PiePagina, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

