<template lang="pug">
  .container-fluid
    .container
      .grid-container
        //- .text-container
        .img-container-1
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/gallery%2Ffotopiscina.jpg?alt=media&token=40102798-cac4-4f11-a29d-9520c6043aea")
        .img-container-2
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage15.jpg?alt=media&token=bc972bb4-dec6-4d06-9a0b-847980c9c4c5")
        .text-container-2
          h2 {{ $t('home.columns.title') }}
          p {{ $t('home.columns.text1') }}
          p {{ $t('home.columns.text2') }}
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  h2 {
    font-family: 'Satisfy', cursive;
  }
  .container-fluid {
    /* background-color: lightslategrey; */
    margin-top: 120px;
    padding: 30px 0;
    /* color: white; */
  }
  .grid-container {
    display: grid;
    grid-template: 1fr 500px / repeat(3, 1fr);
    grid-gap: 10px;
    grid-template-areas:  "text2 text2 img2"
                          "img1 img1 img2";
    /* height: 800px; */
    margin-bottom: 50px;
  }
  h5 {
    padding: 20px 0;
  }
  h2{
    font-size: 3.5em;
  }
  h2:nth-of-type(2) {
    margin-bottom: 30px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .text-container {
    grid-area: text1;
    /* background-color: lightgreen; */
    /* padding: 20px; */
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
  }
  .text-container p {
    padding-bottom: 50px;
  }
  .img-container-1 {
    grid-area: img1;
  }
  .img-container-1 img {
    /* width: 371px;
    height: 418px; */
    object-fit: cover;
    object-position: 15% center;
  }
  .img-container-2 {
    grid-area: img2;
  }
  .img-container-2 img {
    object-fit: cover;
    object-position: center;
  }
  .text-container-2 {
    display: flex;
    /* align-items: flex-end; */
    flex-direction: column;
    grid-area: text2;
    /* background-color: lightgoldenrodyellow; */
    padding: 0 20px 0 0;
  }

  @media screen and (max-width: 992px){
    .grid-container {
      grid-template: 1fr 1fr / repeat(2, 1fr);
      grid-gap: 10px;
      grid-template-areas:  "text1 img2"
                            "img1 text2";
                            grid-gap: 20px;
      /* height: 800px; */
    }
    .img-container-1 img {
      height: 100%;
      width: 100%;
    }
    .text-container-2 {
      display: block;
    }
  }

  @media screen and (max-width: 992px){
    .grid-container {
      grid-template-rows: auto-fill;
      grid-template-areas:  "text1 text1"
                            "text2 text2"
                            "img1 img1"
                            "img2 img2";
    }
    p {
      margin: 0;
      padding: 0;
    }
    img {
      margin-bottom: 40px;
    } 
  }

  @media screen and (max-width: 576px){
    h2 {
      font-size: 2.5em;
    }
    .grid-container {
      margin-bottom: 0;
    }
  }
</style>