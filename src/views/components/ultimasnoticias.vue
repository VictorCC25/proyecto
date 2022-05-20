<template>
  <el-aside class="ult-noticias">
    <h2>ÚLTIMAS NOTICIAS</h2>
    <div class="div-noticias">
    <router-link to="/noticias/admisionESO" class="link"><p>Periodo de admisiones ESO</p></router-link>
    <router-link to="/noticias/excelencia" class="link"><p>Cento de Excelencia Profesional</p></router-link>
    <router-link to="/noticias/puertas-abiertas-ESO" class="link"><p>Jornada de puertas abiertas para ESO</p></router-link>
    <router-link to="/noticias/candidatosdual" class="link"><p>Listado definitivo de candidatos en FP Dual</p></router-link>
    </div>
  </el-aside>
  <el-aside class="texto-inicial">
    <h1>Excelencia adapada</h1>
    <h1>a cada estudiante</h1>
    <p>En busca permanente de nuevos caminos que permitan el exito educativo</p>
  </el-aside>
</template>
<script>
export default {
  name: "ultimasNoticias",
};
</script>
<style>
.div-noticias{
  padding-left: 1em;
}
a{
  color: #999;
}
a:visited{
  color: #999;
}

.div-noticias > a:hover{
  color: #fff;
}

.texto-inicial h1 {
  font-weight: 300;
  font-size: 3em;
}
.texto-inicial p {
  font-weight: 300;
  font-size: 2em;
}
</style>
