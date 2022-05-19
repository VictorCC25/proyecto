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

export default {
  data() {
    return {
      titulos: {
        Titulo1: "Libros para el Curso 2021-22",
        Titulo2: "Listado de ISBN",
      },
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
      documentost: "Listado por especialidades de los libros para el curso 2021-2022",
      noticia: [
        {
          ruta: "https://drive.google.com/file/d/18udIQ7R3gRRmd8gnqUD9MvvwtF-Pj4sL/view?usp=drive_web",
          foto: "/src/assets/documentos/asir-libros.png",
          nombre: "ASIR-2021-2022.pdf",
        },
        {
          ruta: "https://drive.google.com/file/d/1ZWvnSZUrz9vrN5vbYhFND56Ma7HhLJRh/view",
          foto: "/src/assets/documentos/carroceria-libros.png",
          nombre: "Carrocería-2021-2022.pdf",
        },
        {
          ruta: "https://drive.google.com/file/d/1DLdMwbKNFlmxGdWYaQ--emz8-rGUBvlK/view",
          foto: "/src/assets/documentos/electro-libros.png",
          nombre: "Electromecánica-2021-2022.pdf",
        },
        {
          ruta: "https://drive.google.com/file/d/1RFaWYjdgiZRzJdFtAzwy0D6luuIdB96c/view",
          foto: "/src/assets/documentos/eso-libros.png",
          nombre: "ESO-2021-2022.pdf",
        },
        {
          ruta: "https://drive.google.com/file/d/1SebDtDw-QsyZDgQL0YB_CnWWQ4_MpjKg/view",
          foto: "/src/assets/documentos/fp-libros.png",
          nombre: "FP-Basica-2021-2022.pdf",
        },
        {
          ruta: "https://drive.google.com/file/d/1BMid1bXIhZmjO2elCy6ACTqT8G8U8u0t/view",
          foto: "/src/assets/documentos/teleco-libros.png",
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
