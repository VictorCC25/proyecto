<template>
<menu-navegacion/>
  <div class="fondodocumentos"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <documentos :documentos="documentos1" :titulo="documentost1" />
      <br>
      <documentos :documentos="documentos2" :titulo="documentost2" />
      <br>
      <documentos :documentos="documentos3" :titulo="documentost3" />
    </div>
    <div class="redes">
      <redes :redes="redes" />
    </div>
    <div class="footer">
      <pie-pagina :fotos="fotosf"/>
    </div>
  </div>
</template>
<script>
import Titulo from "./components/titulo.vue";
import documentos from "./components/documentos.vue";
import Redes from "../components/redes.vue";
import PiePagina from "../components/footer.vue"
import MenuNavegacion from "../components/nav.vue"

export default {
  data() {
    return {
      titulos: {
        Titulo1: "DOCUMENTOS",
        Titulo2: "",
      },
      documentost1: "Documentos generales del centro",
      documentos1: [
          {ruta:"https://drive.google.com/file/d/18udIQ7R3gRRmd8gnqUD9MvvwtF-Pj4sL/view?usp=drive_web",
          foto:"../../src/img/documentos/asir-libros.png",
          nombre:"ASIR-2021-2022.pdf"},
          {ruta:"https://drive.google.com/file/d/1ZWvnSZUrz9vrN5vbYhFND56Ma7HhLJRh/view",
          foto:"../../src/img/documentos/carroceria-libros.png",
          nombre:"Carrocería-2021-2022.pdf"
          },
          {ruta:"https://drive.google.com/file/d/1DLdMwbKNFlmxGdWYaQ--emz8-rGUBvlK/view",
          foto:"../../src/img/documentos/electro-libros.png",
          nombre:"Electromecánica-2021-2022.pdf"
          },
          {ruta:"https://drive.google.com/file/d/1RFaWYjdgiZRzJdFtAzwy0D6luuIdB96c/view",
          foto:"../../src/img/documentos/eso-libros.png",
          nombre:"ESO-2021-2022.pdf"
          },
          {ruta:"https://drive.google.com/file/d/1SebDtDw-QsyZDgQL0YB_CnWWQ4_MpjKg/view",
          foto:"../../src/img/documentos/fp-libros.png",
          nombre:"FP-Basica-2021-2022.pdf"
          },
          {ruta:"https://drive.google.com/file/d/1BMid1bXIhZmjO2elCy6ACTqT8G8U8u0t/view",
          foto:"../../src/img/documentos/teleco-libros.png",
          nombre:"Telecomunicaciones-2021-2022.pdf"
          },
      ],
      documentost2: "Documentos sobre campañas y pastoral",
      documentos2:[
        {ruta:"https://drive.google.com/file/d/14iRsS6JqdN_hk2MvWBdjSh51wrSo3XDI/view",
          foto:"../../src/img/documentos/campaña-2021-22.png",
          nombre:"Campaña-Pastoral-2021-2022.pdf"},
      ],
      documentost3: "Documentos sobre FP Dual",
      documentos3:[
        {ruta:"https://drive.google.com/file/d/1cTxW6s3ixjW2ca7FEHDhDM2IoRhU_Oky/view",
        foto:"../../src/img/documentos/informacion-fp-dual.png",
        nombre:"Información Fp Dula.pdf"},
        {ruta:"https://drive.google.com/file/d/1Pt6_FsWuU-CTIVfFGUbw-TxYrdvvaMMg/view",
        foto:"../../src/img/documentos/candidatos-fp-dual.png",
        nombre:"Listado Definitivo Candidatos Dual.pdf"},
        {ruta:"https://drive.google.com/file/d/1hzvJPQShRXT2JxUGPDA1xj6PFGp8-28j/view",
        foto:"../../src/img/documentos/empresas-fp-dual.png",
        nombre:"Listado Empresas FP Dual.pdf"},
        {ruta:"https://drive.google.com/file/d/125ihz8I6OYerXUqfZvaiP8ttWf_6HJos/view",
        foto:"../../src/img/documentos/solicitud-fp-dual.png",
        nombre:"Solicitud FP Dual.jpg"},
      ],
      redes: [
        {
          img: "../../src/img/iconos/facebook.svg",
          alt: "Facebook",
          class: "Facebook",
          link: "https://www.facebook.com/people/Salesianos-Villamuriel-Palencia/100057348163856/",
        },
        {
          img: "../../src/img/iconos/twitter.svg",
          alt: "Twitter",
          class: "Twitter",
          link: "https://twitter.com/centrodonbosco",
        },
        {
          img: "../../src/img/iconos/flickr.svg",
          alt: "Flickr",
          class: "Flickr",
          link: "https://www.flickr.com/photos/58942531@N04/",
        },
        {
          img: "../../src/img/iconos/instagram.svg",
          alt: "Instagram",
          class: "Instagram",
          link: "https://www.instagram.com/salesianosvillamuriel/",
        },
        {
          img: "../../src/img/iconos/youtube.svg",
          alt: "YouTube",
          class: "YouTube",
          link: "https://www.youtube.com/user/donboscovillamuriel",
        },
      ],
      fotosf:{
        foto1:"../../src/img/mapa.jpg",
        foto2:"../../src/img/logos/tic5.png",
        foto3:"../../src/img/logos/excelencia-marco.svg",
        foto4:"../../src/img/logos/calidad.png",
        foto5:"../../src/img/logos/cisco.png",
        foto6:"../../src/img/logos/ms-reverse.png",
        foto7:"../../src/img/logos/oracle-reverse.png",
        foto8:"../../src/img/logos/vmware.png",
      }
    };
  },
  components: { Titulo, documentos, Redes, PiePagina,MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
