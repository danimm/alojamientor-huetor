<template lang="pug">
  .container-fluid
    h2.text-center Tu eliges: playa o montaña
    b-row.mt-5.mb-5(align-h='center')
      b-col(cols='3')
        b-card.text-center(title='Las mejores vistas', :img-src='Image7', img-top='')
          p.card-text
            | Disfruta desde la terraza de nuestras casas de una de las mejores vistas del pico más alto de la provincia de Málaga: La Maroma (2.066 m)
      b-col.mr-4.ml-4(cols='3')
        b-card.text-center(title='El Pantano de la Viñuela', :img-src='Image4', img-bottom='')
          p.card-text.mb-4
            | Contempla cada día las vistas del embalse de la Viñuela, un lugar fantástico para disfrutar al aire libre o incluso realizar deportes de agua.
      b-col(cols='3')
        b-card.text-center(title='La costa del Sol', :img-src='Image10', img-top='')
          //- p.card-text
          //-   | En Málaga tenemos 320 días de sol al año, en los que disfrutar en nuestras maravillosas playas (a 15 minutos) que hay en Málaga,  (a sólo 15 minutos) o nuestra maravillosa piscina.
          p.card-text
            | Con 320 días de sol al año, Málaga es un sitio ideal para tomar el sol en la playa (a 15 minutos) o en nuestra maravillosa piscina.
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
  .container-fluid {
    margin-bottom: 120px; 
  }
  .row {
    max-width: 100%;
  }
  .card-img-bottom {
    height: 190px;
  }
  /* img {
    height: 100%;
    width: 100%;
  } */
  h2 {
    font-size: 4em;
  }
</style>