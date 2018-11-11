<template lang="pug">
  .container-fluid
    h2.text-center {{ $t('home.cards.title') }}
    b-row.mt-5.mb-5(align-h='center')
      .col-lg-3.col-sm-12.col-md-12
        b-card.text-center(
          :title="$t('home.cards.card1.title')",
          :img-src='Image7',
          img-top=''
          )
          p.card-text
            | {{ $t('home.cards.card1.text') }}
      .col-lg-3.col-sm-12.col-md-12
        b-card.text-center(
          :title="$t('home.cards.card2.title')",
          :img-src='Image4',
          img-top=''
          )
          p.card-text.mb-4
            | {{ $t('home.cards.card2.text') }}
      .col-lg-3.col-sm-12.col-md-12
        b-card.text-center(
          :title="$t('home.cards.card3.title')",
          :img-src='Image10',
          img-top=''
          )
          p.card-text
            | {{ $t('home.cards.card3.text') }}
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
  .card-img-top {
    /* height: ; */
  }
  /* img {
    height: 100%;
    width: 100%;
  } */
  h2 {
    font-size: 4em;
  }

  @media screen and (max-width: 992px){
    .row {
      margin: 0;
    } 
    .col-md-12 {
      margin-bottom: 50px;
    }
    .card-title {
      font-size: 2.5em;
    }  
  }
  @media screen and (max-width: 576px){
    h2 {
      font-size: 3em;
    }
    h4.card-title {
      font-size: 2em;
    }
    .container-fluid {
      margin-bottom: 0;
    }
  }

</style>