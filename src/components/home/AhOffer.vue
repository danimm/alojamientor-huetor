<template lang="pug">
  div
    b-row.mt-5.mb-5(align-h='center')
      b-col(cols='3')
        b-card.text-center(title='Vistas de la Maroma', :img-src='Image7', img-top='')
          p.card-text
            | Disfruta desde la terraza nuestras casas de una de las mejores vistas del pico más alto de la provincia de Málaga: La Maroma (2.066 m)
      b-col.mr-4.ml-4(cols='3')
        b-card.text-center(title='El Pantano de la Viñuela', :img-src='Image4', img-bottom='')
          p.card-text
            | Disfruta cada día de unas maravillosas vistas al embalse de la Viñuela, un lugar fantástico para disfrutar al aire libre o incluso realizar deportes de agua.
      b-col(cols='3')
        b-card.text-center(title='Equipadas con todo', :img-src='Image10', img-top='')
          p.card-text
            | This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
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