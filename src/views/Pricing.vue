<template lang="pug">
  .container
    //- h2 Consulta las fechas disponibles para tus próximas vacaciones
    .row
      .col
        .grid-container
          b-card.mb-2(
            tag='article',
            v-for="c in cards",
            :key="c.id"
            )
            h2 {{ c.title }}
            h3 {{ c.duration }}
            ul
              li(
                v-for="item in c.list"
                :key="item.id"
                ) {{ item }}
      .col-6.text-center
        h3 Consulta las fechas disponibles para tus próximas vacaciones
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
              'Estancia mínima 2 noches',
              'No se admiten mascotas',
              'Julio y Agosto: estancia mínima 1 semana',
              'Navidad y Semana Santa: estancia mínima 1 semana'
            ]
          },
          {
            title: 'Temporada baja',
            duration: 'Resto del año',
            list: [
              'Estancia mínima 2 noches',
              'No se admiten mascotas',
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
</style>