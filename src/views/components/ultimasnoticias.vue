<template>
  <el-aside class="ult-noticias">
    <h2>ÚLTIMAS NOTICIAS</h2>
    <div class="div-noticias">
      <router-link to="/noticias/admisionESO" class="link">
        <p>Periodo de admisiones ESO</p></router-link
      >
      <router-link to="/noticias/excelencia" class="link"
        ><p>Cento de Excelencia Profesional</p></router-link
      >
      <router-link to="/noticias/puertas-abiertas-ESO" class="link"
        ><p>Jornada de puertas abiertas para ESO</p></router-link
      >
      <router-link to="/noticias/candidatosdual" class="link"
        ><p>Listado definitivo de candidatos en FP Dual</p></router-link
      >
    </div>
  </el-aside>
  <el-aside class="texto-inicial">
    <h1>Excelencia adaptada</h1>
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
.ult-noticias {
  position: absolute;
  top: 120px;
  right: 2em;
  padding: 0 0 1% 0;
  color: #999;
  border: 1px solid #fff;
  font-size: 1em;
  width: 33%;
  background-color: rgba(0, 0, 0, 0.5);
}

.ult-noticias > h2 {
  color: #516260;
  background-color: white;
  margin: 0;
  text-align: center;
}
.div-noticias {
  padding-left: 1em;
}
a {
  color: #999;
}
a:visited {
  color: #999;
}

.div-noticias > a:hover {
  color: #fff;
}

.texto-inicial {
  position: absolute;
  bottom: 4em;
  left: 2em;
  width: 100%;
  color: white;
}

.texto-inicial > h1 {
  font-weight: 300;
  font-size: 3em;
}
.texto-inicial > p {
  font-weight: 300;
  font-size: 2em;
}
@media screen and (max-width: 768px) {
  .ult-noticias{
    display: block;
    position: absolute;
    left: 2%;
    width: 60%;
    margin-left: 5px;
  }
  
  .texto-inicial > h1 {
    font-size: 2em;
  }
   .texto-inicial > p {
    font-size: 1.5em;
  }
}
@media screen and (max-width: 425px) {
  .ult-noticias{
    position: absolute;
    left: 2%;
    width: 92%;
  }
  .texto-inicial{
    left: 1em;
  }
  .texto-inicial > h1 {
    font-size: 2em;
  }
   .texto-inicial > p {
    font-size: 1.5em;
  }
}
</style>
