<template>
  <h1 class="titulolista">ASPECTOS DESTACABLES</h1>
  <div class="contenedorlistas">
      <div class="contenidolista">
          <div class="elementoslistas">
              <h3>
                  <span>
                      <div class="inline">
                    <svg width="25" height="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="black">
                        <path d="M 416 448 h -84 c -6.6 0 -12 -5.4 -12 -12 v -40 c 0 -6.6 5.4 -12 12 -12 h 84 c 17.7 0 32 -14.3 32 -32 V 160 c 0 -17.7 -14.3 -32 -32 -32 h -84 c -6.6 0 -12 -5.4 -12 -12 V 76 c 0 -6.6 5.4 -12 12 -12 h 84 c 53 0 96 43 96 96 v 192 c 0 53 -43 96 -96 96 Z m -47 -201 L 201 79 c -15 -15 -41 -4.5 -41 17 v 96 H 24 c -13.3 0 -24 10.7 -24 24 v 96 c 0 13.3 10.7 24 24 24 h 136 v 96 c 0 21.5 26 32 41 17 l 168 -168 c 9.3 -9.4 9.3 -24.6 0 -34 Z">
                        </path>
                    </svg>
                    </div>
                </span>
                  Requisitos de acceso
                </h3>
              <p>Hay que cumplir uno de estos requisitos</p>
              <ul>
                  <li v-for="(lista, id) in listas1" :key="id" class="listas">
                      <span class="circulo"></span>
                      {{lista.Texto}}
                  </li>
              </ul>
          </div>
      </div>
      <div class="contenidolista">
          <div class="elementoslistas">
              <h3>
                  <span>
                      <div class="inline">
                    <svg width="25" height="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="black">
                        <path d="M 416 448 h -84 c -6.6 0 -12 -5.4 -12 -12 v -40 c 0 -6.6 5.4 -12 12 -12 h 84 c 17.7 0 32 -14.3 32 -32 V 160 c 0 -17.7 -14.3 -32 -32 -32 h -84 c -6.6 0 -12 -5.4 -12 -12 V 76 c 0 -6.6 5.4 -12 12 -12 h 84 c 53 0 96 43 96 96 v 192 c 0 53 -43 96 -96 96 Z m -47 -201 L 201 79 c -15 -15 -41 -4.5 -41 17 v 96 H 24 c -13.3 0 -24 10.7 -24 24 v 96 c 0 13.3 10.7 24 24 24 h 136 v 96 c 0 21.5 26 32 41 17 l 168 -168 c 9.3 -9.4 9.3 -24.6 0 -34 Z">
                        </path>
                    </svg>
                    </div>
                </span>
                  Salidas Académicas</h3>
              <ul>
                  <li v-for="(lista, id) in listas2" :key="id" class="listas">
                      <span class="circulo"></span>
                      {{lista.Texto}}
                  </li>
              </ul>
          </div>
      </div>
      <div class="contenidolista">
          <div class="elementoslistas">
              <h3>
                  <span>
                      <div class="inline">
                    <svg width="25" height="25" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="black">
                        <path d="M 416 448 h -84 c -6.6 0 -12 -5.4 -12 -12 v -40 c 0 -6.6 5.4 -12 12 -12 h 84 c 17.7 0 32 -14.3 32 -32 V 160 c 0 -17.7 -14.3 -32 -32 -32 h -84 c -6.6 0 -12 -5.4 -12 -12 V 76 c 0 -6.6 5.4 -12 12 -12 h 84 c 53 0 96 43 96 96 v 192 c 0 53 -43 96 -96 96 Z m -47 -201 L 201 79 c -15 -15 -41 -4.5 -41 17 v 96 H 24 c -13.3 0 -24 10.7 -24 24 v 96 c 0 13.3 10.7 24 24 24 h 136 v 96 c 0 21.5 26 32 41 17 l 168 -168 c 9.3 -9.4 9.3 -24.6 0 -34 Z">
                        </path>
                    </svg>
                    </div>
                </span>
                  Salidas Profesionales</h3>
              <ul>
                  <li v-for="(lista, id) in listas3" :key="id" class="listas">
                      <span class="circulo"></span>
                      {{lista.Texto}}
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    name:"Lista",
    props:['listas1','listas2','listas3']
}
</script>
<style>
.contenedorlistas{
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
}

.contenidolista{
    width: 33%;
}
.elementoslista{
    display: inline-block;
    font-family: sans-serif;
    font-weight: 300;
    font-size: 2.2em;
    color: #2e2e2e;
    text-align: center;
    margin: 0;
}
.inline{
    display: inline-block;
}
.listas{
    list-style: none;
    padding-left: 2em;
    font-family: "decima_nova_proregular",sans-serif;
    font-weight: 300;
    font-size: 1.2em;
    color: #000;
    text-indent: -1.55em;
    margin-bottom: 0.5em;
}
.circulo{
    content: "";
    display: inline-block;
    height: 1em;
    width: 1em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-image: url(../src/img/svg/circle-tenue.svg);
    background-size: contain;
}
.titulolista{
    color: rgb(81, 98, 111);
    margin: 2em 0 1em;
    font-family: sans-serif;
    font-weight: 300;
    font-size: 4em;
    text-align: center;
}
</style>