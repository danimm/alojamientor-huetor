<template>
  <div>
    <b-row  align-h="center"
            class="mt-5 mb-5">
      <b-col cols="3">
        <b-card title="Vistas de la Maroma"
                :img-src="Image7"
                img-top
                class="text-center">
          <p class="card-text">
            Disfruta desde la terraza nuestras casas de una de las mejores vistas del pico más alto de la provincia de Málaga: La Maroma (2.066 m)
          </p>

        </b-card>
      </b-col>
      <b-col cols="3" class="mr-4 ml-4">
        <b-card title="El Pantano de la Viñuela"
                :img-src="Image4"
                img-bottom
                class="text-center">
          <p class="card-text">
            Disfruta cada día de unas maravillosas vistas al embalse de la Viñuela, un lugar fantástico para disfrutar al aire libre o incluso realizar deportes de agua.
          </p>

        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card title="Equipadas con todo"
                :img-src="Image10"
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
  export default {
    props: {
      Image4: { type: String, required: true },
      Image7: { type: String, required: true },
      Image10: { type: String, required: true },
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