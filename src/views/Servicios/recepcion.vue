<template>
<menu-navegacion/>
  <div class="fondorecepcion"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <derecha :contenido="contenido1" />
    </div>
  </div>
  <div class="redes">
    <redes :redes="redes" />
  </div>
  <div class="footer">
      <pie-pagina :fotos="fotosf"/>
    </div>
</template>
<script>
import Titulo from "./components/titulo.vue";
import Derecha from "./components/derecha.vue";
import Redes from "../components/redes.vue"
import PiePagina from "../components/footer.vue"
import MenuNavegacion from "../components/nav.vue"
export default {
  data() {
    return {
      titulos: { Titulo1: "Serivicio CuCo", Titulo2: "Recepción de Curriculum Vitae"},
      contenido1: {
        Titulo: "¿Qué es el Servicio CuCo?",
        Texto1:
          "Si quieres trabajar con nosotros, esta es tu sección.",
        Texto2:
          "Hemos creado una herramienta (CuCo, Currículos Comunes) para recoger los currículos de las personas interesadas en trabajar con nosotros.",
        Texto3:
          "Si quieres enviarnos tu currículo, puedes acceder a esta herramienta desde el siguiente enlace: ",
        Texto4:"Formulario de Bolsa de empleo, Inspectoría Salesiana Santiago el Mayor",
        link:"https://forms.gle/Bt6nvG97gxPiX9j48",
        img: "/src/img/escuela/CV_salesianos_02.png",
        alt: "Telecomunicaciones",
      },
      redes: [
        { img: "/src/img/iconos/facebook.svg", alt: "Facebook" ,class:"Facebook",
        link:"https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/"},
        { img: "/src/img/iconos/twitter.svg", alt: "Twitter" , class:"Twitter",
        link:"https://twitter.com/centrodonbosco"},
        { img: "/src/img/iconos/flickr.svg", alt: "Flickr", class:"Flickr",
        link:"https://www.flickr.com/photos/58942531@N04/"},
        { img: "/src/img/iconos/instagram.svg", alt: "Instagram", class:"Instagram",
        link:"https://www.instagram.com/salesianosvillamuriel/"},
        { img: "/src/img/iconos/youtube.svg", alt: "YouTube", class:"YouTube",
        link:"https://www.youtube.com/user/donboscovillamuriel"},
      ],
      fotosf:{
        foto1:"/src/img/mapa.jpg",
        foto2:"/src/img/logos/tic5.png",
        foto3:"/src/img/logos/excelencia-marco.svg",
        foto4:"/src/img/logos/calidad.png",
        foto5:"/src/img/logos/cisco.png",
        foto6:"/src/img/logos/ms-reverse.png",
        foto7:"/src/img/logos/oracle-reverse.png",
        foto8:"/src/img/logos/vmware.png",
      }
    };
  },
  components: { Titulo, Derecha, Redes, PiePagina, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
    Modulost>
<style>
.fondorecepcion{
  background-image: url("/src/img/fondos/paper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.lista1{
  position: relative;
  background-color: rgb(217, 217, 217);
}
.lista1>h1{
    text-align: center;
}

</style>