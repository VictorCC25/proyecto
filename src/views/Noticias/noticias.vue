<template>
<menu-navegacion/>
  <div class="fondonoticias"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <noticia :noticias="noticias" />
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
import PiePagina from "../components/footer.vue";
import Noticia from "./components/noticia.vue";
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
import foto1 from '/src/assets/noticias/2022/03/admisiones-ESO.jpeg';
import foto2 from "/src/assets/noticias/2022/03/video-excelencia.jpg";
import foto3 from "/src/assets/noticias/2022/03/puertas-abiertas.jpg";
import foto4 from "/src/assets/noticias/2021/12/listado-definitivo.jpg";
import foto5 from "/src/assets/noticias/2021/11/listado-fpdual-blur.jpg";
import foto6 from "/src/assets/noticias/2021/10/info-fpdual-blur.jpg";
import foto7 from "/src/assets/noticias/2021/09/inicio-curso-blur.jpg";
import foto8 from "/src/assets/noticias/2021/06/fp-online.jpg";
import foto9 from "/src/assets/noticias/2021/06/evaluacion.jpg";
import foto10 from "/src/assets/noticias/2021/06/fp-dual-video.jpg";
import foto107 from "/src/assets/noticias/2021/06/fp-online.jpg";
import foto108 from "/src/assets/noticias/2021/06/premio-vmware.jpg";
import foto109 from "/src/assets/noticias/2021/06/Autoridades.jpg";
import foto110 from "/src/assets/noticias/2021/03/eso-puertas-abiertas.jpg";
import foto111 from "/src/assets/noticias/2021/01/heroes.jpg";
import foto112 from "/src/assets/noticias/2020/11/FP_excelencia.jpeg";


export default {
  data() {
    return {
      titulos: {
        Titulo1: "NOTICIAS",
        Titulo2: "Listado de noticias de Salesianos de Villamuriel",
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
      noticias: [
        {
          img: foto1,
          alt: "Admisiones",
          titulo: "Periodo de Admisiones ESO",
          texto1: "Abierto periodo de admisiones",
          texto2:
            "Después de estos dos años de pandemia retomamos con muchocariño el Homenaje a María Auxiliadora el sábado 30 de abril y la XXXIX Fiesta-peregrinación el 1 de mayo",
          link: "/noticias/admisionESO",
        },
        {img:foto2,alt:"Video Excelencia",titulo:"Centro de Excelencia Profesional",
        texto1:"Descubre nuestro modelo educativo",
        texto2:"Video que explica nuestras bases fortalezas y valores educativos",
        link:"/noticias/excelencia"
        },
        {img:foto3,alt:"Puertas abiertas",titulo:"Jornada de puertas abiertas para ESO",
        texto1:"Información para familias",
        texto2:"Ven a conocernos. El jueves 10 de marzo tenemos la jornada de puertas abiertas",
        link:"/noticias/puertas-abiertas-ESO"
       },
        {img:foto4,alt:"ListadoFP",titulo:"Listado definitivo de candidatos en FP Dual",
        texto1:"FP Dual 2021/22",
        texto2:"Documento con el listado provisional de alumnos candidatos a la FP Dual",
        link:"/noticias/candidatosdual"
        },
        {img:foto5,alt:"EmpresasFP",titulo:"Listado de empresas de la FP Dual",
        texto1:"Empresas colaboradoras",
        texto2:"Documento con el listado de empresas colaboradoras de FP Dual para este curso 2021/22",
        link:"/noticias/empresasdual"
        },
        {img:foto6,alt:"InfoFP",titulo:"Información de ayuda para la FP Dual",
        texto1:"Información para familias",
        texto2:"Documento con toda la información sobre la FP Dual para el curso 2021/22",
        link:"/noticias/informaciondual"
        },
        {img:foto7,alt:"Inicio Curso",titulo:"Incio de curso 2021/22",
        texto1:"Información para alumnos y familias",
        texto2:"Documento con la bienvenida al nuevo curso e instrucciones fundamentales a tener en cuenta por el alumnado y las familias",
        link:"/noticias/iniciocurso",
        },
        {img:foto8,alt:"Plazo adimsion",titulo:"Nuevo plazo de admisión en ciclos de FP: del 07 al 10 de Septiembre",
        texto1:"Matrícula 2021/22",
        texto2:"Instrucciones para la admisión en FP en el Centro Salesianos Don Bosco para el curso 2021/22",
        link:"/noticias/plazodual"
        },
        {img:foto9,alt:"Video Evaluacion",titulo:"Vídeo: La evaluación como instrumento de aprendizaje",
        texto1:"Matricula 2021",
        texto2:"Explicamos las estrategias que utilizamos en la evaluación para hacer de ella un ingrediente en favor de la excelencia educativa",
        link:"/noticias/evaluacion-aprendizaje"
        },
        {img:foto10,alt:"Video FP Dual",titulo:"Vídeo: FP Dual en Telecomunicaciones e Informática",
        texto1:"Matrícula 2021/22",
        texto2:"Los alumnos de telecomunicaciones comentan si experiencia cursando la FP Dual",
        link:"/noticias/dual-teleco"
        },
        {img:foto107,alt:"Admision FP",titulo:"Instrucciones para la admisión de FP",
        texto1:"Matrícula 2021/22",
        texto2:"Instrucciones para la admisión en FP en el Centro Salesianos Don Bosco para el curso 2021/22",
        link:"/noticias/admisiondual"
        },
        {img:foto108,alt:"Premio VMWare",titulo:"Premio al mejor  centro VMWare IT Academy 2020",
        texto1:"PUE Academy Awards 2020",
        texto2:"Salesianos de Villamuriel de Cerrato ha sido elegigo como el mejor centro VmWare Academy de 2020 en los PUE Academy Awards",
        link:"/noticias/premio-vmware"
        },
        {img:foto109,alt:"Autoridades",titulo:"Presentación de Proyectos de ASIR",
        texto1:"Junio de 2021",
        texto2:"Los alumnos del ciclo de FP de grado superior en Admisión de Sistemas Informáticos en Red presentan sus proyectos finales",
        link:"/noticias/proyectos"
        },
        {titulo:"Exámenes finales de 2º de ASIR",
        texto1:"Junio dec 2021",
        texto2:"Calendario de Éxamenes Finales para los alumnos y alumnas de 2º de ASIR para la convocatoria de Junio de 2021",
        link:"/noticias/finales-junio"
        },
        {titulo:"Libros para el curso 2021-22",
        texto1:"Listado de ISBN",
        texto2:"Ya están disponibles los libros para el curso que viene",
        link:"/noticias/libros"
        },
        {img:foto110,alt:"Puertas abiertas",titulo:"Jornada de Puertas abiertas",
        texto1:"Del 19 de marzo al 6 de abril",
        texto2:"Hemos preparado un contenido especial para informarte sobre nuestro trabajo en Educación Secundaria",
        link:"/noticias/puertas-abiertas"
        },
        {titulo:"Las funciones de la literatura",
        texto1:"Proyecto de secundaria",
        texto2:"Nuestr@s chic@s de 1º ESO nos explican y ejemplifican algunas de las funciones de la literatura utilizando la herremienta Croma",
        link:"/noticias/literatura"
        },
        {titulo:"FP Dual en nuestros Ciclos de Grado Medio",
        texto1:"Escuela Empresa",
        texto2:"Hoy, nuestros alumnos de los Ciclos Formativos de Telecomunicaciones, Electrónica, Carocería y Automoción comienzan su período de FP Dual",
        link:"/noticias/fp-dual-comienzo"
        },
        {img:foto111,alt:"Heroes",titulo:"Se buscan héroes",
        texto1:"",
        texto2:"Con la fiesta de Don Bosco en el horizonte, llega la Campaña Vocacional de #Salesianos Santiago el Mayor: Se Buscan #Héroes",
        link:"/noticias/heroes"
        },
        {img:foto112,alt:"Excelencia FP",titulo:"Somos centro de excelencia de alto nivel",
        texto1:"",
        texto2:"La Junta de Castilla y León nos ha reconocido como centro de excelencia de alto nivel en su orden de 13 de Octubre de 2020",
        link:"/noticias/somos-excelencia"
        },
      ],
    };
  },
  components: { Titulo, Redes, PiePagina, Noticia, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.fondonoticias {
  background-image: url("/src/assets/fondos/noticias.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
