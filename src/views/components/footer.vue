<template>
  <div class="filafooter">
    <div class="columna">
      <h3>CONTACTO</h3>
      <p class="textofooter">
        Pasaje Don Bosco 1,<br />
        34190, Villamuriel de Cerrato <br />
        Tlfno:
        <el-link href="tel:979777270" class="linkform" type="danger">
          979 77 72 70 </el-link
        ><br />
        <el-link
          href="mailto:direccioncolegio@salesianosvillamuriel.com"
          class="linkform"
          type="danger"
        >
          direccioncolegio@salesianosvillamuriel.com </el-link
        ><br /><br />
        Horario de antención: De 9:00 a 14:00
      </p>
      <div class="mapa">
        <el-link href="https://goo.gl/maps/dTQNZjREAZymheM77"
          ><img v-bind:src="fotos.foto1" alt="Mapa"
        /></el-link>
      </div>
    </div>
    <div class="columna">
      <h3>PEDIR INFORMACIÓN</h3>
      <p class="borde">
        Si deseas información o nos quieres consultar algo, puedes utilizar este
        formulario. Por favor, indica un email válido para que la respuesta se
        envíe correctamente
        <router-link to="/politica"
          >(leer nuestra política de privacidad)</router-link
        >
      </p>
      <div class="contenedorform">
        <form label-position="top" @submit.prevent="sendEmail">
          <p><label>Email del remitente</label></p>
          <p>
            <input
              type="email"
              v-model="email"
              name="email"
              placeholder="Escriba su correo"
              required
            />
          </p>
          <p><label>Texto de Consulta</label></p>
          <p>
            <textarea
              name="message"
              v-model="message"
              rows="9"
              placeholder="Escriba aquí su consulta"
              required
            />
          </p>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
    <div class="filalogo">
      <img v-bind:src="fotos.foto2" alt="TIC 5" />
      <img v-bind:src="fotos.foto3" alt="Excelencia" class="logomgrande" />
      <img v-bind:src="fotos.foto4" alt="Calidad" class="logogrande" />
      <img v-bind:src="fotos.foto5" alt="Cisco" class="logogrande" />
      <img
        v-bind:src="fotos.foto6"
        alt="Microsoft Imagine Academy"
        class="logoancho"
      />
      <img v-bind:src="fotos.foto7" alt="Orecle Academy" />
      <img v-bind:src="fotos.foto8" alt="VMWare Academy" class="logocorto" />
    </div>
  </div>
</template>
<script>
import emailjs from "emailjs-com";

export default {
  name: "Pie de Página",
  props: ["fotos"],
  data() {
    return {
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm("gmail", "correo", e.target, "QM9iKEOLLysNxT6ZI", {
          email: this.email,
          message: this.message,
        });
      } catch (error) {
        console.log({ error });
      }
      this.email = "";
      this.message = "";
    },
  },
};
</script>
<style>
.footer {
  position: relative;
  width: 100%;
  padding: 2em 0;
  background-color: #2e2e2e;
}
.filafooter {
  position: relative;
  display: flex;
  padding: 2em 0;
  width: 100%;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
}
.columna {
  margin-left: 2em;
  display: inline-block;
  width: 46%;
  min-width: 400px;
  max-width: 700px;
  /* text-align: left; */
}
.columna > h3 {
  margin-top: 0.5em;
  font-family: sans-serif;
  font-size: 1.5em;
  color: #fff;
  text-align: left;
  font-weight: 400;
}
.textofooter,
label {
  color: #dad4cb;
}
.borde {
  color: #dad4cb;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 1em;
}
.borde > a:hover {
  color: #fff;
}
.linkform {
  color: #fff;
}
.mapa img {
  width: 100%;
  max-width: 400px;
}
input,
textarea {
  width: 100%;
  background-color: #d9d9d9;
  border: none;
  outline: 0;
  font-size: 1.2em;
  padding: 0.2em;
  border-radius: 0.2em;
  font-family: sans-serif;
}

input[type="submit"] {
  width: 100%;
  padding: 1em;
  border-radius: 0.2em;
  font-weight: 300;
  font-size: 1.2em;
  color: #fff;
  background-color: #616161;
  border: none;
  outline: 0;
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #484ca2;
}
.filalogos {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.filalogo > img {
  height: 60px;
  align-items: center;
  margin: 1em;
}
.logomgrande {
  height: 135px;
}
.logogrande {
  height: 90px;
}
.logocorto {
  height: 30px;
}
@media screen and (max-width: 425px) {
  .mapa{
    width: 70%;
  }
  .mapa > img {
    width: 80%;
  }
  input,
  textarea {
    width: 88%;
  }
  input[type="submit"] {
    width: 88%;
  }
  form > p {
    width: 88%;
  }
  .borde {
    width: 88%;
  }
  .filalogo {
    display: none;
  }
}
@media screen and (max-width: 375px) {
  .filafooter {
    padding-left: 5em;
    width: 70%;
  }
  .columna{
    width: 70%;
  }
  .contenedorform{
    width: 80%;
  }
  input[type="submit"] {
    width: 68%;
  }
  .borde {
    width: 68%;
  }
}
</style>
