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
import Redes from "../components/redes.vue";
import PiePagina from "../components/footer.vue";
import DerechaPieFoto from "../components/derechapiefoto.vue";
import IzquierdaPieFoto from "../components/izquierdapiefoto.vue";
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
import foto109 from "/src/assets/noticias/2021/06/Autoridades.jpg";
import foto113 from "/src/assets/noticias/2021/06/Diego_01.jpg";
import foto114 from "/src/assets/noticias/2021/06/Eva_01.jpg";
import foto115 from "/src/assets/noticias/2021/06/Benjamin_01.jpg"
import foto116 from "/src/assets/noticias/2021/06/Adrian_01.jpg";
import foto117 from "/src/assets/noticias/2021/06/Pepe_01.jpg"

export default {
  data() {
    return {
      titulos: {
        Titulo1: "Presentación de Proyectos del ciclo de ASIR",
        Titulo2: "Junio 2021",
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
      noticia1: {
        img: foto109,
        alt: "Autoridades",
        Texto1:
          "El paso 3 de Junio los alumnos de 2º curso del ciclo de Administración de Sistemas Informáticos en Red han presentado sus proyectos en el Teatro Jesús de Meneses.",
        Texto2:
          "Agradecemos la presencia del alcalde de Villamuriel de Cerrato D. Roberto Martín Casado así como de nuestro provincial de Salesianos Santiago el Mayor, Fernando García Sánchez.",
        Texto3: "Autoridades presentes en la presentación de proyectos",
      },
      noticia2: {
        img: foto113,
        alt: "Diego Bartolome",
        Texto1:
          "Este año hemos disfrutar de todo tipo de temáticas en los proyectos",
        Texto2:
          "Hemos visto el funcionamiento de una herramienta web para la gestión de personas y permisos dentro de una organización a cargo del alumno Diego Bartolomé Morate creado mediante Laravel y aplicando una metodología Scrum.",
        Texto3: "El alumno Diego Bartolome preparando su presentación",
      },
      noticia3: {
        img: foto114,
        alt: "Eva María Infante",
        Texto1:
          "La robótica y el Internet de las Cosas estaba presente en el proyecto ArduiCar presentado por Eva María Infante Maestro en el que se demostraba el funcionamiento de un robot automóvil con todo tipo de sensores",
        Texto2: "",
        Texto3: "Examinando el 'ArduiCar' de Eva María Infante",
      },
      noticia4: {
        img: foto115,
        alt: "Benjamin Gordo",
        Texto1:
          "El proyecto de ciberseguridad en el que se analizaba las 10 vulnerabilidades web presentes en OWASP Top 10, presentado por Benjamín Gordo Cortés presentaba un análisis profundo y soluciones ante el creciente problema de la seguridad en las aplicaciones web",
        Texto2: "",
        Texto3:
          "Benjamin Gordo presentando su proyecto sobre las vulnerabilidades OWASP Top 10",
      },
      noticia5: {
        img: foto116,
        alt: "Adrian Fitiu",
        Texto1:
          'Hemos disfrutado de la aplicación web lúdica "Más Moneda" creada por Adrián Fitiu mediante la cual los participantes pudieron observar los juegos propuestos en la web para obtener monedas virtuales',
        Texto2: "",
        Texto3: "Adrian Fitiu presentando 'Más Moneda'",
      },
      noticia6: {
        img: foto117,
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
