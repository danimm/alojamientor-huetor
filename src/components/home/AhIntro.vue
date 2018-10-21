<template>
  <div class="wrapper">
    <b-container class="mt-5 mb-5">
      <b-row class="justify-content-center">
        <b-col
          cols="8"
          class="text-center"
          >
          <h2>Bienvenido a Alojamientos Huetor</h2>
          <h3>Nº Registro: A/MA/1065</h3>
          <p>
            En el corazón de la Axarquía, Málaga, a sólo 15 minutos de la playa, rodeado de pintorescos pueblos blancos y el Parque Natural de Sierra Tejeda y Almijara.
          </p>
        </b-col>
      </b-row>      

    </b-container>
    <b-container fluid>
      <b-row>
        <b-col align-self="center" class="p-5 text-center">
          <p>Naturaleza</p>
          <p>Playa, vistas culturales:</p>
          <p>Todo lo que puedes encontrar y disfrutar</p>
        </b-col>
        <b-col>
          <img 
            :src="Image1"
            class="d-block img-fluid w-100"
            />
        </b-col>
        <b-col align-self="center" class="p-5 text-center">
          <p>Ubicado junto</p>
          <p>al embalse de la viñuela</p>
          <p>lugar perfecto para relajarse</p>
        </b-col>
        <b-col>
          <img 
            :src="Image2"
            class="d-block img-fluid w-100"
            />
        </b-col>
      </b-row>

      <b-row id="img-bottom">
        <b-col>
            <b-img-lazy :src="Image2" fluid-grow blank-color="#bbb" alt="img" />
        </b-col>
        <b-col>
          <b-img-lazy :src="Image3" fluid-grow blank-color="#bbb" alt="img" />
        </b-col>
        <b-col cols="2" align-self="center" class="p-5 text-center">
          <p>
            Enlace video promocional de la Axarquia
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

  export default {
    props: {
      Image1: { type: String, required: true },
      Image2: { type: String, required: true },
      Image3: { type: String, required: true },
    }
  }
</script>

<style scoped>
  #img-bottom {
    height: 400px;
  }
  #img-bottom img {
    height: 100%;
    /* width: 100%; */
    object-fit: cover;
    object-position: center bottom;
  }
  .container-fluid{
    padding: 0;
  }
  .col, .col-2 {
    padding: 0;
  }
  .row {
    max-width: 100%;
    margin-left: 0;
  }
</style>