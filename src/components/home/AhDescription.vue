<template lang="pug">
  .container
    b-row.mt-4(align-h='center')
      .col-lg-6.col-md-12
        img(
          src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage14.jpg?alt=media&token=d0f5d820-81b5-4cec-ab90-2dd5201f55d7")
      .col-lg-6.col-md-12
        .content
          h2 {{ $t('home.description.title') }}
          p {{ $t('home.description.text1') }}
          p {{ $t('home.description.text2') }}
          p {{ $t('home.description.text3') }}
          p {{ $t('home.description.text4') }}

</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Satisfy', cursive;
  }
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

  @media screen and (max-width: 576px){
    h2 {
      font-size: 2.5em;
    }
  }
</style>