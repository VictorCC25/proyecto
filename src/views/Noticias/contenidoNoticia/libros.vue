<template>
<menu-navegacion/>
  <div class="fondonoticias"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <documentos :documentos="noticia" :titulo="documentost" />
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
import Documentos from "../components/documentos.vue";
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
import foto93 from "/src/assets/documentos/asir-libros.png";
import foto94 from "/src/assets/documentos/carroceria-libros.png";
import foto95 from "/src/assets/documentos/electro-libros.png";
import foto96 from "/src/assets/documentos/eso-libros.png";
import foto97 from "/src/assets/documentos/fp-libros.png";
import foto98 from "/src/assets/documentos/teleco-libros.png";

export default {
  data() {
    return {
      titulos: {
        Titulo1: "Libros para el Curso 2021-22",
        Titulo2: "Listado de ISBN",
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
      documentost: "Listado por especialidades de los libros para el curso 2021-2022",
      noticia: [
        {
          ruta: "https://drive.google.com/file/d/18udIQ7R3gRRmd8gnqUD9MvvwtF-Pj4sL/view?usp=drive_web",
          foto: foto93,
          nombre: "ASIR-2021-2022.pdf",
        },
        {
          ruta: "https://drive.google.com/file/d/1ZWvnSZUrz9vrN5vbYhFND56Ma7HhLJRh/view",
          foto: foto94,
          nombre: "Carrocería-2021-2022.pdf",
        },
        {
          ruta: "https://drive.google.com/file/d/1DLdMwbKNFlmxGdWYaQ--emz8-rGUBvlK/view",
          foto: foto95,
          nombre: "Electromecánica-2021-2022.pdf",
        },
        {
          ruta: "https://drive.google.com/file/d/1RFaWYjdgiZRzJdFtAzwy0D6luuIdB96c/view",
          foto: foto96,
          nombre: "ESO-2021-2022.pdf",
        },
        {
          ruta: "https://drive.google.com/file/d/1SebDtDw-QsyZDgQL0YB_CnWWQ4_MpjKg/view",
          foto: foto97,
          nombre: "FP-Basica-2021-2022.pdf",
        },
        {
          ruta: "https://drive.google.com/file/d/1BMid1bXIhZmjO2elCy6ACTqT8G8U8u0t/view",
          foto: foto98,
          nombre: "Telecomunicaciones-2021-2022.pdf",
        },
      ],
    };
  },
  components: { Titulo, Redes, PiePagina, Documentos, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
