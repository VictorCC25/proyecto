import { createRouter, createWebHistory } from 'vue-router'
import Portada from '../views/Portada.vue'
import ESO from '../views/Estudios/eso.vue'
import FP from '../views/Estudios/fp.vue'
import Teleco from '../views/Estudios/teleco.vue'
import Carroceria from '../views/Estudios/carroceria.vue'
import Electro from '../views/Estudios/electro.vue'
import ASIR from '../views/Estudios/asir.vue'
import Curriculos from '../views/Servicios/recepcion.vue'
import Matriculacion from '../views/Centro/matriculacion.vue'
import Secretaria from '../views/Centro/secretaría.vue'
import Tic5 from '../views/Centro/tic5.vue'
import Dual from '../views/Centro/dual.vue'
import Erasmus from '../views/Centro/erasmus.vue'
import Excelencia from '../views/Centro/excelencia.vue'
import Metodo from '../views/Centro/metodo.vue'
import Documentos from '../views/Centro/todosdocumentos.vue'
import Lema from '../views/Centro/lema.vue'
import Vision from '../views/Centro/vision.vue'
import Pastoral from '../views/Centro/pastoral.vue'
import Noticias from '../views/Noticias/noticias.vue'
import AdmisionESO from '../views/Noticias/contenidoNoticia/admisionESO.vue'
import VideoExcelencia from '../views/Noticias/contenidoNoticia/centroexcelencia.vue'
import CandidatosDual from '../views/Noticias/contenidoNoticia/candidatosdual.vue'
import EmpresasDual from '../views/Noticias/contenidoNoticia/empresasdual.vue'
import InformacionDual from '../views/Noticias/contenidoNoticia/informaciondual.vue'
import InicioCurso from '../views/Noticias/contenidoNoticia/iniciocurso.vue'
import PlazoDual from '../views/Noticias/contenidoNoticia/plazodual.vue'
import AdmisionDual from '../views/Noticias/contenidoNoticia/admisiondual.vue'
import Proyectos from '../views/Noticias/contenidoNoticia/proyectos.vue'
import finalesjunio from '../views/Noticias/contenidoNoticia/finales-junio.vue'
import dualmedios from '../views/Noticias/contenidoNoticia/dualmedios.vue'
import SomosExcelencia from '../views/Noticias/contenidoNoticia/somosexcelencia.vue'
import Libros from '../views/Noticias/contenidoNoticia/libros.vue'
import PuertasEso from '../views/Noticias/contenidoNoticia/puertasbiertasESO.vue'
import EvaluacionESO from '../views/Noticias/contenidoNoticia/evaluacionaprendizaje.vue'
import DualTeleco from '../views/Noticias/contenidoNoticia/dualteleco.vue'
import PremioVMWare from '../views/Noticias/contenidoNoticia/premiovmw.vue'
import Literatura from '../views/Noticias/contenidoNoticia/literatura.vue'
import Heroes from '../views/Noticias/contenidoNoticia/heroes.vue'
import PuertasAbiertas from '../views/Noticias/contenidoNoticia/puertasabiertas.vue'
import Politica from '../views/politica.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Incio',
      component: Portada
    },
    {
      path: '/politica',
      name: 'Politica',
      component: Politica
    },
    {
      path: '/estudios/eso',
      name: 'Educación Secuendaria Obligatoria',
      component: ESO
    },
    {
      path: '/estudios/mantenimiento',
      name: 'Formación Profesional Básica',
      component: FP
    },
    {
      path: '/estudios/telecomunicaciones',
      name: 'Grado Medio Telecomunicaciones',
      component: Teleco
    },
    {
      path: '/estudios/carroceria',
      name: 'Grado Medio Carroceria',
      component: Carroceria
    },
    {
      path: '/estudios/electromecanica',
      name: 'Grado Medio Electromecanica',
      component: Electro
    },
    {
      path : '/estudios/asir',
      name : 'Grado Superior ASIR',
      component: ASIR
    },
    {
      path: '/servicios/curriculos',
      name : 'Recepcion de Curriculos',
      component : Curriculos
    },
    {
      path: '/centro/matriculacionESO',
      name: 'Matriculacion ESO',
      component: Matriculacion
    },
    {
      path: '/centro/secretaria',
      name: 'Documentos Secretaría',
      component: Secretaria
    },
    {
      path: '/centro/tic-5',
      name: 'Tic 5',
      component: Tic5
    },
    {
      path: '/centro/fpdual',
      name: 'FP DUAL',
      component: Dual
    },
    {
      path: '/centro/erasmus-plus',
      name: 'Erasmus Plus',
      component: Erasmus
    },
    {
      path: '/centro/excelencia',
      name: 'Excelencia',
      component: Excelencia
    },
    {
      path: '/centro/metodo',
      name: 'Metodo',
      component: Metodo
    },
    {
      path: '/centro/documentos',
      name: 'Documentos',
      component: Documentos
    },
    {
      path: '/centro/lema',
      name: 'Lema',
      component: Lema
    },
    {
      path: '/centro/vision',
      name: 'Vision',
      component: Vision
    },
    {
      path: '/centro/pastoral',
      name: 'Pastoral',
      component: Pastoral
    },
    {
      path: '/noticias',
      name: 'Noticias',
      component: Noticias
    },
    {
      path: '/noticias/admisionESO',
      name: 'Admision ESO',
      component: AdmisionESO
    },
    {
      path: '/noticias/excelencia',
      name: 'Video Excelencia',
      component: VideoExcelencia
    },
    {
      path: '/noticias/candidatosdual',
      name: 'Candidatos FP Dual',
      component: CandidatosDual
    },
    {
      path: '/noticias/empresasdual',
      name: 'Empresas FP Dual',
      component: EmpresasDual
    },
    {
      path: '/noticias/informaciondual',
      name: 'Informacion FP Dual',
      component: InformacionDual
    },
    {
      path: '/noticias/iniciocurso',
      name: 'Inicio Curso',
      component: InicioCurso
    },
    {
      path: '/noticias/plazodual',
      name: 'Plazo Dual',
      component: PlazoDual
    },
    {
      path: '/noticias/admisiondual',
      name: 'Admision Dual',
      component: AdmisionDual
    },
    {
      path: '/noticias/proyectos',
      name: 'Proyectos',
      component: Proyectos
    },
    {
      path: '/noticias/finales-junio',
      name: 'Finales Junio',
      component: finalesjunio
    },
    {
      path: '/noticias/fp-dual-comienzo',
      name: 'Comienzo FP Dual',
      component: dualmedios
    },
    {
      path: '/noticias/somos-excelencia',
      name: 'Somos Centro Excelencia',
      component: SomosExcelencia
    },
    {
      path: '/noticias/libros',
      name: 'Libros',
      component: Libros
    },
    {
      path: '/noticias/puertas-abiertas-ESO',
      name: 'Puertas Abiertas ESO',
      component: PuertasEso
    },
    {
      path: '/noticias/evaluacion-aprendizaje',
      name: 'Evaluacion Aprendizaje',
      component: EvaluacionESO
    },
    {
      path: '/noticias/dual-teleco',
      name: 'FP Dual Teleco',
      component: DualTeleco
    },
    {
      path: '/noticias/premio-vmware',
      name: 'Premio VM Ware',
      component: PremioVMWare
    },
    {
      path: '/noticias/literatura',
      name: 'Literatura',
      component: Literatura
    },
    {
      path: '/noticias/heroes',
      name: 'Heroes',
      component: Heroes
    },
    {
      path: '/noticias/puertas-abiertas',
      name: 'Puertas Abiertas',
      component: PuertasAbiertas
    },
  ]
})

export default router
