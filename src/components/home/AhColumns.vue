<template lang="pug">
  .container-fluid
    .container
      .grid-container
        .text-container
          h2 Todo a tu alcance
          //- h4 En el interior pero a la vez cerca de todo: Restaurantes, playa, montaña..
          p Vive una experiencia inolvidable con nosotros y disfruta de la tranquilidad, el bienestar y la naturaleza de este maravilloso lugar.
        .img-container-1
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FH-8116300984.JPEG?alt=media&token=c329bf3c-41fb-454c-a5e8-a9cf17fe8487")
        .img-container-2
          img(src="https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage15.jpg?alt=media&token=bc972bb4-dec6-4d06-9a0b-847980c9c4c5")
        .text-container-2
          p Es el lugar perfecto para pasar unas relajantes y/o aventureras vacaciones. Con fácil acceso a los diferentes campos de golf, Parques Naturales, Parques de Animales Salvajes, Parques Acuáticos, paseos por la montaña y alrededor del Embalse, las playas o simplemente tomar el sol en la terraza o piscina del alojamiento, es el lugar ideal.
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .container-fluid {
    /* background-color: lightslategrey; */
    padding: 30px 0;
    /* color: white; */
  }
  .grid-container {
    display: grid;
    grid-template: 1fr 200px / repeat(3, 1fr);
    grid-gap: 10px;
    grid-template-areas:  "text1 img1 img2"
                          "text2 text2 img2";
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .text-container p {
    padding-bottom: 50px;
  }
  .img-container-1 {
    grid-area: img1;
  }
  .img-container-1 img {
    width: 371px;
    height: 418px;
    object-fit: cover;
    object-position: 30% center;
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
    align-items: flex-end;
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
      display: block;
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
  }
</style>