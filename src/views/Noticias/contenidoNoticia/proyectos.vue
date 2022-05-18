<template>
<menu-navegacion/>
  <div class="fondonoticias"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <derecha-pie-foto :contenido="noticia1" />
      <izquierda-pie-foto :contenido="noticia2" />
      <derecha-pie-foto :contenido="noticia3" />
      <izquierda-pie-foto :contenido="noticia4" />
      <derecha-pie-foto :contenido="noticia5" />
      <izquierda-pie-foto :contenido="noticia6" />
      <p class="noticialarga">
        Damos nuestra enhorabuena a todos ellos y desde aquí auguramos un gran
        futuro en sus trabajos y proyectos futuros
      </p>
      <p class="noticialarga">
        ¡Estamos muy orgullosos de los alumnos de ASIR de la promoción de junio
        de 2021!
      </p>
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
import Redes from "../../components/redes.vue";
import PiePagina from "../../components/footer.vue";
import DerechaPieFoto from "../components/derechapiefoto.vue";
import IzquierdaPieFoto from "../components/izquierdapiefoto.vue";
import MenuNavegacion from "../../components/nav.vue"

export default {
  data() {
    return {
      titulos: {
        Titulo1: "Presentación de Proyectos del ciclo de ASIR",
        Titulo2: "Junio 2021",
      },
      redes: [
        {
          img: "../src/img/iconos/facebook.svg",
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: "../src/img/iconos/twitter.svg",
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: "../src/img/iconos/flickr.svg",
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: "../src/img/iconos/instagram.svg",
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: "../src/img/iconos/youtube.svg",
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf: {
        foto1: "../src/img/mapa.jpg",
        foto2: "../src/img/logos/tic5.png",
        foto3: "../src/img/logos/excelencia-marco.svg",
        foto4: "../src/img/logos/calidad.png",
        foto5: "../src/img/logos/cisco.png",
        foto6: "../src/img/logos/ms-reverse.png",
        foto7: "../src/img/logos/oracle-reverse.png",
        foto8: "../src/img/logos/vmware.png",
      },
      noticia1: {
        img: "../src/img/noticias/2021/06/Autoridades.jpg",
        alt: "Autoridades",
        Texto1:
          "El paso 3 de Junio los alumnos de 2º curso del ciclo de Administración de Sistemas Informáticos en Red han presentado sus proyectos en el Teatro Jesús de Meneses.",
        Texto2:
          "Agradecemos la presencia del alcalde de Villamuriel de Cerrato D. Roberto Martín Casado así como de nuestro provincial de Salesianos Santiago el Mayor, Fernando García Sánchez.",
        Texto3: "Autoridades presentes en la presentación de proyectos",
      },
      noticia2: {
        img: "../src/img/noticias/2021/06/Diego_01.jpg",
        alt: "Diego Bartolome",
        Texto1:
          "Este año hemos disfrutar de todo tipo de temáticas en los proyectos",
        Texto2:
          "Hemos visto el funcionamiento de una herramienta web para la gestión de personas y permisos dentro de una organización a cargo del alumno Diego Bartolomé Morate creado mediante Laravel y aplicando una metodología Scrum.",
        Texto3: "El alumno Diego Bartolome preparando su presentación",
      },
      noticia3: {
        img: "../src/img/noticias/2021/06/Eva_01.jpg",
        alt: "Eva María Infante",
        Texto1:
          "La robótica y el Internet de las Cosas estaba presente en el proyecto ArduiCar presentado por Eva María Infante Maestro en el que se demostraba el funcionamiento de un robot automóvil con todo tipo de sensores",
        Texto2: "",
        Texto3: "Examinando el 'ArduiCar' de Eva María Infante",
      },
      noticia4: {
        img: "../src/img/noticias/2021/06/Benjamin_01.jpg",
        alt: "Benjamin Gordo",
        Texto1:
          "El proyecto de ciberseguridad en el que se analizaba las 10 vulnerabilidades web presentes en OWASP Top 10, presentado por Benjamín Gordo Cortés presentaba un análisis profundo y soluciones ante el creciente problema de la seguridad en las aplicaciones web",
        Texto2: "",
        Texto3:
          "Benjamin Gordo presentando su proyecto sobre las vulnerabilidades OWASP Top 10",
      },
      noticia5: {
        img: "../src/img/noticias/2021/06/Adrian_01.jpg",
        alt: "Adrian Fitiu",
        Texto1:
          'Hemos disfrutado de la aplicación web lúdica "Más Moneda" creada por Adrián Fitiu mediante la cual los participantes pudieron observar los juegos propuestos en la web para obtener monedas virtuales',
        Texto2: "",
        Texto3: "Adrian Fitiu presentando 'Más Moneda'",
      },
      noticia6: {
        img: "../src/img/noticias/2021/06/Pepe_01.jpg",
        alt: "José Navarro",
        Texto1:
          "El alumno José Navarro Roldán presentó una solución virtualizada para el control seguro de acceso a una red WiFi en un dominio controlado por servidores Windows Server y autentificado por Radius",
        Texto2: "",
        Texto3:
          "José Navarro exponiendo las virtudes de su proyecto de acceso seguro a redes WiFi",
      },
    };
  },
  components: {
    Titulo,
    Redes,
    PiePagina,
    DerechaPieFoto,
    IzquierdaPieFoto,
    MenuNavegacion
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.noticialarga {
  font-weight: 300;
  color: #000;
  font-size: 1.8em;
  padding:0 0 1em 1em;
}
</style>
