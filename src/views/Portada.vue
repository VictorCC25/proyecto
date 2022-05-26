<template>
  <menu-navegacion/>
  <div class="fondo"></div>
  <el-main class="main">
    <div class="principal">
      <ultimas-noticias />
    </div>
    <div class="noticias">
      <h1>NOTICIAS</h1>
      <all-news :noticias="noticias" />
    </div>
    <div class="centro">
      <h1>¿QUIÉNES SOMOS?</h1>
      <escuela :filas="filas" />
    </div>
    <div class="estudios">
      <h1>OFERTA EDUCATIVA</h1>
      <todos-estudios :cursos="cursos" />
    </div>
    <div class="ser-mer">
      <div class="servicios">
        <h1>SERVICIOS</h1>
        <div class="cajaservicio">
          <todos-servicios :servicios="servicios" />
        </div>
      </div>
      <div class="meritos">
        <h1>NUESTROS MÉRITOS</h1>
        <div class="cajamerito">
          <todos-meritos :meritos="meritos" />
        </div>
      </div>
    </div>
    <div class="redes">
      <redes :redes="redes" />
    </div>
    <div class="footer">
      <pie-pagina :fotos="fotosf" />
    </div>
  </el-main>
</template>
<script>
import ultimasNoticias from "./components/ultimasnoticias.vue";
import AllNews from "./components/carousel.vue";
import Escuela from "./components/centro.vue";
import TodosEstudios from "./components/estudios.vue";
import TodosServicios from "./components/servicios.vue";
import TodosMeritos from "./components/meritos.vue";
import Redes from "./components/redes.vue";
import PiePagina from "./components/footer.vue";
import MenuNavegacion from "./components/nav.vue";
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
import foto11 from "/src/assets/index/cercanos.jpg";
import foto12 from "/src/assets/index/motivados.jpg";
import foto13 from "/src/assets/index/innovadores.jpg";
import foto14 from "/src/assets/index/implicados.jpg"
import foto15 from "/src/assets/oferta/info/eso.jpg";
import foto16 from "/src/assets/oferta/info/fpb.jpg";
import foto17 from "/src/assets/oferta/info/electromecanica.jpg";
import foto18 from "/src/assets/oferta/info/carroceria.jpg";
import foto19 from "/src/assets/oferta/info/teleco.jpg";
import foto20 from "/src/assets/oferta/info/asir.jpg";
import foto21 from "/src/assets/logos/educamos.png";
import foto22 from "/src/assets/logos/google-classroom.svg";
import foto23 from "/src/assets/logos/teams.svg";
import foto24 from "/src/assets/logos/office.svg";
import foto25 from "/src/assets/logos/casita.svg";
import foto26 from "/src/assets/logos/tic5.png";
import foto27 from "/src/assets/logos/erasmus-plus.png";
import foto28 from "/src/assets/logos/dual.svg";
import foto29 from "/src/assets/logos/excelencia.svg";
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
  name: "Portada",
  data() {
    return {
      noticias: [
        {
          Titulo: "Periodo de admisiones ESO",
          img: foto1,
          alt: "Admisiones ESO",
          Texto:
            "Abierto el periodo de admisiones para la ESO. Del 18 de marzo al 6 de abril, en la Secretaría del Centro Don Bosoc de 9:30h a 13:30h. Teléfono: 979 77 72 70",
          link: "/noticias/admisionESO",
        },
        {
          Titulo: "Centro de Excelencia Profesional",
          img: foto2,
          alt: "Centro Excelencia",
          Texto:
            "Vídeo que explica nuestras bases, fortalezas y valores educativos",
          link: "/noticias/excelencia",
        },
        {
          Titulo: "Jornada de Puertas abiertas para ESO",
          img: foto3,
          alt: "Puertas abiertas",
          Texto:
            "Ven a conocernos. El jueves 10 de marzo tenemos la jornada de puertas abiertas",
          link: "/noticias/puertas-abiertas-ESO",
        },
        {
          Titulo: "Listado definitivo de candidatos en FP Dual",
          img: foto4,
          alt: "Listado FP Dual",
          Texto:
            "Documentos con el listado provisional de alumnos candidatos a la FP Dual",
          link: "/noticias/candidatosdual",
        },
        {
          Titulo: "Listado de empresas de la FP Dual",
          img: foto5,
          alt: "Listado Empresas",
          Texto:
            "Documento con el listado de empresas colaboradoras de FP Dual para este curso 2021/22.",
          link: "/noticias/empresasdual",
        },
        {
          Titulo: "Información de ayuda para la FP Dual",
          img: foto6,
          alt: "Info FP Dual",
          Texto:
            "Documento con toda la información sobre la FP Dual para el curso 2021/22",
          link: "/noticias/informaciondual",
        },
        {
          Titulo: "Inicio de curso 2021/22",
          img: foto7,
          alt: "Inicio Curso",
          Texto:
            "Documento con la bienvenida del nuevo curso e instrucciones fundamentales a tener en cuenta por el alumnado y las familias.",
          link: "/noticias/iniciocurso",
        },
        {
          Titulo:
            "Nuevo plazo de admisión en Ciclos de FP: del 07 al 10 de Septiembre",
          img: foto8,
          alt: "Formulario de matrícula",
          Texto:
            "Instrucciones para la admisión en FP en el Centro Salesiano Don Bosco para el curso 2021/22.",
          link: "/noticias/plazodual",
        },
        {
          Titulo: "Vídeo: La evaluación como instrumento de aprendizaje",
          img: foto9,
          alt: "Formulario de matrícula",
          Texto:
            "Explicamos las estrategias que utilizamos en la evaluación para hacer de ella un ingregiente en favor de la excelencia educativa.",
          link: "/noticias/evaluacion-aprendizaje",
        },
        {
          Titulo: "Vídeo: FP Dual en Telecomunicaciones e Informática",
          img: foto10,
          alt: "Vídeo FP Dual",
          Texto:
            "Los alumnos de Telecomunicaciones comentan su experiencia cursando la FP Dual",
          link: "/noticias/dual-teleco",
        },
      ],
      filas: [
        {
          Texto11: "Eliminamos la barrera profesor/alumnos",
          Texto12: "Nos adelantamos a los problemas",
          Texto13: "Siempre estamos disponibles",
          img1: foto11,
          alt1: "Cercanos",
          Texto21: "Somos un equipo ilusionado",
          Texto22: "Rebosantes de entusiasmo",
          Texto23: "Creemos en lo que hacemos",
          img2: foto12,
          alt2: "Motivados",
        },
        {
          Texto11: "Aplicamos metodologías activas",
          Texto12: "Usamos la tecnología en nuestro provecho",
          Texto13: "Aplicamos las mejores técnicas de enseñanza",
          img1: foto13,
          alt1: "Innovadores",
          Texto21: "Creemos en lo que hacemos",
          Texto22: "Comprometidos a todos los niveles",
          Texto23: "Educamos en valores",
          img2: foto14,
          alt2: "Implicados",
        },
      ],
      cursos: [
        {
          Texto: "Educación secundaria obligatoria",
          Titulo: "ESO",
          img: foto15,
          alt: "ESO",
          route: "/estudios/eso",
        },
        {
          Texto: "Mantenimiento de vehículos",
          Titulo: "FP Básica",
          img: foto16,
          alt: "FP",
          route: "/estudios/mantenimiento",
        },
        {
          Texto: "Electromecanica",
          Titulo: "FP Grado Medio",
          img: foto17,
          alt: "Electromecanica",
          route: "/estudios/electromecanica",
        },
        {
          Texto: "Carrocería",
          Titulo: "FP Grado Medio",
          img: foto18,
          alt: "Carrocería",
          route: "/estudios/carroceria",
        },
        {
          Texto: "Telecomunicaciones",
          Titulo: "FP Grado Medio",
          img: foto19,
          alt: "Telecomunicaciones",
          route: "/estudios/telecomunicaciones",
        },
        {
          Texto: "Administración de Sistemas Informáticos en red",
          Titulo: "FP Grado Superior",
          img: foto20,
          alt: "ASIR",
          route: "/estudios/asir",
        },
      ],
      servicios: [
        {
          Titulo: "PLATAFORMA EDUCAMOS",
          img: foto21,
          link: "https://sso2.educamos.com/Autenticacion/Acceder?ReturnUrl=%2fissue%2fwsfed%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253a%252f%252fdonbosco-salesianos-villamurieldecerrato.educamos.com%252f%26wctx%3drm%253d0%2526id%253dpassive%2526ru%253d%25252f%26wct%3d2017-03-16T07%253a36%253a30Z&wa=wsignin1.0&wtrealm=https%3a%2f%2fdonbosco-salesianos-villamurieldecerrato.educamos.com%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252f&wct=2017-03-16T07%3a36%3a30Z",
        },
        {
          Titulo: "GOOGLE CLASSROOM",
          img: foto22,
          link: "https://accounts.google.com/signin/v2/identifier?service=classroom&passive=1209600&continue=https%3A%2F%2Fclassroom.google.com%2F%3Femr%3D0&followup=https%3A%2F%2Fclassroom.google.com%2F%3Femr%3D0&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
        },
        {
          Titulo: "MICROFOST TEAMS",
          img: foto23,
          link: "https://teams.microsoft.com/_",
        },
        {
          Titulo: "MICROSOFT OFFICE 365",
          img: foto24,
          link: "https://www.office.com/login?es=Click&ru=%2F",
        },
        {
          Titulo: "AGENCIA DE COLOCACIÓN",
          img: foto25,
          link: "http://salesianosvillamuriel.redagenciadecolocacion.com/",
        },
      ],
      meritos: [
        {
          Titulo1: "TIC 5",
          img1: foto26,
          alt1: "TIC 5",
          link1: "/centro/tic-5",
          Titulo2: "ERASMUS PLUS",
          img2: foto27,
          alt2: "ERASMUS PLUS",
          link2: "/centro/erasmus-plus",
        },
        {
          Titulo1: "FP DUAL",
          img1: foto28,
          alt1: "FP DUAL",
          link1: "/centro/fpdual",
          Titulo2: "CENTRO DE EXCELENCIA DE ALTO NIVEL",
          img2: foto29,
          alt2: "Centro de Excelencia",
          link2: "/centro/excelencia",
        },
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
  components: {
    ultimasNoticias,
    AllNews,
    Escuela,
    TodosEstudios,
    TodosServicios,
    TodosMeritos,
    Redes,
    PiePagina,
    MenuNavegacion
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
body {
  margin: 0;
  font-family: sans-serif;
  padding: 0;
}

.main {
  width: 100%;
  padding: 0;
  margin: 0;
}

.principal {
  background-color: rgba(0, 0, 0, 0.7);
  position: relative;
  width: 100%;
  margin: 0 0 7% 0;
  height: 100vh;
}

.noticias {
  position: relative;
  width: 100%;
  text-align: center;
  color: #fff;
}
.noticias > h1 {
  font-weight: 300;
  font-size: 3em;
}

.todas {
  position: relative;
  width: 100%;
  text-align: center;
  margin: 5% 0 5% 0;
}

.todas-noticias {
  text-align: center;
  background-color: #51626f;
  padding: 1em;
  border-radius: 20px;
  color: #fff;
}

.redes {
  position: fixed;
  text-align: right;
  bottom: 0;
  right: 20px;
  z-index: 3000;
}

.centro {
  position: relative;
  width: 100%;
  text-align: center;
  background-color: #dad4cb;
  padding: 20px 0 20px 0;
}
.centro h1 {
  font-weight: 300;
  font-size: 3em;
  color: #51626f;
}

.estudios {
  position: relative;
  width: 100%;
  text-align: center;
  color: #fff;
}
.estudios h1 {
  font-weight: 300;
  font-size: 3em;
}

.ser-mer {
  width: 100%;
  position: relative;
  background: rgb(217, 217, 217);
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 15px;
}

.ser-mer h1 {
  color: rgb(81, 98, 111);
  font-weight: 300;
  font-size: 3em;
}
@media screen and (max-width: 769px) {
  .meritos{
    width: 98%;
    text-align: center;
    flex-wrap: wrap;
  }
  .servicios{
    width: 98%;
    text-align: center;
    flex-wrap: wrap;
  }
}
</style>
