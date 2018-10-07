<template>
  <div>
    <b-carousel id="carousel"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="5000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <img  slot="img" class="d-block img-fluid w-100" width="100%" height="480" 
              src="@/assets/images/image1.jpg" alt="image slot">
      </b-carousel-slide>
      <b-carousel-slide>
        <img  slot="img" class="d-block img-fluid w-100" width="100%" height="480" 
              src="@/assets/images/image2.jpg" alt="image slot">
      </b-carousel-slide>
      <b-carousel-slide>
        <img  slot="img" class="d-block img-fluid w-100" width="100%" height="480" 
              src="@/assets/images/image3.jpg" alt="image slot">
      </b-carousel-slide>
      <div class="overlay">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 offset-md-6 text-center text-md-right">
              <h1 class="display-3">Alojamientos Huetor</h1>
              <p class="d-none d-md-block h4">Ven a vivir una experiencia única en las mejores casas rurales de la provincia de Málaga.</p>
              <a href="#" class="btn btn-outline-light mr-2">Conócenos</a>
              <button class="btn btn-warning" data-toggle="modal" data-target="#ReservaModal">Reservar</button>
            </div>
          </div>
        </div>
      </div>

    </b-carousel>

  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->

<style scoped>
  #carousel {
      position: relative;
  }
  #carousel .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    color: #F1F1F1;
  }
  #carousel .overlay .container,
  #carousel .overlay .row {
    height: 100%;
  }
  img {
    max-height: 80vh;
    object-fit: cover;
  }
  :nth-of-type(1) img {
    object-position: 50% 37%;
  }
  :nth-of-type(2) img {
    object-position: 0 70%;
  }
  :nth-of-type(3) img {
    object-position: 50% bottom;
  }

</style>
