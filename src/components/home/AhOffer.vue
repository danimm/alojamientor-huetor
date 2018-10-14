<template>
  <div>
    <b-row  align-h="center"
            class="mt-5 mb-5">
      <b-col cols="3">
        <b-card title="Vistas de la Maroma"
                :img-src="Image1"
                img-top
                class="text-center">
          <p class="card-text">
            Disfruta desde la terraza nuestras casas de una de las mejores vistas del pico más alto de la provincia de Málaga: La Maroma (2.066 m)
          </p>

        </b-card>
      </b-col>
      <b-col cols="3" class="mr-4 ml-4">
        <b-card title="El Pantano de la Viñuela"
                :img-src="Image2"
                img-bottom
                class="text-center">
          <p class="card-text">
            Disfruta cada día de unas maravillosas vistas al embalse de la Viñuela, un lugar fantástico para disfrutar al aire libre o incluso realizar deportes de agua.
          </p>

        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card title="Equipadas con todo"
                :img-src="Image3"
                img-top
                class="text-center">
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>

        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Image1 from '@/assets/images/compressed/Image7.jpg'
  import Image2 from '@/assets/images/compressed/Image4.jpg'
  import Image3 from '@/assets/images/compressed/Image10.jpg'
  export default {
    data() {
      return {
        Image1,
        Image2,
        Image3
      }
    }
  }
</script>

<style scoped>
  .row {
    max-width: 100%;
  }
  .card-body {
    height: 200px;
  }
  .card-img-bottom {
    height: 300px;
  }
</style>