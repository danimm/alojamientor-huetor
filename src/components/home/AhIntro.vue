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
            src="@/assets/images/compressed/Image1.jpg"
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
            src="@/assets/images/compressed/Image2.jpg"
            class="d-block img-fluid w-100"
            />
        </b-col>
      </b-row>

      <b-row id="img-bottom">
        <b-col>
          <!-- <img 
            src="@/assets/images/compressed/Image2.jpg"
            class="d-block img-fluid w-100"
            /> -->
            <b-img-lazy :src="Image2" fluid-grow blank-color="#bbb" alt="img" />
        </b-col>
        <b-col>
          <!-- <b-img :src="Image3" fluid alt="Responsive image" /> -->
          <b-img-lazy :src="Image3" fluid-grow blank-color="#bbb" alt="img" />
          <!-- <img 
            src="@/assets/images/compressed/Image2.jpg"
            class="d-block img-fluid w-100"
            /> -->
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
  import Image1 from '@/assets/images/compressed/Image1.jpg'
  import Image2 from '@/assets/images/compressed/Image2.jpg'
  import Image3 from '@/assets/images/compressed/Image3.jpg'
  // import Image4 from '@/assets/images/compressed/Image4.jpg'

  export default {
    data() {
      return {
        Image1,
        Image2,
        Image3,
        // Image4
      }
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
  .col, .col-2 {
    padding: 0;
  }
</style>