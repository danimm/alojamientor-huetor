<template lang="pug">
  .container
    //- h2 Consulta las fechas disponibles para tus próximas vacaciones
    .row
      .col-lg-6.col-md-12
        .grid-container
          b-card.mb-2(
            tag='article',
            v-for="c in cards",
            :key="c.id"
            )
            h2 {{ c.title }}
            h3.date {{ c.duration }}
            ul
              li(
                v-for="item in c.list"
                :key="item.id"
                ) {{ item }}
      .col-lg-6.col-md-12.text-center
        h3.text-center Consulta las fechas disponibles para tus próximas vacaciones
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fcalendario.svg?alt=media&token=583bd152-ef11-4a6a-b546-aba863bf3973")
        b-button(href='#', variant='warning') Consultar fechas

      

</template>

<script>
  export default {
    data() {
      return {
        cards: [
          {
            title: 'Temporada alta',
            duration: '1 Junio - 15 Septiembre',
            list: [
              'No se admiten mascotas',
              'checking 16:00',
              'checkout 12:00'
            ]
          },
          {
            title: 'Temporada baja',
            duration: 'Resto del año',
            list: [
              'No se admiten mascotas',
              'checking 16:00',
              'checkout 12:00'
              // 'Horario de llegada a partir de las 16:00, horario de salida antes de las 12:00 (salvo otro acuerdo con el propietario',
              // 'Horario de salida antes de las 12:00'
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .container {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    /* margin-top: 50px; */
    margin-bottom: 150px;
  }
  .grid-container {
    /* margin: 0 50px; */
    grid-gap: 20px;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr) / 1fr;
    justify-content: space-between;
  }
  .btn {
    display: block;
    border-radius: 20px;
    margin-top: 40px;
    padding: 15px;
    font-size: 1.2em;
  }
  .card {
    padding: 0 20px 0 20px;
    border-radius: 10px;
    background-color:#fefdeb;
    margin: 0 10px;
  }
  .card-body h4, h3,h2 {
    text-align: left;
  }
  h2 {
    font-size: 3em;
  }
  h3 {
    font-size: 1.5;
    padding: 20px 0;
  }
  img {
    width: 50%;
  }
  /* h3::after {
    content: "/ Dia";
    font-size: 1rem;
  } */
  @media screen and (max-width: 992px){
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 576px){
    h2 {
      font-size: 1.9em;
    }
    .date {
      font-size: 1.5em;
    }
    ul {
      padding-left: 10px;
    }
  }
</style>