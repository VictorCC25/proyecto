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
import MenuNavegacion from "./components/nav.vue"

export default {
  name: "Portada",
  data() {
    return {
      noticias: [
        {
          Titulo: "Periodo de admisiones ESO",
          img: "/src/assets/noticias/2022/03/admisiones-ESO.jpeg",
          alt: "Admisiones ESO",
          Texto:
            "Abierto el periodo de admisiones para la ESO. Del 18 de marzo al 6 de abril, en la Secretaría del Centro Don Bosoc de 9:30h a 13:30h. Teléfono: 979 77 72 70",
          link: "/noticias/admisionESO",
        },
        {
          Titulo: "Centro de Excelencia Profesional",
          img: "/src/assets/noticias/2022/03/video-excelencia.jpg",
          alt: "Centro Excelencia",
          Texto:
            "Vídeo que explica nuestras bases, fortalezas y valores educativos",
          link: "/noticias/excelencia",
        },
        {
          Titulo: "Jornada de Puertas abiertas para ESO",
          img: "/src/assets/noticias/2022/03/puertas-abiertas.jpg",
          alt: "Puertas abiertas",
          Texto:
            "Ven a conocernos. El jueves 10 de marzo tenemos la jornada de puertas abiertas",
          link: "/noticias/puertas-abiertas-ESO",
        },
        {
          Titulo: "Listado definitivo de candidatos en FP Dual",
          img: "/src/assets/noticias/2021/12/listado-definitivo.jpg",
          alt: "Listado FP Dual",
          Texto:
            "Documentos con el listado provisional de alumnos candidatos a la FP Dual",
          link: "/noticias/candidatosdual",
        },
        {
          Titulo: "Listado de empresas de la FP Dual",
          img: "/src/assets/noticias/2021/11/listado-fpdual-blur.jpg",
          alt: "Listado Empresas",
          Texto:
            "Documento con el listado de empresas colaboradoras de FP Dual para este curso 2021/22.",
          link: "/noticias/empresasdual",
        },
        {
          Titulo: "Información de ayuda para la FP Dual",
          img: "/src/assets/noticias/2021/10/info-fpdual-blur.jpg",
          alt: "Info FP Dual",
          Texto:
            "Documento con toda la información sobre la FP Dual para el curso 2021/22",
          link: "/noticias/informaciondual",
        },
        {
          Titulo: "Inicio de curso 2021/22",
          img: "/src/assets/noticias/2021/09/inicio-curso-blur.jpg",
          alt: "Inicio Curso",
          Texto:
            "Documento con la bienvenida del nuevo curso e instrucciones fundamentales a tener en cuenta por el alumnado y las familias.",
          link: "/noticias/iniciocurso",
        },
        {
          Titulo:
            "Nuevo plazo de admisión en Ciclos de FP: del 07 al 10 de Septiembre",
          img: "/src/assets/noticias/2021/06/fp-online.jpg",
          alt: "Formulario de matrícula",
          Texto:
            "Instrucciones para la admisión en FP en el Centro Salesiano Don Bosco para el curso 2021/22.",
          link: "/noticias/plazodual",
        },
        {
          Titulo: "Vídeo: La evaluación como instrumento de aprendizaje",
          img: "/src/assets/noticias/2021/06/evaluacion.jpg",
          alt: "Formulario de matrícula",
          Texto:
            "Explicamos las estrategias que utilizamos en la evaluación para hacer de ella un ingregiente en favor de la excelencia educativa.",
          link: "/noticias/evaluacion-aprendizaje",
        },
        {
          Titulo: "Vídeo: FP Dual en Telecomunicaciones e Informática",
          img: "/src/assets/noticias/2021/06/fp-dual-video.jpg",
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
          img1: "/src/assets/index/cercanos.jpg",
          alt1: "Cercanos",
          Texto21: "Somos un equipo ilusionado",
          Texto22: "Rebosantes de entusiasmo",
          Texto23: "Creemos en lo que hacemos",
          img2: "/src/assets/index/motivados.jpg",
          alt2: "Motivados",
        },
        {
          Texto11: "Aplicamos metodologías activas",
          Texto12: "Usamos la tecnología en nuestro provecho",
          Texto13: "Aplicamos las mejores técnicas de enseñanza",
          img1: "/src/assets/index/innovadores.jpg",
          alt1: "Innovadores",
          Texto21: "Creemos en lo que hacemos",
          Texto22: "Comprometidos a todos los niveles",
          Texto23: "Educamos en valores",
          img2: "/src/assets/index/implicados.jpg",
          alt2: "Implicados",
        },
      ],
      cursos: [
        {
          Texto: "Educación secundaria obligatoria",
          Titulo: "ESO",
          img: "/src/assets/oferta/info/eso.jpg",
          alt: "ESO",
          route: "/estudios/eso",
        },
        {
          Texto: "Mantenimiento de vehículos",
          Titulo: "FP Básica",
          img: "/src/assets/oferta/info/fpb.jpg",
          alt: "FP",
          route: "/estudios/mantenimiento",
        },
        {
          Texto: "Electromecanica",
          Titulo: "FP Grado Medio",
          img: "/src/assets/oferta/info/electromecanica.jpg",
          alt: "Electromecanica",
          route: "/estudios/electromecanica",
        },
        {
          Texto: "Carrocería",
          Titulo: "FP Grado Medio",
          img: "/src/assets/oferta/info/carroceria.jpg",
          alt: "Carrocería",
          route: "/estudios/carroceria",
        },
        {
          Texto: "Telecomunicaciones",
          Titulo: "FP Grado Medio",
          img: "/src/assets/oferta/info/teleco.jpg",
          alt: "Telecomunicaciones",
          route: "/estudios/telecomunicaciones",
        },
        {
          Texto: "Administración de Sistemas Informáticos en red",
          Titulo: "FP Grado Superior",
          img: "/src/assets/oferta/info/asir.jpg",
          alt: "ASIR",
          route: "/estudios/asir",
        },
      ],
      servicios: [
        {
          Titulo: "PLATAFORMA EDUCAMOS",
          img: "/src/assets/logos/educamos.png",
          link: "https://sso2.educamos.com/Autenticacion/Acceder?ReturnUrl=%2fissue%2fwsfed%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253a%252f%252fdonbosco-salesianos-villamurieldecerrato.educamos.com%252f%26wctx%3drm%253d0%2526id%253dpassive%2526ru%253d%25252f%26wct%3d2017-03-16T07%253a36%253a30Z&wa=wsignin1.0&wtrealm=https%3a%2f%2fdonbosco-salesianos-villamurieldecerrato.educamos.com%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252f&wct=2017-03-16T07%3a36%3a30Z",
        },
        {
          Titulo: "GOOGLE CLASSROOM",
          img: "/src/assets/logos/google-classroom.svg",
          link: "https://accounts.google.com/signin/v2/identifier?service=classroom&passive=1209600&continue=https%3A%2F%2Fclassroom.google.com%2F%3Femr%3D0&followup=https%3A%2F%2Fclassroom.google.com%2F%3Femr%3D0&flowName=GlifWebSignIn&flowEntry=ServiceLogin",
        },
        {
          Titulo: "MICROFOST TEAMS",
          img: "/src/assets/logos/teams.svg",
          link: "https://teams.microsoft.com/_",
        },
        {
          Titulo: "MICROSOFT OFFICE 365",
          img: "/src/assets/logos/office.svg",
          link: "https://www.office.com/login?es=Click&ru=%2F",
        },
        {
          Titulo: "AGENCIA DE COLOCACIÓN",
          img: "/src/assets/logos/casita.svg",
          link: "http://salesianosvillamuriel.redagenciadecolocacion.com/",
        },
      ],
      meritos: [
        {
          Titulo1: "TIC 5",
          img1: "/src/assets/logos/tic5.png",
          alt1: "TIC 5",
          link1: "/centro/tic-5",
          Titulo2: "ERASMUS PLUS",
          img2: "/src/assets/logos/erasmus-plus.png",
          alt2: "ERASMUS PLUS",
          link2: "/centro/erasmus-plus",
        },
        {
          Titulo1: "FP DUAL",
          img1: "/src/assets/logos/dual.svg",
          alt1: "FP DUAL",
          link1: "/centro/fpdual",
          Titulo2: "CENTRO DE EXCELENCIA DE ALTO NIVEL",
          img2: "/src/assets/logos/excelencia.svg",
          alt2: "Centro de Excelencia",
          link2: "/centro/excelencia",
        },
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

.ult-noticias {
  position: absolute;
  top: 120px;
  right: 2em;
  padding: 0 0 1% 0;
  color: #999;
  border: 1px solid #fff;
  font-size: 1em;
  width: 33%;
  background-color: rgba(0, 0, 0, 0.5);
}

.ult-noticias > h2 {
  color: #516260;
  background-color: white;
  margin: 0;
  text-align: center;
}


.texto-inicial {
  position: absolute;
  bottom: 4em;
  left: 2em;
  width: 100%;
  color: white;
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

.fila {
  padding-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fototexto {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fototexto img {
  width: 150px;
  height: 150px;
  margin: 30px;
}

.fila-texto-i {
  text-align: right;
  font-size: 1em;
  font-weight: 300;
}

.fila-texto-d {
  text-align: left;
  font-size: 1em;
  font-weight: 300;
}

.vermas {
  margin: 20px;
}

.vermas span {
  text-align: center;
  background-color: #51626f;
  padding: 1em;
  border-radius: 20px;
  color: #fff;
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
  padding-bottom: 15px;
}

.ser-mer h1 {
  color: rgb(81, 98, 111);
  font-weight: 300;
  font-size: 3em;
}

.fila2 {
  padding-top: 3%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
</style>
