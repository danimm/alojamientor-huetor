<template>
  <div class="hero">
    <div class="overlay">
      <b-container>
        <b-row class="mb-5 mt-5">
          <h3 class="title text-white">Las habitaciones de Huetor</h3>
        </b-row>
        <b-row>
          <b-col class="pl-0">
            <img src="@/assets/images/image3.jpg" alt="">
          </b-col>
          <b-col>
            <img src="@/assets/images/image3.jpg" alt="">
          </b-col>
          <b-col>
            <img src="@/assets/images/image3.jpg" alt="">
          </b-col>
          <b-col>
            <img src="@/assets/images/image3.jpg" alt="">
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col cols="10" class="pl-0">
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
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
    background-image: url('../../assets/images/image3.jpg');
    background-size: cover;
    background-position: center bottom;
    height: 500px;
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
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