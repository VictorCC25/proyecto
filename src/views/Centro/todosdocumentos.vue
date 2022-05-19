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
import foto99 from "/src/assets/documentos/campaña-2021-22.png";
import foto100 from "/src/assets/documentos/informacion-fp-dual.png";
import foto101 from "/src/assets/documentos/candidatos-fp-dual.png";
import foto102 from "/src/assets/documentos/empresas-fp-dual.png";
import foto103 from "/src/assets/documentos/solicitud-fp-dual.png";

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
          foto:foto93,
          nombre:"ASIR-2021-2022.pdf"},
          {ruta:"https://drive.google.com/file/d/1ZWvnSZUrz9vrN5vbYhFND56Ma7HhLJRh/view",
          foto:foto94,
          nombre:"Carrocería-2021-2022.pdf"
          },
          {ruta:"https://drive.google.com/file/d/1DLdMwbKNFlmxGdWYaQ--emz8-rGUBvlK/view",
          foto:foto95,
          nombre:"Electromecánica-2021-2022.pdf"
          },
          {ruta:"https://drive.google.com/file/d/1RFaWYjdgiZRzJdFtAzwy0D6luuIdB96c/view",
          foto:foto96,
          nombre:"ESO-2021-2022.pdf"
          },
          {ruta:"https://drive.google.com/file/d/1SebDtDw-QsyZDgQL0YB_CnWWQ4_MpjKg/view",
          foto:foto97,
          nombre:"FP-Basica-2021-2022.pdf"
          },
          {ruta:"https://drive.google.com/file/d/1BMid1bXIhZmjO2elCy6ACTqT8G8U8u0t/view",
          foto:foto98,
          nombre:"Telecomunicaciones-2021-2022.pdf"
          },
      ],
      documentost2: "Documentos sobre campañas y pastoral",
      documentos2:[
        {ruta:"https://drive.google.com/file/d/14iRsS6JqdN_hk2MvWBdjSh51wrSo3XDI/view",
          foto:foto99,
          nombre:"Campaña-Pastoral-2021-2022.pdf"},
      ],
      documentost3: "Documentos sobre FP Dual",
      documentos3:[
        {ruta:"https://drive.google.com/file/d/1cTxW6s3ixjW2ca7FEHDhDM2IoRhU_Oky/view",
        foto:foto100,
        nombre:"Información Fp Dula.pdf"},
        {ruta:"https://drive.google.com/file/d/1Pt6_FsWuU-CTIVfFGUbw-TxYrdvvaMMg/view",
        foto:foto101,
        nombre:"Listado Definitivo Candidatos Dual.pdf"},
        {ruta:"https://drive.google.com/file/d/1hzvJPQShRXT2JxUGPDA1xj6PFGp8-28j/view",
        foto: foto102,
        nombre:"Listado Empresas FP Dual.pdf"},
        {ruta:"https://drive.google.com/file/d/125ihz8I6OYerXUqfZvaiP8ttWf_6HJos/view",
        foto:foto103,
        nombre:"Solicitud FP Dual.jpg"},
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
  components: { Titulo, documentos, Redes, PiePagina,MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
