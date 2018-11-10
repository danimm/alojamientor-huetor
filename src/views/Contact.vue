<template lang="pug">
  .container
    .row
      .col-sm-12.text-center.col-md-6
        h3 Isabel Hijano Pérez
        h4 CEO Alojamientos Huetor
        p Hola! Soy Isa escríbeme cualquier duda que tengas y te intentaré responder en menos de 24 horas.
        img(:src="img.src")
      .col-sm-12.col-md-6
        h2 Envíanos tus dudas
        form(
          method="POST"
          action="https://formspree.io/danimm.dev@gmail.com"
          )
          .form-group
            label(for="nombre") Nombre
            input.form-control#text(name="text",type="text",required)
          .form-group
            label(for="email") Email
            input.form-control#email(name="email",type="email",required)
          .form-group
            label(for="mensaje") Mensaje
            textarea.form-control#mensaje(name="message",rows="5",required)
          button.btn.btn-primary(type='submit') Enviar
          //- b-button(type='reset', variant='danger') Reiniciar

</template>

<script>
export default {
  data () {
    return {
      img: {
        src: 'https://a0.muscache.com/im/pictures/b387ac49-5c3d-4c0c-8762-76583de4cf78.jpg?aki_policy=profile_x_medium'
        }
      }
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .btn {
    margin-right: 20px;
  }
  h4 {
    margin-bottom: 20px;
  }
  img {
    width: 70%;
    border: 5px solid #2d3338ed;
    border-radius: 50%;
  }

  @media screen and (max-width: 567px){
    .col-sm-12 {
      margin-bottom: 40px;
    }
    img {
      max-width: 50%;
    } 
  }

</style>