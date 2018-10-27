<template lang="pug">
  .hero
    .overlay
      b-container
        b-row.mb-5.mt-5
          h3.title.text-white Las habitaciones de Huetor
        b-row
          b-col.pl-0
            img(:src='Image10', alt='')
          b-col
            img(:src='Image11', alt='')
          b-col
            img(:src='Image12', alt='')
          b-col
            img(:src='Image13', alt='')
        b-row.mt-5
          b-col.pl-0(cols='10')
            p.text-white
              | Cada casa consta de dos grandes dormitorios, salón/comedor, cocina totalmente equipada, dos baños, una gran terraza con barbacoa.
              | Chimenea en el salón para aquellos que les guste el calor del fuego en invierno. Aire Acondicionado y Calefacción (en las habitaciones).
          b-col.bt-container
            b-button(size='lg', variant='warning') Reservar

</template>

<script>
  export default {
    props: {
      Image10: { type: String, required: true },
      Image11: { type: String, required: true },
      Image12: { type: String, required: true },
      Image13: { type: String, required: true },
    }
  }
</script>

<style scoped>
  .hero {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/huetor-16ddf.appspot.com/o/images%2FImage2.JPG?alt=media&token=8e846eb0-c9d2-4311-af38-8032ce2c6faa');
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
    background-color: rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
  }
  .bt-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>