<template lang="pug">
  //- footer#footer.pb-4.pt-4
  //-   .container
  //-     .row.text-center
  //-       .col-12.col-lg.pb-2.pt-2
  //-         a(href='#') Preguntas frecuentes
  //-       .col-12.col-lg.pb-2.pt-2
  //-         a(href='#') Contacto
  //-       .col-12.col-lg.pb-2.pt-2
  //-         a(href='#') Dónde estamos
  //-       .col-12.col-lg.pb-2.pt-2
  //-         a(href='#') Terminos y condiciones
  footer.pb-4.pt-4
    b-container
      b-row
        b-col 
          a Preguntas frecuentes
        b-col 
          a Contacto
        b-col 
          a Dónde estamos
        b-col 
          a Terminos y condiciones

</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  footer {
    background-color: #28544B;
  }

  footer a  {
    color: #F1F1F1 !important;
    font-weight: bold;
  }
</style>