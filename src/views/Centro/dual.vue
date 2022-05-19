<template>
<menu-navegacion/>
  <div class="fondodual"></div>
  <div class="total">
    <div class="titulo">
      <titulo :titulos="titulos" />
    </div>
    <div class="texto1">
      <br />
      <derecha :contenido="contenido" />
      <documentos :documentos="documentos" :titulo="documentost" />
      <br>
      <div class="fotosdual">
        <fotos :fotos="fotos"/>
      </div>
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
import Redes from "../components/redes.vue";
import Derecha from "./components/derecha.vue";
import PiePagina from "../components/footer.vue"
import Documentos from "../Centro/components/documentos.vue"
import Fotos from "../Centro/components/fotos.vue"
import MenuNavegacion from "../components/nav.vue"
export default {
  data() {
    return {
      titulos: {
        Titulo1: "FP DUAL",
        Titulo2: "Formación en el puesto de trabajo",
      },
      contenido: {
        Titulo: "Los Estudios de Educación Secundaria",
        Texto1:
          "Estamos comprometidos con la formación en FP Dual, cada vez son más empresas las que colaboran con nosotros en este nuevo paradigma de la Formación Profesional.",
        Texto2:
          "Mediante la FP Dual los alumnos aplican en un puesto laboral real los conocimientos aprendidos durante el ciclo y además se siguen formando mediante un programa educativo acordado entre el centro y la empresa",
        Texto3: "",
        img: "/src/assets/logos/dual.svg",
        alt: "FP DUAL",
      },
      documentost: "Documentos sobre FP Dual",
      documentos:[
        {ruta:"https://drive.google.com/file/d/1cTxW6s3ixjW2ca7FEHDhDM2IoRhU_Oky/view",
        foto:"/src/assets/documentos/informacion-fp-dual.png",
        nombre:"Información Fp Dula.pdf"},
        {ruta:"https://drive.google.com/file/d/1Pt6_FsWuU-CTIVfFGUbw-TxYrdvvaMMg/view",
        foto:"/src/assets/documentos/candidatos-fp-dual.png",
        nombre:"Listado Definitivo Candidatos Dual.pdf"},
        {ruta:"https://drive.google.com/file/d/1hzvJPQShRXT2JxUGPDA1xj6PFGp8-28j/view",
        foto:"/src/assets/documentos/empresas-fp-dual.png",
        nombre:"Listado Empresas FP Dual.pdf"},
        {ruta:"https://drive.google.com/file/d/125ihz8I6OYerXUqfZvaiP8ttWf_6HJos/view",
        foto:"/src/assets/documentos/solicitud-fp-dual.png",
        nombre:"Solicitud FP Dual.jpg"},
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
      fotosf:{
        foto1:"/src/assets/mapa.jpg",
        foto2:"/src/assets/logos/tic5.png",
        foto3:"/src/assets/logos/excelencia-marco.svg",
        foto4:"/src/assets/logos/calidad.png",
        foto5:"/src/assets/logos/cisco.png",
        foto6:"/src/assets/logos/ms-reverse.png",
        foto7:"/src/assets/logos/oracle-reverse.png",
        foto8:"/src/assets/logos/vmware.png",
      },
      fotos:[
        {src:"/src/assets/logos/logo-junta.png", alt:"Junta de Castilla y León" , class:"normal"},
        {src:"/src/assets/logos/logo-grande.svg", alt:"Salesianos Villamuriel", class:"salesiano"},
        {src:"/src/assets/logos/europa-impulsa.png", alt:"Europa Impulsa", class:"europa"}
      ]
    };
  },
  components: { Titulo, Redes, Derecha , PiePagina, Documentos, Fotos, MenuNavegacion},
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.fondodual {
  background-image: url("/src/assets/escuela/estudio-dual.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.fotosdual{
  display: flex;
  text-align: center;
}
</style>
