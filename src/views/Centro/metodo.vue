<template>
<menu-navegacion/>
  <div class="grandemetodo">
    <h1>Nuestro método educativo</h1>
  </div>
  <div
    class="sticky fondo1"
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
    class="sticky fondo2"
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
    class="sticky fondo3"
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
    class="sticky fondo4"
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
    class="sticky fondo5"
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
import MenuNavegacion from "../components/nav.vue";
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
  background-image: url("/src/assets/escuela/idea.jpg");
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

.fondo1{
  background-image: url('/src/assets/escuela/proyecto1.jpg')
}

.fondo2{
  background-image: url('/src/assets/escuela/1a1.jpg')
}

.fondo3{
 background-image: url('/src/assets/escuela/lazo.jpeg')
}

.fondo4{
  background-image: url('/src/assets/escuela/familias.jpg')
}

.fondo5{
  background-image: url('/src/assets/escuela/como-casa.jpg')
}
</style>
