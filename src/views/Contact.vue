<template lang="pug">
  .container
    .row
      .col-sm-12.text-center.col-md-6
        h3 Isabel Hijano Pérez
        h4 Alojamientos Huetor
        p {{ $t('contact.text1') }}
        img(:src="img.src")
      .col-sm-12.col-md-6
        h2 {{ $t('contact.text2') }}
        form(
          method="POST"
          action="https://formspree.io/huetor@gmail.com"
          )
          .form-group
            label(for="nombre") {{ $t('contact.form.name') }}
            input.form-control#nombre(
              :placeholder="$t('contact.form.namePH')"
              name="nombre",
              type="text",
              required
              )
          .form-group
            label(for="email") {{ $t('contact.form.email') }}
            input.form-control#email(
              :placeholder="$t('contact.form.emailPH')"
              name="email",
              type="email",
              required
              )
          .form-group
            label(for="mensaje") {{ $t('contact.form.message') }}
            textarea.form-control#mensaje(
              :placeholder="$t('contact.form.messagePH')"
              name="mensaje",
              rows="5",
              required
              )
          button.btn.btn-primary(type='submit') {{ $t('contact.button') }}
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