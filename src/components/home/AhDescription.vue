<template lang="pug">
  .container
    b-row.mt-4(align-h='center')
      .col-lg-6.col-md-12
        img(
          src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage14.jpg?alt=media&token=d0f5d820-81b5-4cec-ab90-2dd5201f55d7")
      .col-lg-6.col-md-12
        .content
          h2 Aquí encontrarás paz y descanso. Ven a conocernos
          p Alojamientos Huetor es un lugar pensado para disfrutar de una estancia agradable y relajante en el corazón de la Axarquía de la provincia de Málaga
          p Es el lugar perfecto para pasar unas relajantes y/o aventureras vacaciones. Con fácil acceso a los diferentes campos de golf, Parques Naturales, Parques de Animales Salvajes, Parques Acuáticos, paseos por la montaña y alrededor del Embalse, las playas o simplemente tomar el sol en la terraza o piscina del alojamiento, es el lugar ideal.
          p Una visita en cualquier época del año le ofrecerá la oportunidad de disfrutar de los placeres culturales y gastronómicos de la zona, sin olvidar las fiestas populares. Desde Alojamientos Huetor podrá visitar las ciudades históricas de Córdoba, Granada, Sevilla, Antequera, Málaga e incluso esquiar en Sierra Nevada.
          p A tan sólo 45 minutos del aeropuerto.

</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .container {
    margin-top: 150px !important;
    /* margin-bottom: 200px; */
    height: 690px;
  }
  img {
      object-fit: cover;
      width: 100%;
      height: 100%;
  }
  h2 {
    font-size: 3em;
    margin-bottom: 50px;
    /* letter-spacing: 1px; */
  }
  p {
    line-height: 1.75rem;
  }
  .container {
    margin-bottom: 60px;
    margin-top: 60px;
  }
  @media screen and (max-width: 992px){
    .container {
      margin-top: 0 !important;
      height: 100%;
    }
    h2 {
      margin-top: 20px;
    }
  }
</style>