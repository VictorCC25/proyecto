<template>
  <div class="filafooter">
    <div class="columna">
      <h3>CONTACTO</h3>
      <p class="textofooter">
        Pasaje Don Bosco 1,<br />
        34190, Villamuriel de Cerrato <br />
        Tlfno:
        <el-link href="tel:979777270" class="linkform" type="danger"> 979 77 72 70 </el-link
        ><br />
        <el-link
          href="mailto:direccioncolegio@salesianosvillamuriel.com"
          class="linkform" type="danger"
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
      <div>
      <form label-position="top" @submit.prevent="sendEmail">
        <p><label>Email del remitente</label></p>
        <p><input type="email" v-model="email" name="email" placeholder="Escriba su correo" required /></p>
        <p><label>Texto de Consulta</label></p>
        <p><textarea name="message" v-model="message" rows="9" placeholder="Escriba aquí su consulta" required /></p>
        <input type="submit" value="Enviar">
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
import emailjs from 'emailjs-com';

export default {
  name: "Pie de Página",
  props: ["fotos"],
  data() {
    return {
      email: '',
      message: ''
      }
  },
  methods: {
    sendEmail(e){
      try {
      emailjs.sendForm('gmail','correo', e.target, 'QM9iKEOLLysNxT6ZI',
      { email: this.email,
       message: this.message
      })
      } catch(error){
        console.log({error})
      }
      this.email= ''
      this.message= ''
    },
  }
}
</script>
<style>

</style>
