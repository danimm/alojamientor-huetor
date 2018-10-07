<template>
  <div>
    <b-container class="mt-4">
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
    <b-container-fluid>
      <b-row>
        <b-col align-self="center" class="p-5 text-center">
          <p>Naturaleza</p>
          <p>Playa, vistas culturales:</p>
          <p>Todo lo que puedes encontrar y disfrutar</p>
        </b-col>
        <b-col>
          <img 
            src="@/assets/images/image1.jpg"
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
            src="@/assets/images/image2.jpg"
            class="d-block img-fluid w-100"
            />
        </b-col>
      </b-row>

      <b-row id="img-bottom">
        <b-col cols="2">
          <img 
            src="@/assets/images/image1.jpg"
            class="d-block img-fluid w-100"
            />
        </b-col>
        <b-col>
          <img 
            src="@/assets/images/image3.jpg"
            class="d-block img-fluid w-100"
            />
        </b-col>
        <b-col cols="2" align-self="center" class="p-5 text-center">
          <p>
            Enlace video promocional de la Axarquia
          </p>
        </b-col>
      </b-row>
    </b-container-fluid>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  img {
    height: 100%;
    object-fit: cover;
  }
  .col, .col-2 {
    max-height: 300px;
    padding: 0;
  }
</style>