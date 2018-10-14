<template>
  <div class="hero">
    <div class="overlay">
      <b-container>
        <b-row class="mb-5 mt-5">
          <h3 class="title text-white">Las habitaciones de Huetor</h3>
        </b-row>
        <b-row>
          <b-col class="pl-0">
            <img src="@/assets/images/compressed/Image10.jpg" alt="">
          </b-col>
          <b-col>
            <img src="@/assets/images/compressed/Image11.jpg" alt="">
          </b-col>
          <b-col>
            <img src="@/assets/images/compressed/Image12.jpg" alt="">
          </b-col>
          <b-col>
            <img src="@/assets/images/compressed/Image13.jpg" alt="">
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col cols="10" class="pl-0">
            <p class="text-white">
              Cada casa consta de dos grandes dormitorios, salón/comedor, cocina totalmente equipada, dos baños, una gran terraza con barbacoa.
              Chimenea en el salón para aquellos que les guste el calor del fuego en invierno. Aire Acondicionado y Calefacción (en las habitaciones).
            </p>
          </b-col>
          <b-col class="bt-container">
            <b-button size="lg" variant="warning">
              Reservar
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .hero {
    background-image: url('../../assets/images/compressed/Image2.jpg');
    background-size: cover;
    background-position: center 40%;
    height: 500px;
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
  }
  .bt-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>