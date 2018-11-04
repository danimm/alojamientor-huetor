<template lang="pug">
  article(:class="{ 'showContent': isLoaded }")
    b-carousel#carousel(
      style='text-shadow: 1px 1px 2px #333;',
      controls='',
      indicators='',
      background='#ababab',
      :interval='3000',
      img-width='1024',
      img-height='480',
      v-model='slide',
      @sliding-start='onSlideStart',
      @sliding-end='onSlideEnd'
      )
      b-carousel-slide
        img.d-block.img-fluid.w-100(
          slot='img',
          width='100%',
          height='480',
          :src='Slide1',
          alt='Slide 1'
          )
      b-carousel-slide
        img.d-block.img-fluid.w-100(
          slot='img',
          width='100%',
          height='480',
          :src='Slide2',
          alt='Slide 2'
          )
      b-carousel-slide
        img.d-block.img-fluid.w-100(
          slot='img',
          width='100%',
          height='480',
          :src='Slide3',
          alt='image slot'
          )
      .overlay
        .container
          .row.align-items-center
            .col-md-6.offset-md-6.text-center.text-md-right
              h1.display-3 Alojamientos Huetor
              p.d-none.d-md-block.h4
                | Ven a vivir una experiencia única en las mejores casas rurales de la provincia de Málaga.
              router-link.btn.btn-outline-light.mr-2(to="gallery") Galería
              //- a.btn.btn-outline-light.mr-2(href='#') Conócenos
              router-link.btn.btn-warning(to="reservations") Reservar
</template>

<script>

export default {
  data () {
    return {
      isLoaded: false,
      slide: 0,
      sliding: null
    }
  },
  props: {
    Slide1: { type: String },
    Slide2: { type: String },
    Slide3: { type: String }
  },
  mounted() {
    this.isLoaded = true
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
  article {
    display: none;
  }
  .showContent {
    display: block;
  }
  #carousel {
      position: relative;
  }
  #carousel .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.25);
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
  
  @media screen and (max-width: 992px){
    .showContent {
      display: none;
    }
  }

</style>
