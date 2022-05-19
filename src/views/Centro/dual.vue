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
import foto77 from "/src/assets/logos/dual.svg";
import foto78 from "/src/assets/documentos/informacion-fp-dual.png";
import foto79 from "/src/assets/documentos/candidatos-fp-dual.png";
import foto80 from "/src/assets/documentos/empresas-fp-dual.png";
import foto81 from "/src/assets/documentos/solicitud-fp-dual.png"
import foto82 from "/src/assets/logos/logo-junta.png";
import foto83 from "/src/assets/logos/logo-grande.svg";
import foto84 from "/src/assets/logos/europa-impulsa.png";


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
        img: foto77,
        alt: "FP DUAL",
      },
      documentost: "Documentos sobre FP Dual",
      documentos:[
        {ruta:"https://drive.google.com/file/d/1cTxW6s3ixjW2ca7FEHDhDM2IoRhU_Oky/view",
        foto:foto78,
        nombre:"Información Fp Dula.pdf"},
        {ruta:"https://drive.google.com/file/d/1Pt6_FsWuU-CTIVfFGUbw-TxYrdvvaMMg/view",
        foto:foto79,
        nombre:"Listado Definitivo Candidatos Dual.pdf"},
        {ruta:"https://drive.google.com/file/d/1hzvJPQShRXT2JxUGPDA1xj6PFGp8-28j/view",
        foto:foto80,
        nombre:"Listado Empresas FP Dual.pdf"},
        {ruta:"https://drive.google.com/file/d/125ihz8I6OYerXUqfZvaiP8ttWf_6HJos/view",
        foto:foto81,
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
      fotos:[
        {src:foto82, alt:"Junta de Castilla y León" , class:"normal"},
        {src:foto83, alt:"Salesianos Villamuriel", class:"salesiano"},
        {src:foto84, alt:"Europa Impulsa", class:"europa"}
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
