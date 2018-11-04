<template lang="pug">
  .container-fluid
    b-container
      b-row.mb-5.mt-5
        .col-5
          h3.title Como en casa
          p
            | Cada casa consta de dos grandes dormitorios, salón/comedor, cocina totalmente equipada, dos baños, una gran terraza con barbacoa.
          p
            | Chimenea en el salón para aquellos que les guste el calor del fuego en invierno. Aire Acondicionado y Calefacción (en las habitaciones).
          router-link.btn.btn-warning.btn-lg.mr-2(to="gallery") Ir a la Galería
        .col
          .row
            .col
              img(:src='Image9', alt='')
            .col
              img(:src='Image11', alt='')
          .row
            .col
              img(:src='Image12', alt='')
            .col
              img(:src='Image13', alt='')

</template>

<script>
  export default {
    props: {
      Image9: { type: String, required: true },
      Image11: { type: String, required: true },
      Image12: { type: String, required: true },
      Image13: { type: String, required: true },
    }
  }
</script>

<style scoped>
  /* .hero {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage20.JPG?alt=media&token=0fe251a5-db49-4332-a232-e06eef2b38bf');
    background-size: cover;
    background-position: center 40%;
    height: 500px;
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.35);
  } */
  .container-fluid {
    background-color:#fefdeb;
    padding: 20px 0; 
    margin: 100px 0;
  }
  img {
    width: 100%;
    border-radius: 5px;
    /* height: 100%; */
    margin-bottom: 10px;
  }
  .col-5 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .btn {
    align-self: flex-start;
  }
  h3 {
    font-size: 4em;
  }
</style>