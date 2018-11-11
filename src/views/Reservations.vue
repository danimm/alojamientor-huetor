<template lang="pug">
  .container
    .row
      .col-lg-6.col-md-12
        .grid-container
          b-card.mb-2(tag='article')
            h2 {{ $t('reservations.card.title') }}
            h3.date {{ $t('reservations.card.season') }}
            ul
              li {{ $t('reservations.card.list.item1') }}
              li {{ $t('reservations.card.list.item2') }}
              li {{ $t('reservations.card.list.item3') }}
              li {{ $t('reservations.card.list.item4') }}
              li {{ $t('reservations.card.list.item5') }}
              li {{ $t('reservations.card.list.item6') }}
              li {{ $t('reservations.card.list.item7') }}
              li {{ $t('reservations.card.list.item8') }}
              li {{ $t('reservations.card.list.item9') }}
              li {{ $t('reservations.card.list.item10') }}
              li {{ $t('reservations.card.list.item11') }}
              li {{ $t('reservations.card.list.item12') }}
          //- iframe(
          //-   src="https://www.avaibook.com/widgets_propietarios/loader.php?id=32168&lang=ES"
          //-   style="width: 500px; height: 355px; border: 0"
          //-   frameborder=0 allowtransparency="allowtransparency")
          //- div(style="width: 500px; margin: auto")
          //-   a(href="https://www.avaibook.com/" target="_blank") software gestión alojamiento
      .col-lg-6.col-md-12.text-center
        h4.text-center {{ $t('reservations.title') }}
        img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/icons%2Fcalendario.svg?alt=media&token=583bd152-ef11-4a6a-b546-aba863bf3973")
        b-button(href='https://www.avaibook.com/reservas/nueva_reserva.php?cod_alojamiento=151137&lang=es', variant='warning', target="_blank") {{ $t('reservations.button') }}

      

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
    margin-bottom: 10px;
  }
  h3 {
    font-size: 1.5em;
    padding: 20px 0;
  }
  h4 {
    font-size: 2.4em;
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
    h2,h4 {
      font-size: 1.9em;
    }
    .grid-container {
      margin-bottom: 40px;
    }
    .date {
      font-size: 1.5em;
    }
    ul {
      padding-left: 10px;
    }
  }
</style>