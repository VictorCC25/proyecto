<template>
  <el-header class="header">
    <div class="logo">
      <router-link to="/">
        <img
          alt="Logo del centro"
          class="logo"
          src="/src/assets/img/logos/logo-grande.svg"
        />
      </router-link>
    </div>
    <div class="navigation-menu">
      <el-menu :default-active="activeIndex" mode="horizontal">
        <el-sub-menu index="1">
          <template #title>ESTUDIOS</template>
          <el-sub-menu index="1-1">
            <template #title>EDUCACIÓN SECUNDARIA OBLIGATORIA</template>
            <router-link to="/estudios/eso"
              ><el-menu-item index="1-1-1">ESO</el-menu-item></router-link
            >
          </el-sub-menu>
          <el-sub-menu index="1-2">
            <template #title>FORMACIÓN PROFESIONAL BÁSICA (FPB)</template>
            <router-link to="/estudios/mantenimiento"
              ><el-menu-item index="1-2-1"
                >MANTENIMIENTO DE VEHíCULOS</el-menu-item
              ></router-link
            >
          </el-sub-menu>
          <el-sub-menu index="1-3">
            <template #title>FORMACIÓN PROFESIONAL DE GRADO MEDIO</template>
            <router-link to="/estudios/carroceria"
              ><el-menu-item index="1-3-1"
                >CARROCERIA</el-menu-item
              ></router-link
            >
            <router-link to="/estudios/electromecanica"
              ><el-menu-item index="1-3-2"
                >ELECTROMECANICA DE VEHíCULOS</el-menu-item
              ></router-link
            >
            <router-link to="/estudios/telecomunicaciones"
              ><el-menu-item index="1-3-3"
                >TELECOMUNICACIONES</el-menu-item
              ></router-link
            >
          </el-sub-menu>
          <el-sub-menu index="1-4">
            <template #title>FORMACIÓN PROFESIONAL DE GRADO SUPERIOR</template>
            <router-link to="/estudios/asir"
              ><el-menu-item index="1-4-1">ASIR</el-menu-item></router-link
            >
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>CENTRO</template>
          <el-sub-menu index="2-1">
            <template #title>SECRETARíA</template>
            <!-- <el-link href="https://view.genial.ly/604f2b63d1a43d0d17b3820e"><el-menu-item index="2-1-1">INFORMACIÓN SOBRE MATRICULACIÓN</el-menu-item></el-link> -->
            <router-link to="/centro/matriculacionESO"
              ><el-menu-item index="2-1-1"
                >INFORMACIÓN SOBRE MATRICULACIÓN</el-menu-item
              ></router-link
            >
            <router-link to="/centro/secretaria"
              ><el-menu-item index="2-1-2"
                >DOCUMENTOS DE SECRETARíA</el-menu-item
              ></router-link
            >
          </el-sub-menu>
          <el-sub-menu index="2-2">
            <template #title>PROGRAMAS</template>
            <router-link to="/centro/fpdual"
              ><el-menu-item index="2-2-1">FP DUAL</el-menu-item></router-link
            >
            <router-link to="/centro/erasmus-plus"
              ><el-menu-item index="2-2-2"
                >PROGRAMA ERASMUS</el-menu-item
              ></router-link
            >
            <router-link to="/centro/excelencia"
              ><el-menu-item index="2-2-3"
                >CENTRO DE EXCELENCIA DE ALTO NIVEL</el-menu-item
              ></router-link
            >
          </el-sub-menu>
          <el-sub-menu index="2-3">
            <template #title>NUESTRA ESCUELA</template>
            <router-link to="/centro/metodo"
              ><el-menu-item index="2-3-1"
                >NUESTRO MÉTODO EDUCATIVO</el-menu-item
              ></router-link
            >
            <router-link to="/centro/documentos"
              ><el-menu-item index="2-3-2"
                >DOCUMENTOS</el-menu-item
              ></router-link
            >
          </el-sub-menu>
          <el-sub-menu index="2-4">
            <template #title>NUESTROS VALORES</template>
            <router-link to="/centro/lema"
              ><el-menu-item index="2-4-1"
                >LEMA DEL CURSO</el-menu-item
              ></router-link
            >
            <router-link to="/centro/vision"
              ><el-menu-item index="2-4-2"
                >MISIÓN,VISION Y VALORES</el-menu-item
              ></router-link
            >
            <router-link to="/centro/pastoral"
              ><el-menu-item index="2-4-3">PASTORAL</el-menu-item></router-link
            >
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>SERVICIOS</template>
          <el-sub-menu index="3-1">
            <template #title>NUESTROS SERVICIOS</template>
            <el-menu-item index="3-1-1">
              <el-link
                href="https://sso2.educamos.com/Autenticacion/Acceder?ReturnUrl=%2fissue%2fwsfed%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253a%252f%252fdonbosco-salesianos-villamurieldecerrato.educamos.com%252f%26wctx%3drm%253d0%2526id%253dpassive%2526ru%253d%25252f%26wct%3d2017-03-16T07%253a36%253a30Z&wa=wsignin1.0&wtrealm=https%3a%2f%2fdonbosco-salesianos-villamurieldecerrato.educamos.com%2f&wctx=rm%3d0%26id%3dpassive%26ru%3d%252f&wct=2017-03-16T07%3a36%3a30Z"
              >
                EDUCAMOS</el-link
              >
            </el-menu-item>
            <el-menu-item index="3-1-2">
              <el-link
                href="https://accounts.google.com/signin/v2/identifier?service=classroom&passive=1209600&continue=https%3A%2F%2Fclassroom.google.com%2F%3Femr%3D0&followup=https%3A%2F%2Fclassroom.google.com%2F%3Femr%3D0&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
              >
                GOOGLE CLASSROOM</el-link
              >
            </el-menu-item>
            <el-menu-item index="3-1-3">
              <el-link href="https://teams.microsoft.com/_">
                MICROSOFT OFFICE 365</el-link
              >
            </el-menu-item>
            <el-menu-item index="3-1-4">
              <el-link href="https://www.office.com/login?es=Click&ru=%2F">
                MICROSOFT TEAMS</el-link
              >
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3-2">
            <template #title>OTROS SERVICIOS</template>
            <el-menu-item index="3-2-1">
              <el-link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdUXOK-3Jdzzq0KaF2su2i-6E8nhK4b68k0tqSceIiw38x1_g/viewform"
                >SUGERENCIAS</el-link
              >
            </el-menu-item>
            <el-menu-item index="3-2-2">
              <el-link
                href="http://salesianosvillamuriel.redagenciadecolocacion.com/"
                >AGENCIAS DE COLOCACIÓN</el-link
              >
            </el-menu-item>
            <router-link to="/servicios/curriculos"
              ><el-menu-item index="3-2-3"
                >RECEPCIÓN DE CURRÍCULOS</el-menu-item
              ></router-link
            >
          </el-sub-menu>
        </el-sub-menu>
        <router-link to="/noticias"
          ><el-menu-item index="4">NOTICIAS</el-menu-item></router-link
        >
      </el-menu>
    </div>
  </el-header>
</template>
