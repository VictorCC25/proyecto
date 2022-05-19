<template>
<menu-navegacion/>
  <div class="grandemetodo">
    <h1>Nuestro método educativo</h1>
  </div>
  <div
    class="sticky"
    style="background-image: url('./assets/escuela/proyecto1.jpg')"
  ></div>
  <div class="titulosticky">
    <h2>Aprendizaje basado en proyectos</h2>
  </div>
  <div class="textosticky">
    <p>
      Creemos en las metodologías basadas en el aprendizaje basado en retos y
      tareas
    </p>
    <p>Las metodologías activas son la base de nuestra trabajo educativo</p>
  </div>
  <div
    class="sticky"
    style="background-image: url('./assets/escuela/1a1.jpg')"
  ></div>
  <div class="titulosticky">
    <h2>Somos un centro muy TIC</h2>
  </div>
  <div class="textosticky">
    <p>
      Es una de nuestras señas de identidad: hacemos un uso inteligente de la
      tecnología en apoyo de la enseñanza
    </p>
    <p>
      Cada alumno dispone de su propio dispositivo preparado exclusivamente para
      el aprendizaje
    </p>
  </div>
  <div
    class="sticky"
    style="background-image: url('./assets/escuela/lazo.jpeg')"
  ></div>
  <div class="titulosticky">
    <h2>Educamos en valores</h2>
  </div>
  <div class="textosticky">
    <p>
      Trabajamos en pro de la igualdad, solidaridad y respeto de los seres
      humanos sea cual sea su creencia, sexo, origen y posición social
    </p>
    <p>
      Transmitimos un modo de vida vocacional impulsando un sentido ético de la
      misma
    </p>
  </div>
  <div
    class="sticky"
    style="background-image: url('./assets/escuela/familias.jpg')"
  ></div>
  <div class="titulosticky">
    <h2>Trabajamos con las familias</h2>
  </div>
  <div class="textosticky">
    <p>
      Nuestra cercanía se extiende a las familias, buscamos un trato directo
    </p>
    <p>
      Nuestro proyecto educativo busca una implicación directa y coordinada
      entre familias y equipo educativo
    </p>
  </div>
  <div
    class="sticky"
    style="background-image: url('./assets/escuela/como-casa.jpg')"
  ></div>
  <div class="titulosticky">
    <h2>Orgullosos de nuestra identidad</h2>
  </div>
  <div class="textosticky">
    <p>
      Somos un centro cristiano y fomentamos un sentido trascendente de la vida
    </p>
    <p>
      Somos un centro salesiano lo que coloca en el centro de nuestro trabajo a
      la inclusión social de los jóvenes
    </p>
  </div>
  <div class="redes">
    <redes :redes="redes" />
  </div>
  <div class="footer">
    <pie-pagina :fotos="fotosf" />
  </div>
</template>
<script>
import Redes from "../components/redes.vue";
import PiePagina from "../components/footer.vue";
import MenuNavegacion from "../components/nav.vue"
export default {
  data() {
    return {
      redes: [
        {
          img: "./assets/iconos/facebook.svg",
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: "./assets/iconos/twitter.svg",
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: "./assets/iconos/flickr.svg",
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: "./assets/iconos/instagram.svg",
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: "./assets/iconos/youtube.svg",
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf: {
        foto1: "./assets/mapa.jpg",
        foto2: "./assets/logos/tic5.png",
        foto3: "./assets/logos/excelencia-marco.svg",
        foto4: "./assets/logos/calidad.png",
        foto5: "./assets/logos/cisco.png",
        foto6: "./assets/logos/ms-reverse.png",
        foto7: "./assets/logos/oracle-reverse.png",
        foto8: "./assets/logos/vmware.png",
      },
    };
  },
  components: { Redes, PiePagina, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.grandemetodo {
  position: relative;
  height: 100vh;
  background: transparent 50% no-repeat fixed;
  background-size: cover;
  text-align: center;
  background-image: url("./assets/escuela/idea.jpg");
}
.grandemetodo h1 {
  font-weight: 700;
  font-size: 4em;
  color: #fff;
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
}
.sticky {
  position: sticky;
  top: 40px;
  background: #2e2e2e no-repeat 50%;
  background-size: cover;
  height: 100vh;
  padding: 0.5em 0 0;
}
.titulosticky {
  height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 60px;
  position: sticky;
  font-size: 3em;
  color: #fff;
  text-align: center;
}
.textosticky {
  height: 100vh;
  position: sticky;
  top: 250px;
  width: 50%;
  margin-left: 45%;
}
.textosticky > p {
  font-weight: 300;
  font-size: 1.75em;
  color: #fff;
  text-align: right;
  margin: 0 4em 1em 10%;
  font-style: italic;
  background-color: rgba(81, 98, 111, 0.5);
}
</style>
